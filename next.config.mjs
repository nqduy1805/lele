/** @type {import('next').NextConfig} */

const nextConfig = {
    experimental: {
      ppr: 'incremental',
    },
    async redirects() {
      return [
        {
          source: '/',
          destination: '/home',
          permanent: true,
        },
      ]
    },
  };

export default nextConfig;
