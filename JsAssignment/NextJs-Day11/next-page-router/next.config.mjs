import withBundleAnalyzer from '@next/bundle-analyzer';

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    fetchCache: 'force-cache', // This sets default fetch cache behavior
  },
  images: {
    domains: ['dummyjson.com'], // Allow images from dummyjson.com
  },
};

export default withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
  openAnalyzer: false,
})(nextConfig);
