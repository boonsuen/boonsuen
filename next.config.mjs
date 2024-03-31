import * as NextMdx from '@next/mdx';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const withMDX = NextMdx.default({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
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
