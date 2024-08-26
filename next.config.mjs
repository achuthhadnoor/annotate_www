/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['ph-avatars.imgix.net'], // Add your domain(s) here
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cross-Origin-Embedder-Policy',
            value: 'require-corp youtube producthunt',
          },
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin',
          },
        ],
      },
    ]
  },
  reactStrictMode: true,
  experimental: {
    sharedArrayBuffer: true,
  },
}
export default nextConfig
