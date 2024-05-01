/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        pathname: "**",
      },
    ],
  },
  experimental: {
    reactRoot: true,
    missingSuspenseWithCSRBailout: false,
  },
};

export default nextConfig;
