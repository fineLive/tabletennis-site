import type { NextConfig } from "next";

// 静态导出：构建产物在 out/，可部署到 Cloudflare Workers 等纯静态托管。
// 注意：静态导出模式下不支持中间件、重定向、响应头配置和默认图片优化。
const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
