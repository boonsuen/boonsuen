import { getPosts } from '@/app/db/posts';

export const baseUrl = 'https://boonsuen.com';

export default async function sitemap() {
  let blogs = getPosts().map((post) => ({
    url: `${baseUrl}/writing/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  let routes = ['', '/work', '/writing', '/lists'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes, ...blogs];
}
