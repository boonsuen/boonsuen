import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPosts } from '@/app/db/posts';
import { CustomMDX } from '@/components/mdx';

export async function generateStaticParams() {
  const posts = getPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata | undefined> {
  let post = getPosts().find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  let { title, publishedAt: publishedTime, description } = post.metadata;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `https://boonsuen.com/posts/${post.slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

function formatDate(date: string) {
  if (!date.includes('T')) {
    date = `${date}T00:00:00`;
  }
  let targetDate = new Date(date);

  let fullDate = targetDate.toLocaleString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return `${fullDate}`;
}

export default async function Post({ params }: { params: { slug: string } }) {
  const post = getPosts().find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="layout-container">
      <section className="max-w-[688px] py-20 mx-auto">
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BlogPosting',
              headline: post.metadata.title,
              datePublished: post.metadata.publishedAt,
              dateModified: post.metadata.updatedAt,
              description: post.metadata.description,
              url: `https://boonsuen.com/writing/${post.slug}`,
              author: {
                '@type': 'Person',
                name: 'Boonsuen Oh',
              },
            }),
          }}
        />
        <h1 className="title font-medium font-serif text-3xl max-w-[650px]">
          {post.metadata.title}
        </h1>
        <div className="flex justify-between items-center mt-2 mb-8 text-sm max-w-[650px]">
          <p className="text-sm text-neutral-600">
            {formatDate(post.metadata.publishedAt)}
          </p>
        </div>
        <article className="prose">
          <CustomMDX source={post.content} />
        </article>
      </section>
    </div>
  );
}
