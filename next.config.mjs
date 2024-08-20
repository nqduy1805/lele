/** @type {import('next').NextConfig} */

const nextConfig = {
    experimental: {
      ppr: 'incremental',
      serverActions: {
        bodySizeLimit: '5mb'
      },
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
