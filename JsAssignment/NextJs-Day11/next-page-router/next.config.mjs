import withBundleAnalyzer from '@next/bundle-analyzer';

const nextConfig = {
  reactStrictMode: true, 
  images: {
    domains: ['dummyjson.com'], 
  },
};

export default withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',  
  openAnalyzer: false,
})(nextConfig);
