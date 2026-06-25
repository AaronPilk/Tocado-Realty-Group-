/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export — produces a plain /out folder of HTML/CSS/JS that any host
  // (Cloudflare Pages, Netlify, S3, etc.) can serve. No server required.
  output: "export",
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    // Required for static export (no server-side image optimizer).
    unoptimized: true,
  },
};

export default nextConfig;
