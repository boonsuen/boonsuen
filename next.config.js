const withMDX = require('@next/mdx')();

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

module.exports = withMDX(nextConfig);
