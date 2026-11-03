import type { MetadataRoute } from 'next';
import { getProductSlugs } from '@/lib/products';
import { siteUrl } from '@/lib/site';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const products = await getProductSlugs();

  const productPages = products.map(({ slug }) => ({
    url: `${siteUrl}/shop/${slug}`,
  }));

  return [{ url: siteUrl }, { url: `${siteUrl}/shop` }, ...productPages];
}
