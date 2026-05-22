import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  // 1. On récupère tous tes articles Markdown
  const articles = await getCollection('blog');

  // 2. On génère le fichier XML
  return rss({
    title: 'Mon Blog',
    description: 'Les articles de mon blog Astro',
    site: context.site,
    items: articles.map((article) => ({
      title: article.data.title,
      description: article.data.description,
      pubDate: article.data.date,
      link: `/SSG-blog/blog/${article.id}/`,
    })),
  });
}