import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // standalone 模式 - 适合 Docker 部署
  output: 'standalone',

  // 禁用图片优化
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
