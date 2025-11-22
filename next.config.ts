import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 移除 output: 'standalone' - 这是为 Docker 准备的
  // Cloudflare Pages 不需要这个配置
};

export default nextConfig;
