import { config, collection, fields } from '@keystatic/core';

const CATEGORIES = [
  'State and Power',
  'Culture and History',
  'Literature and Media',
  'Sports and Events',
  'Science and Technology',
  'Society and Future',
  'Ideologies and Philosophies',
  'Life',
];

export default config({
  storage: {
    kind: 'github',
    repo: 'ozymandiasv/last-page',
  },
  ui: {
    brand: { name: 'Last Page · O IV' },
  },
  collections: {
    blogs: collection({
      label: 'Blog',
      slugField: 'title',
      path: 'src/content/blogs/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        subtitle: fields.text({ label: 'Subtitle' }),
        date: fields.date({ label: 'Date' }),
        category: fields.select({
          label: 'Category',
          options: CATEGORIES.map(c => ({ label: c, value: c })),
          defaultValue: 'Life',
        }),
        tags: fields.array(
          fields.text({ label: 'Tag' }),
          { label: 'Tags', itemLabel: props => props.fields.value.value }
        ),
        cover: fields.image({
          label: 'Cover Image',
          directory: 'public/images',
          publicPath: '/images/',
        }),
        published: fields.checkbox({ label: 'Published', defaultValue: true }),
        content: fields.markdoc({ label: 'Content' }),
      },
    }),
    essays: collection({
      label: 'Essay',
      slugField: 'title',
      path: 'src/content/essays/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        subtitle: fields.text({ label: 'Subtitle' }),
        date: fields.date({ label: 'Date' }),
        category: fields.select({
          label: 'Category',
          options: CATEGORIES.map(c => ({ label: c, value: c })),
          defaultValue: 'Ideologies and Philosophies',
        }),
        tags: fields.array(
          fields.text({ label: 'Tag' }),
          { label: 'Tags', itemLabel: props => props.fields.value.value }
        ),
        cover: fields.image({
          label: 'Cover Image',
          directory: 'public/images',
          publicPath: '/images/',
        }),
        published: fields.checkbox({ label: 'Published', defaultValue: true }),
        content: fields.markdoc({ label: 'Content' }),
      },
    }),
    verses: collection({
      label: 'Verse',
      slugField: 'title',
      path: 'src/content/verses/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        date: fields.date({ label: 'Date' }),
        preview: fields.text({ label: 'Preview (first 2 lines)', multiline: true }),
        tags: fields.array(
          fields.text({ label: 'Tag' }),
          { label: 'Tags', itemLabel: props => props.fields.value.value }
        ),
        published: fields.checkbox({ label: 'Published', defaultValue: true }),
        content: fields.markdoc({ label: 'Content' }),
      },
    }),
    notes: collection({
      label: 'Notes',
      slugField: 'title',
      path: 'src/content/notes/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title (internal only)' } }),
        date: fields.date({ label: 'Date' }),
        tags: fields.array(
          fields.text({ label: 'Tag' }),
          { label: 'Tags', itemLabel: props => props.fields.value.value }
        ),
        published: fields.checkbox({ label: 'Published', defaultValue: true }),
        content: fields.markdoc({ label: 'Content' }),
      },
    }),
  },
});
