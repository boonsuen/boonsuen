import { getPosts } from '@/app/db/posts';
import Link from 'next/link';

export default function WritingPage() {
  const allPosts = getPosts();

  return (
    <main className="min-h-screen layout-container">
      <h1 className="my-10 font-serif text-[clamp(3rem,15cqi,4.5rem)] [line-height:1.1cap] tracking-[-0.025em]">
        Writing
      </h1>
      <hr className="border-main/20" />
      <p className="uppercase mt-6 mb-12 text-[15px]">
        Notes, brain dumps, explorations, guides.
      </p>
      {allPosts
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/writing/${post.slug}`}
          >
            <div className="w-full flex flex-col">
              <p className="text-lg">{post.metadata.title}</p>
              <p className="text-[15px] text-main/60">
                {new Date(post.metadata.publishedAt).toLocaleString('en-GB', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </p>
            </div>
          </Link>
        ))}
    </main>
  );
}
