import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // Emit folder/index.html instead of folder.html so Apache (cPanel) serves
  // /about/ correctly — without this, /about/ hits the asset directory and 403s.
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
