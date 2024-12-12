/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Adding redirects to your configuration
  async redirects() {
    return [
      {
        source: '/:path*',  // Matches all paths under itstaffaugmentation.datasack.in
        destination: 'https://datasack.in/itstaffaugmentation/:path*', // Redirect to the new location
        statusCode:301,
        permanent: true,     // This makes it a 301 redirect (permanent)
      },
    ];
  },
};

export default nextConfig;
