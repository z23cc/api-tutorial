import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Claude Code 使用教程 - AI 编程助手配置指南",
  description: "详细教程指导您在 Windows、macOS、Linux 系统上安装和配置 Claude Code AI 编程工具",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>
        {children}
      </body>
    </html>
  );
}
