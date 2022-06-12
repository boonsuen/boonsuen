/**
 * @type {import('next').NextConfig}
 */
 const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  async rewrites() {
    return [
      {
        source: '/process-scheduling-solver',
        destination: 'https://process-scheduling-solver.vercel.app/process-scheduling-solver',
      },
      {
        source: '/process-scheduling-solver/:slug*',
        destination: 'https://process-scheduling-solver.vercel.app/process-scheduling-solver/:slug*',
      },
    ]
  },
};

module.exports = nextConfig;
