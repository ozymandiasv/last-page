import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const TAG_COLOURS = ['purple','amber','blue','green','pink','teal','red','gray'];

function tagColour(name) {
  let h = 0;
  for (const c of name) h = (h * 31 + c.charCodeAt(0)) & 0xffff;
  return TAG_COLOURS[h % TAG_COLOURS.length];
}

export function formatDate(d) {
  if (!d) return '';
  return new Date(d).toLocaleDateString('en-IN', { month:'short', day:'numeric', year:'numeric' });
}

function parseFrontmatter(raw) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!match) return { data: {}, body: raw };
  const fm = match[1];
  const body = match[2].trim();
  const data = {};
  // parse simple key: "value" and key:\n  - item lists
  const lines = fm.split('\n');
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    const kv = line.match(/^(\w+):\s*"(.*)"\s*$/);
    const kvBool = line.match(/^(\w+):\s*(true|false)\s*$/);
    const kvArr  = line.match(/^(\w+):\s*$/);
    if (kv) { data[kv[1]] = kv[2]; i++; }
    else if (kvBool) { data[kvBool[1]] = kvBool[2] === 'true'; i++; }
    else if (kvArr) {
      const arr = [];
      i++;
      while (i < lines.length && lines[i].startsWith('  - ')) {
        arr.push(lines[i].replace('  - ', '').trim());
        i++;
      }
      data[kvArr[1]] = arr;
    } else { i++; }
  }
  return { data, body };
}

function readDir(dir) {
  if (!existsSync(dir)) return [];
  return readdirSync(dir)
    .filter(f => f.endsWith('.md') && !f.startsWith('.'))
    .map(f => {
      const raw = readFileSync(join(dir, f), 'utf8');
      const { data, body } = parseFrontmatter(raw);
      if (!data.published) return null;
      const slug = f.replace('.md', '');
      const tags = (data.tags || []).map(t => ({ name: t, colour: tagColour(t) }));
      return { ...data, slug, body, tags, mdFile: f };
    })
    .filter(Boolean)
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

const ROOT = process.cwd();

export function getBlogs()  { return readDir(join(ROOT, 'src/content/blogs')); }
export function getEssays() { return readDir(join(ROOT, 'src/content/essays')); }
export function getVerses() { return readDir(join(ROOT, 'src/content/verses')); }
export function getNotes()  { return readDir(join(ROOT, 'src/content/notes')); }

export function getAllPosts() {
  return [...getBlogs(), ...getEssays(), ...getVerses(), ...getNotes()]
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

// Convert markdown to HTML (simple)
export function mdToHtml(md) {
  if (!md) return '';
  return md
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/^# (.+)$/gm, '<h1>$1</h1>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/^> (.+)$/gm, '<blockquote>$1</blockquote>')
    .replace(/^- (.+)$/gm, '<li>$1</li>')
    .replace(/(<li>.*<\/li>\n?)+/g, s => `<ul>${s}</ul>`)
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2">$1</a>')
    .replace(/^---$/gm, '<hr>')
    .replace(/\n\n+/g, '</p><p>')
    .replace(/^(?!<[hbulipar])(.+)$/gm, '$1')
    .split('\n\n').map(p => {
      if (p.startsWith('<h') || p.startsWith('<ul') || p.startsWith('<blockquote') || p.startsWith('<hr')) return p;
      return `<p>${p}</p>`;
    }).join('\n');
}
