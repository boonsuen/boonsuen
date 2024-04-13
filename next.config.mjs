import createMDX from '@next/mdx';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypePrettyCode from 'rehype-pretty-code';

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          theme: 'night-owl',
        },
      ],
      rehypeKatex,
    ],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  async redirects() {
    return [
      {
        source: '/process-scheduling-solver',
        destination: 'https://process-scheduling-solver.boonsuen.com',
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [];
  },
};

export default withMDX(nextConfig);
