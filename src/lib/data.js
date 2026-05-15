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

export const BLOGS = [
  {
    id:'b1', slug:'three-days-in-konkan', type:'Blog',
    title:'Three Days in Konkan and What the Rain Reminded Me',
    subtitle:'On the Western Ghats, the monsoon, and the particular loneliness of travelling without a plan.',
    date:'2025-05-12', category:'Life',
    cover:'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80',
    tags:[{name:'memory',colour:'purple'},{name:'travel',colour:'blue'},{name:'monsoon',colour:'teal'}],
    body:`<p>The bus left Pune at half past five, still dark. I had the window seat and spent the first hour watching the city thin out into sugarcane fields, then the fields fold into the Sahyadri.</p><p>By the time we began the descent, the clouds had closed in completely. The Western Ghats in monsoon are not dramatic — they are quiet in a way that feels almost accusatory, as if the mountain has decided to stop explaining itself to you.</p><p>I had come without a plan, which is the only honest way to come to a place you don't understand. Three days. No itinerary. Just a name on a map and a bag that was slightly too heavy for someone claiming to travel light.</p><p>The village had one restaurant that served only rice and fish curry. I ate there three times a day. On the second evening the owner sat down at my table without asking and told me about the year the river changed course. He spoke for forty minutes. I did not understand half of it. I nodded anyway because the shape of what he was saying was enough.</p>`
  },
  {
    id:'b2', slug:'maradona-political', type:'Blog',
    title:'Why Maradona Was Always Political',
    subtitle:'The Hand of God was not cheating. It was a statement.',
    date:'2025-04-18', category:'Sports and Events',
    cover:'https://images.unsplash.com/photo-1551958219-acbc608c6377?w=1200&q=80',
    tags:[{name:'football',colour:'green'},{name:'politics',colour:'red'},{name:'argentina',colour:'blue'}],
    body:`<p>The hand of God was not cheating. It was a statement. Maradona knew exactly what he was doing when he punched the ball into the English net in 1986 — four years after the Falklands War, with Argentina still raw from the wound.</p><p>He said so himself, years later. It was revenge. Not personal revenge — political revenge, on behalf of a people who had lost sons to a war over rocks in the South Atlantic that the British called the Falklands and the Argentines called the Malvinas.</p><p>This is what separated Maradona from every other footballer of his generation. He never pretended the game existed outside of history.</p>`
  },
  {
    id:'b3', slug:'ranjit-singh-museum', type:'Blog',
    title:'A Saturday at the Ranjit Singh Museum',
    subtitle:'Small rooms for a man who once controlled half the subcontinent.',
    date:'2025-04-10', category:'Culture and History',
    cover:'https://images.unsplash.com/photo-1564399579883-451a5d44ec08?w=1200&q=80',
    tags:[{name:'history',colour:'amber'},{name:'punjab',colour:'orange'},{name:'museum',colour:'teal'}],
    body:`<p>The museum is smaller than you'd expect for a man who once controlled half the subcontinent. A few rooms. Glass cases. Weapons, coins, paintings. The kind of place where school groups file through without looking up.</p><p>I went on a Saturday because I had nowhere else to be. I stayed for three hours.</p><p>What keeps you is not the objects but the gaps between them. A sword with no story attached. A painting where the faces have been scratched out by someone, at some point, for reasons no placard explains.</p>`
  },
  {
    id:'b4', slug:'sleeper-train', type:'Blog',
    title:'Notes from a Sleeper Train',
    subtitle:'Somewhere after midnight, a chai vendor and the specific loneliness of 2 AM work.',
    date:'2025-03-15', category:'Life',
    cover:'https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=1200&q=80',
    tags:[{name:'travel',colour:'blue'},{name:'india',colour:'green'},{name:'night',colour:'purple'}],
    body:`<p>The berth above mine was occupied by a man who snored in a rhythm so consistent it eventually became comforting. The train moved through the dark. Somewhere after midnight we stopped at a station with no name I could see, and a chai vendor walked the platform calling out in a voice that carried everything — exhaustion, habit, the specific loneliness of 2 AM work.</p><p>I bought a cup I didn't need. It cost seven rupees. It was the best chai I have ever had, which is a thing I always say about chai bought on platforms at night, and which is always true.</p>`
  },
  {
    id:'b5', slug:'cinema-saturday', type:'Blog',
    title:'The Last Cinema Hall in the District',
    subtitle:'Single screens are not just dying — they are being unmourned.',
    date:'2025-02-28', category:'Culture and History',
    cover:'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1200&q=80',
    tags:[{name:'cinema',colour:'pink'},{name:'memory',colour:'purple'},{name:'loss',colour:'gray'}],
    body:`<p>The projector was still the original one. The owner told me this with pride, the way people speak about things that have outlasted everything reasonable.</p><p>The hall seated four hundred. On the afternoon I visited there were eleven of us watching a film none of us had chosen — it was simply what was playing. This is the thing about single screens that streaming cannot replicate: the democracy of the schedule.</p>`
  },
  {
    id:'b6', slug:'monsoon-pune', type:'Blog',
    title:'Pune in the First Week of Monsoon',
    subtitle:'The city becomes a different place. Briefly, everyone is equal under the rain.',
    date:'2025-02-10', category:'Life',
    cover:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80',
    tags:[{name:'pune',colour:'green'},{name:'monsoon',colour:'teal'},{name:'city',colour:'blue'}],
    body:`<p>The first rain of the monsoon arrives in Pune like an apology. After months of heat that makes you reconsider everything about your choice to live here, the sky breaks open and for one afternoon the city smells like it might be forgivable.</p>`
  },
  {
    id:'b7', slug:'reading-habit', type:'Blog',
    title:'How I Accidentally Became Someone Who Reads',
    subtitle:'It started with boredom. It became the most important thing.',
    date:'2025-01-20', category:'Literature and Media',
    cover:'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=1200&q=80',
    tags:[{name:'reading',colour:'amber'},{name:'books',colour:'blue'},{name:'habit',colour:'green'}],
    body:`<p>I did not grow up in a reading household. There were books — a shelf, a few stray paperbacks, an encyclopaedia set that was already outdated when it was bought — but nobody read them for pleasure. Reading was what you did for school and then stopped.</p><p>I became a reader at twenty-two out of pure boredom on a long train journey with a dead phone.</p>`
  },
  {
    id:'b8', slug:'football-memory', type:'Blog',
    title:'The Match I Remember Wrong',
    subtitle:'Memory and sport have the same problem: they both rewrite themselves.',
    date:'2024-12-15', category:'Sports and Events',
    cover:'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=1200&q=80',
    tags:[{name:'football',colour:'green'},{name:'memory',colour:'purple'},{name:'nostalgia',colour:'amber'}],
    body:`<p>I have told the story of this match at least thirty times. Each time, I am more certain of the details. Each time, I suspect, the details are slightly less true.</p>`
  },
];

export const ESSAYS = [
  {
    id:'e1', slug:'death-of-slow-cinema', type:'Essay',
    title:'The Death of Slow Cinema and What We Lost With It',
    subtitle:'On Tarkovsky, attention, and the contract between filmmaker and viewer.',
    date:'2025-04-28', category:'Culture and History',
    cover:'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1200&q=80',
    tags:[{name:'cinema',colour:'pink'},{name:'culture',colour:'purple'},{name:'attention',colour:'amber'}],
    body:`<p>There is a scene in Tarkovsky's <em>The Mirror</em> that lasts nearly four minutes and contains almost no dialogue. A woman stands in a field before a storm. Wind moves through the grass. That is all.</p><p>To a contemporary audience raised on the rhythm of social media — where the average viewing duration of a video is measured in seconds — this scene is unwatchable. Not because it is bad. But because we have collectively lost the attentional muscle required to receive it.</p><p>Slow cinema was never about boredom. It was about a different contract between filmmaker and viewer — one that asked you to bring your own interiority to the image, to complete the meaning with your own associations, fears, and memories. The film was not the experience. You were.</p><p>What replaced it is not cinema. It is content. Content is optimised. It assumes you will leave. It front-loads, it hooks, it resolves quickly. It is terrified of your attention the way a bad salesman is terrified of silence.</p>`
  },
  {
    id:'e2', slug:'ideology-certainty', type:'Essay',
    title:'Ideology and the Comfort of Certainty',
    subtitle:'The appeal of ideology is not stupidity. It is exhaustion.',
    date:'2025-03-10', category:'Ideologies and Philosophies',
    cover:'https://images.unsplash.com/photo-1432821596592-e2c18b78144f?w=1200&q=80',
    tags:[{name:'ideology',colour:'purple'},{name:'politics',colour:'red'},{name:'certainty',colour:'amber'}],
    body:`<p>The appeal of ideology is not stupidity. It is exhaustion. Thinking carefully about every political question, holding uncertainty, weighing evidence — this is genuinely hard work. Ideology offers relief. Here is a framework. Here is who the enemy is. Here is what to believe.</p><p>This is why ideology is most appealing at the moments of greatest complexity. When the world becomes genuinely difficult to parse, the demand for simple narratives rises. This is not a failure of intelligence. It is a response to cognitive overload.</p>`
  },
  {
    id:'e3', slug:'knowing-too-much', type:'Essay',
    title:'On Knowing Too Much Too Soon',
    subtitle:'The particular damage of understanding the world\'s cruelty before you have vocabulary for it.',
    date:'2025-05-05', category:'Ideologies and Philosophies',
    cover:'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1200&q=80',
    tags:[{name:'knowledge',colour:'blue'},{name:'youth',colour:'green'},{name:'damage',colour:'red'}],
    body:`<p>There is a particular kind of damage that comes from understanding the world's cruelty before you have the emotional vocabulary to process it. Not trauma exactly — more like a permanent tilt, a slight lean toward the dark in every room you enter.</p><p>I grew up reading the news. My father kept three newspapers on the table every morning. By twelve I knew about genocides, famines, political prisoners. By fifteen I had opinions about all of it. By twenty I was exhausted in a way I could not explain to people who had come to the same knowledge more slowly.</p>`
  },
  {
    id:'e4', slug:'language-thought', type:'Essay',
    title:'Does Language Shape What We Can Think?',
    subtitle:'The Sapir-Whorf hypothesis, colour words, and the limits of translation.',
    date:'2025-02-15', category:'Science and Technology',
    cover:'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=1200&q=80',
    tags:[{name:'language',colour:'blue'},{name:'cognition',colour:'teal'},{name:'philosophy',colour:'purple'}],
    body:`<p>The Russian language has two separate words for light blue and dark blue — <em>goluboy</em> and <em>siniy</em> — where English has only one. Russian speakers, studies suggest, are faster at distinguishing between shades that cross this boundary than English speakers are. The language is not just naming a distinction that already exists. It may be creating the distinction in perception.</p>`
  },
  {
    id:'e5', slug:'internet-scholar', type:'Essay',
    title:'The Internet Made Everyone an Expert',
    subtitle:'And no one a scholar. The difference is time.',
    date:'2025-01-10', category:'Society and Future',
    cover:'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=80',
    tags:[{name:'internet',colour:'blue'},{name:'knowledge',colour:'amber'},{name:'modernity',colour:'gray'}],
    body:`<p>Expertise is claimed in minutes. Scholarship takes years and still ends in uncertainty. The internet collapsed the distance between these two things until they became, in the public imagination, interchangeable.</p><p>This is not the internet's fault exactly. It is the fault of what we chose to build with it — platforms that reward confidence over accuracy, speed over depth, engagement over truth.</p>`
  },
];

export const NOTES = [
  { id:'n1', slug:'opinion-certainty', type:'Notes', date:'2025-05-01', tags:[{name:'thinking',colour:'purple'}], body:`Every opinion I hold with certainty is probably the last one I actually examined carefully. The rest I inherited and forgot to question.` },
  { id:'n2', slug:'nostalgia-grief', type:'Notes', date:'2025-04-30', tags:[{name:'memory',colour:'purple'}], body:`Nostalgia is just grief with better PR. We've made it warm and sepia-toned. Underneath it's the same thing — wanting something back that isn't coming back.` },
  { id:'n3', slug:'reading-speed', type:'Notes', date:'2025-04-15', tags:[{name:'books',colour:'blue'}], body:`People who say they don't have time to read but watch three hours of television a day don't have a time problem. They have a priority problem. Which is fine. But name it correctly.` },
  { id:'n4', slug:'cities-memory', type:'Notes', date:'2025-04-02', tags:[{name:'cities',colour:'teal'}], body:`Cities remember everything. The buildings change, the people change, the names change. But the shape of a street that used to lead somewhere important still pulls at you even after the destination is gone.` },
  { id:'n5', slug:'silence-rooms', type:'Notes', date:'2025-03-22', tags:[{name:'observation',colour:'green'}], body:`Some rooms are loud even when no one is speaking. Some people are silent even when they won't stop talking.` },
  { id:'n6', slug:'certainty-intelligence', type:'Notes', date:'2025-03-10', tags:[{name:'thinking',colour:'purple'}], body:`Certainty is not a sign of intelligence. It is usually a sign that someone stopped thinking at exactly the moment they became comfortable.` },
  { id:'n7', slug:'cricket-time', type:'Notes', date:'2025-02-28', tags:[{name:'cricket',colour:'green'}], body:`Test cricket is the only sport that teaches you that nothing has to be resolved today. This is either a philosophy or a flaw depending on your temperament.` },
  { id:'n8', slug:'phone-presence', type:'Notes', date:'2025-02-14', tags:[{name:'technology',colour:'blue'}], body:`The phone has made us available everywhere and present nowhere. This seemed like a fair trade until you realized presence was the only thing that mattered.` },
  { id:'n9', slug:'morning-ritual', type:'Notes', date:'2025-02-01', tags:[{name:'life',colour:'green'}], body:`The most honest hour of the day is 6 AM. You haven't started performing yet. You're still just a person.` },
  { id:'n10', slug:'translation-loss', type:'Notes', date:'2025-01-18', tags:[{name:'language',colour:'blue'}], body:`Every translation is also an argument about what the original meant. The translator always wins because the reader never knows there was a fight.` },
];

export const VERSES = [
  {
    id:'v1', slug:'still-water', type:'Verse', title:'still water', date:'2025-04-22',
    tags:[{name:'grief',colour:'purple'},{name:'patience',colour:'green'}],
    preview:'I keep returning to the same river / as if the water owes me something.',
    body:`<p>I keep returning to the same river<br>as if the water owes me something.</p><p>It doesn't.</p><p>The current moves around the stone<br>not because it forgives it<br>but because moving is all it knows<br>how to do.</p><p>I have been the stone for years.<br>I am only now learning<br>that this, too, is a kind of grace.</p>`
  },
  {
    id:'v2', slug:'inventory', type:'Verse', title:'inventory', date:'2025-03-28',
    tags:[{name:'self',colour:'pink'},{name:'loss',colour:'purple'}],
    preview:'things I have lost and not looked for: / one watch, my grandmother\'s voice',
    body:`<p>things I have lost and not looked for:<br>one watch, my grandmother's voice,<br>the name of the boy who was kind to me<br>in the third standard.</p><p>things I have kept without meaning to:<br>a receipt from a restaurant in Mysore,<br>the habit of flinching,<br>you.</p>`
  },
  {
    id:'v3', slug:'city-rain', type:'Verse', title:'city, rain', date:'2025-03-05',
    tags:[{name:'city',colour:'teal'},{name:'rain',colour:'blue'}],
    preview:'The road after rain / holds its breath / before the traffic starts again.',
    body:`<p>The road after rain<br>holds its breath<br>before the traffic starts again.</p><p>For thirty seconds<br>the city is almost<br>what it wanted to be.</p>`
  },
  {
    id:'v4', slug:'some-mornings', type:'Verse', title:'some mornings', date:'2025-02-20',
    tags:[{name:'morning',colour:'amber'},{name:'ordinary',colour:'gray'}],
    preview:'Some mornings the light / comes through the window / at exactly the angle of forgiveness.',
    body:`<p>Some mornings the light<br>comes through the window<br>at exactly the angle of forgiveness.</p><p>I don't move.<br>I let it find me<br>where I am.</p>`
  },
  {
    id:'v5', slug:'last-page', type:'Verse', title:'last page', date:'2025-01-30',
    tags:[{name:'reading',colour:'amber'},{name:'ending',colour:'gray'}],
    preview:'I have always read the last page first. / Not for the ending — / for the permission to begin.',
    body:`<p>I have always read the last page first.<br>Not for the ending —<br>for the permission to begin.</p><p>Knowing how it ends<br>doesn't ruin anything.<br>It means I can pay attention<br>to everything else.</p>`
  },
  {
    id:'v6', slug:'what-remains', type:'Verse', title:'what remains', date:'2025-01-10',
    tags:[{name:'time',colour:'blue'},{name:'memory',colour:'purple'}],
    preview:'What remains after everything / is not what you expected to keep.',
    body:`<p>What remains after everything<br>is not what you expected to keep.</p><p>Not the photograph.<br>Not the letter.<br>The smell of a room<br>you can no longer enter.</p>`
  },
  {
    id:'v7', slug:'distance', type:'Verse', title:'distance', date:'2024-12-20',
    tags:[{name:'distance',colour:'teal'},{name:'longing',colour:'pink'}],
    preview:'Distance is just time / that hasn\'t finished / becoming absence yet.',
    body:`<p>Distance is just time<br>that hasn't finished<br>becoming absence yet.</p>`
  },
  {
    id:'v8', slug:'ordinary-tuesday', type:'Verse', title:'ordinary tuesday', date:'2024-12-05',
    tags:[{name:'ordinary',colour:'gray'},{name:'life',colour:'green'}],
    preview:'Nothing happened today / that will be remembered. / I am trying to decide / if that is a failure.',
    body:`<p>Nothing happened today<br>that will be remembered.</p><p>I am trying to decide<br>if that is a failure<br>or the whole point.</p>`
  },
];

// All posts merged and sorted by date
export const ALL_POSTS = [...BLOGS, ...ESSAYS, ...NOTES, ...VERSES]
  .sort((a, b) => new Date(b.date) - new Date(a.date));
