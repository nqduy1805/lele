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
    images: {
      domains: ['lh3.googleusercontent.com'], // Thêm domain này
    },
  };
  export default nextConfig;
