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
      {
        source: '/hodler',
        destination: 'https://hodler.netlify.app',
      },
      {
        source: '/hodler/:slug*',
        destination: 'https://hodler.netlify.app/:slug*',
      },
      {
        source: '/tictactoe',
        destination: 'https://tictactoe-bs.netlify.app',
      },
      {
        source: '/tictactoe/:slug*',
        destination: 'https://tictactoe-bs.netlify.app/:slug*',
      },
      {
        source: '/hodler-serverful',
        destination: 'https://hodler-app.herokuapp.com',
      },
      {
        source: '/hodler-serverful/:slug*',
        destination: 'https://hodler-app.herokuapp.com/:slug*',
      },
    ]
  },
};

module.exports = nextConfig;
