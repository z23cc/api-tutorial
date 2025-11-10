# Claude Code 使用教程网站 - Next.js 版本

这是一个使用 **Next.js 16 + TypeScript + Tailwind CSS** 构建的现代化教程网站,用于展示 Claude Code AI 编程工具的安装和配置教程。

## 📁 项目结构

```
api-tutorial/
├── app/
│   ├── layout.tsx          # 根布局文件
│   ├── page.tsx            # 首页
│   └── globals.css         # 全局样式
├── components/
│   ├── TabSwitcher.tsx     # 标签切换组件
│   ├── WindowsContent.tsx  # Windows 教程内容
│   ├── MacOSContent.tsx    # macOS 教程内容
│   ├── LinuxContent.tsx    # Linux 教程内容
│   ├── CodeBlock.tsx       # 代码块组件(带复制功能)
│   ├── Alert.tsx           # 警告提示组件
│   ├── StepCard.tsx        # 步骤卡片组件
│   └── Collapse.tsx        # 折叠面板组件
├── public/                 # 静态资源目录
├── Dockerfile              # Docker 镜像构建文件
├── docker-compose.yml      # Docker Compose 配置
├── next.config.ts          # Next.js 配置
├── tailwind.config.ts      # Tailwind CSS 配置
├── tsconfig.json           # TypeScript 配置
├── package.json            # 项目依赖
└── README.md              # 项目说明文档
```

## ✨ 技术栈

- **框架**: Next.js 16 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **UI 组件**: 自定义 React 组件
- **部署**: Docker + Docker Compose

## 🚀 本地开发

### 前置要求

- Node.js 18.x 或更高版本
- npm 或 yarn

### 安装依赖

```bash
npm install
# 或
yarn install
```

### 启动开发服务器

```bash
npm run dev
# 或
yarn dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看网站。

### 构建生产版本

```bash
npm run build
npm start
# 或
yarn build
yarn start
```

## 🐳 Docker 部署

### 快速启动

```bash
# 构建并启动容器
docker-compose up -d --build

# 查看容器状态
docker-compose ps

# 查看日志
docker-compose logs -f claude-tutorial
```

### 访问网站

启动成功后,访问: **http://localhost:3000**

如果需要修改端口,编辑 `docker-compose.yml` 中的端口映射:
```yaml
ports:
  - "3000:3000"  # 左侧是宿主机端口,可以修改
```

### 常用 Docker 命令

```bash
# 停止容器
docker-compose down

# 重启容器
docker-compose restart

# 查看容器日志
docker-compose logs -f

# 查看容器资源使用情况
docker stats claude-tutorial-nextjs

# 进入容器调试
docker exec -it claude-tutorial-nextjs sh

# 重新构建并启动(代码更新后)
docker-compose up -d --build
```

## 🎨 功能特点

- ✅ Next.js 16 App Router 架构
- ✅ TypeScript 类型安全
- ✅ Tailwind CSS 响应式设计
- ✅ 服务端组件(Server Components)
- ✅ 客户端交互组件(Client Components)
- ✅ 三个平台教程:Windows、macOS、Linux/WSL2
- ✅ 代码块一键复制功能
- ✅ 折叠面板展示详细配置步骤
- ✅ 标签状态本地存储(localStorage)
- ✅ 优雅的渐变色设计
- ✅ 移动端友好

## 📦 项目组件说明

### 核心组件

#### TabSwitcher (客户端组件)
- 管理三个平台标签的切换
- 使用 localStorage 保存用户选择
- 平滑滚动到页面顶部

#### CodeBlock (客户端组件)
- 显示格式化的代码块
- 一键复制功能
- 复制成功提示

#### Alert
- 三种类型:info、success、warning
- 支持图标、标题、描述和子内容

#### StepCard
- 步骤展示卡片
- 自定义步骤编号颜色
- 悬停阴影效果

#### Collapse (客户端组件)
- 可折叠的面板组件
- 箭头旋转动画
- 内容滑入动画

### 内容组件

- `WindowsContent.tsx` - Windows 平台教程
- `MacOSContent.tsx` - macOS 平台教程
- `LinuxContent.tsx` - Linux/WSL2 平台教程

## 🔧 自定义修改

### 修改教程内容

编辑 `components/` 目录下的对应内容组件:
- Windows: `WindowsContent.tsx`
- macOS: `MacOSContent.tsx`
- Linux: `LinuxContent.tsx`

### 修改样式

1. **全局样式**: 编辑 `app/globals.css`
2. **Tailwind 配置**: 编辑 `tailwind.config.ts`
3. **组件样式**: 直接在组件中使用 Tailwind 类名

### 修改元数据

编辑 `app/layout.tsx` 中的 `metadata`:
```typescript
export const metadata: Metadata = {
  title: "你的标题",
  description: "你的描述",
};
```

## 🌐 生产环境部署

### 使用 Vercel (推荐)

1. 将代码推送到 GitHub
2. 访问 [vercel.com](https://vercel.com)
3. 导入你的 GitHub 仓库
4. Vercel 会自动检测 Next.js 并部署

### 使用 Docker 部署到服务器

#### 1. 修改端口映射

编辑 `docker-compose.yml`:
```yaml
ports:
  - "80:3000"  # 使用80端口(需要root权限)
  # 或
  - "8080:3000"  # 使用8080端口
```

#### 2. 配置反向代理

**Nginx 配置示例:**
```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

**Traefik Labels 示例:**

在 `docker-compose.yml` 中添加:
```yaml
labels:
  - "traefik.enable=true"
  - "traefik.http.routers.claude-tutorial.rule=Host(`your-domain.com`)"
  - "traefik.http.services.claude-tutorial.loadbalancer.server.port=3000"
```

#### 3. 加入已存在的 Docker 网络

编辑 `docker-compose.yml`:
```yaml
networks:
  tutorial-network:
    driver: bridge
  onepanel:
    external: true
    name: 1panel-network

services:
  claude-tutorial:
    networks:
      - tutorial-network
      - onepanel
```

## 🐛 故障排查

### 容器无法启动

```bash
# 查看详细日志
docker-compose logs claude-tutorial

# 检查端口是否被占用
lsof -i :3000

# 清理并重新构建
docker-compose down
docker-compose up -d --build
```

### 网站无法访问

```bash
# 检查容器是否运行
docker-compose ps

# 检查容器健康状态
docker inspect claude-tutorial-nextjs | grep -A 5 "Health"

# 进入容器检查
docker exec -it claude-tutorial-nextjs sh
```

### 代码更新后不生效

```bash
# 强制重新构建(不使用缓存)
docker-compose build --no-cache
docker-compose up -d
```

### TypeScript 错误

```bash
# 运行 lint 检查
npm run lint

# 修复自动可修复的问题
npm run lint -- --fix
```

## 📱 浏览器兼容性

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- 移动端浏览器全支持

## 🔄 从旧版本迁移

如果你之前使用的是纯 HTML 版本,所有旧文件已备份到 `.backup/` 目录:
- `.backup/index.html` - 旧的 HTML 文件
- `.backup/css/` - 旧的 CSS 文件
- `.backup/js/` - 旧的 JavaScript 文件

## 📄 许可证

本项目仅供学习和参考使用。

---

**使用 Next.js 构建的现代化 Claude Code 教程网站 - 快速、可扩展、易维护**
