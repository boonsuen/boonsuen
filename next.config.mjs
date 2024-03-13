/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
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

export default nextConfig;
