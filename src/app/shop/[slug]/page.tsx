import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProductBySlug, getProductSlugs } from '@/lib/products';

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getProductSlugs();
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  return product
    ? { title: product.name, description: product.description }
    : {};
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) notFound();

  return (
    <article className="mx-auto max-w-6xl px-6 py-12">
      <nav aria-label="Breadcrumb">
        <ol className="flex flex-wrap gap-2 text-sm">
          <li>
            <Link href="/">Home</Link> <span aria-hidden="true">/</span>
          </li>
          <li>
            <Link href="/shop">Shop</Link> <span aria-hidden="true">/</span>
          </li>
          <li>
            <span aria-current="page">{product.name}</span>
          </li>
        </ol>
      </nav>

      <div className="mt-8 grid gap-10 md:grid-cols-2">
        <div className="bg-sage-mist relative aspect-[4/5] overflow-hidden rounded-t-full">
          <Image
            src={product.imageUrl}
            alt={product.imageAlt}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            loading="eager"
            fetchPriority="high"
            className="object-cover"
          />
        </div>

        <div>
          {product.featured && (
            <p className="text-sm tracking-widest uppercase">Best seller</p>
          )}
          <h1 className="font-heading text-deep-olive mt-2 text-4xl md:text-5xl">
            {product.name}
          </h1>
          <p className="mt-6 max-w-prose">{product.description}</p>
        </div>
      </div>
    </article>
  );
}
