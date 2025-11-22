import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 静态导出配置 - 适合 Cloudflare Pages
  output: 'export',

  // 可选：如果你有图片优化需求，取消下面的注释
  // images: {
  //   unoptimized: true,
  // },
};

export default nextConfig;
