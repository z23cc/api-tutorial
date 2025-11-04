# Claude Code 使用教程网站

这是一个独立的静态网站，用于展示 Claude Code AI 编程工具的安装和配置教程。

## 📁 项目结构

```
tutorial-website/
├── index.html              # 主HTML文件
├── css/
│   └── style.css          # 样式文件
├── js/
│   └── main.js            # JavaScript交互逻辑
├── images/                # 图片资源目录
├── Dockerfile             # Docker镜像构建文件
├── docker-compose.yml     # Docker Compose配置文件
├── .gitignore            # Git忽略文件
└── README.md             # 项目说明文档
```

## ✨ 功能特点

- ✅ 纯静态网站，基于 Nginx Alpine 镜像
- ✅ 响应式设计，支持移动端和桌面端
- ✅ 三个平台教程：Windows、macOS、Linux/WSL2
- ✅ 代码块一键复制功能
- ✅ 折叠面板展示详细配置步骤
- ✅ 美观的UI设计，类似 Ant Design 风格
- ✅ 标签状态保存（localStorage）

## 🚀 Docker 部署

### 快速启动

```bash
# 进入项目目录
cd /Users/uyiapi/Workspace/tutorial-website

# 构建并启动容器
docker-compose up -d --build

# 查看容器状态
docker-compose ps

# 查看日志
docker-compose logs -f tutorial-website
```

### 访问网站

启动成功后，访问：**http://localhost:8080**

如果需要修改端口，编辑 `docker-compose.yml` 中的端口映射：
```yaml
ports:
  - "8080:80"  # 左侧是宿主机端口，可以修改
```

### 常用命令

```bash
# 停止容器
docker-compose down

# 重启容器
docker-compose restart

# 查看容器日志
docker-compose logs -f

# 查看容器资源使用情况
docker stats tutorial-website

# 进入容器调试
docker exec -it tutorial-website sh

# 重新构建并启动（代码更新后）
docker-compose up -d --build
```

### 生产环境部署

#### 1. 修改端口映射

编辑 `docker-compose.yml`：
```yaml
ports:
  - "80:80"  # 使用80端口（需要root权限）
  # 或
  - "8080:80"  # 使用8080端口
```

#### 2. 配置反向代理（推荐）

如果有 Nginx 或 Traefik 作为前端代理：

**Nginx 配置示例：**
```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:8080;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

**Traefik Labels 示例：**

在 `docker-compose.yml` 中添加：
```yaml
labels:
  - "traefik.enable=true"
  - "traefik.http.routers.tutorial.rule=Host(`your-domain.com`)"
  - "traefik.http.services.tutorial.loadbalancer.server.port=80"
```

#### 3. 加入已存在的 Docker 网络

如果需要连接到其他 Docker 网络（如 1panel-network）：

编辑 `docker-compose.yml`：
```yaml
networks:
  tutorial-network:
    driver: bridge
  onepanel:
    external: true
    name: 1panel-network

services:
  tutorial-website:
    networks:
      - tutorial-network
      - onepanel
```

## 🔧 自定义修改

### 修改网站内容

编辑 `index.html` 文件，修改教程内容后重新构建：
```bash
docker-compose up -d --build
```

### 修改样式

编辑 `css/style.css` 文件，修改主题色或布局样式。

### 修改交互逻辑

编辑 `js/main.js` 文件，修改标签切换或代码复制等功能。

## 📊 技术栈

- HTML5
- CSS3 (Flexbox, Grid, Animation)
- Vanilla JavaScript (无依赖)
- Nginx Alpine (Docker)
- Docker & Docker Compose

## 🐛 故障排查

### 容器无法启动

```bash
# 查看详细日志
docker-compose logs tutorial-website

# 检查端口是否被占用
lsof -i :8080

# 清理并重新构建
docker-compose down
docker-compose up -d --build
```

### 网站无法访问

```bash
# 检查容器是否运行
docker-compose ps

# 检查容器健康状态
docker inspect tutorial-website | grep -A 5 "Health"

# 进入容器检查Nginx
docker exec -it tutorial-website sh
nginx -t
```

### 代码更新后不生效

```bash
# 强制重新构建（不使用缓存）
docker-compose build --no-cache
docker-compose up -d
```

## 📱 浏览器兼容性

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- 移动端浏览器全支持

## 📄 许可证

本项目仅供学习和参考使用。

---

**部署完成后，网站将提供 Claude Code 在 Windows、macOS、Linux 三个平台上的详细安装和配置教程。**
