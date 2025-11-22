import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 静态导出配置 - 适合 Cloudflare Pages
  output: 'export',

  // 禁用图片优化 - 静态导出必须
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
