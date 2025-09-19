/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    // Evita que o driver do Mongo seja empacotado no client caso algo escape
    if (!isServer) {
      config.externals.push({ mongodb: 'mongodb' });
    }
    return config;
  },
};

module.exports = nextConfig;
