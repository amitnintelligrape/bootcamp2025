import withBundleAnalyzer from '@next/bundle-analyzer';

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    fetchCache: 'force-cache',
  },
  images: {
    domains: ['dummyjson.com'],
  },
};

export default withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
  openAnalyzer: false,
})(nextConfig);
