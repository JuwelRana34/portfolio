/** @type {import('next').NextConfig} */
const nextConfig = {
  output:"export",
    images: {
      unoptimized: true,
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'developerjuwelrana.web.app',
              port: '',
             
            },
        ]
      },
};

export default nextConfig;
