import { XMLParser } from 'fast-xml-parser';

export async function fetchRSS(url, auteur) {
  try {
    const response = await fetch(url);
    const xml = await response.text();

    const parser = new XMLParser();
    const result = parser.parse(xml);

    const items = result.rss.channel.item;
    const articles = Array.isArray(items) ? items : [items];

    return articles.map(item => ({
      title: item.title,
      link: item.link,
      description: item.description,
      date: new Date(item.pubDate),
      auteur: auteur,
    }));

  } catch (error) {
    console.error(`Erreur fetch RSS ${url}:`, error);
    return [];
  }
}