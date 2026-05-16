export const AUTHOR = 'O IV';
export const SITE_NAME = 'Last Page';

export const CATEGORIES = [
  'State and Power',
  'Culture and History',
  'Literature and Media',
  'Sports and Events',
  'Science and Technology',
  'Society and Future',
  'Ideologies and Philosophies',
  'Life',
];

const TAG_COLOURS = ['purple','amber','blue','green','pink','teal','red','gray'];
export function tagColour(name) {
  let h = 0;
  for (const c of name) h = (h * 31 + c.charCodeAt(0)) & 0xffff;
  return TAG_COLOURS[h % TAG_COLOURS.length];
}

export function formatDate(d) {
  if (!d) return '';
  return new Date(d).toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' });
}

export function excerpt(html, len = 120) {
  return html.replace(/<[^>]+>/g, '').slice(0, len).trim() + '…';
}

export const BLOGS = [];

export const ESSAYS = [];

export const NOTES = [];

export const VERSES = [];

// All posts merged and sorted by date
export const ALL_POSTS = [...BLOGS, ...ESSAYS, ...NOTES, ...VERSES]
  .sort((a, b) => new Date(b.date) - new Date(a.date));
