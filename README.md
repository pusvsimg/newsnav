# 全球新闻导航

![全球新闻导航](https://img.shields.io/badge/全球新闻导航-v1.0-orange)
![License](https://img.shields.io/badge/license-MIT-blue)

## 项目概述

全球新闻导航是一个优雅、现代的新闻媒体聚合平台，旨在帮助用户快速访问全球各地的新闻媒体网站。该项目提供了直观的界面，让用户可以按地区、政治倾向等维度筛选新闻源，从而获取更全面、多元的信息视角。

## 主要特点

- **全球媒体覆盖**：收录了来自亚洲、欧洲、北美等地区的多种新闻媒体
- **政治倾向标注**：客观标注各媒体的政治立场（左派、中立、右派），帮助用户了解信息来源的潜在偏向
- **响应式设计**：完美适配从桌面到移动设备的各种屏幕尺寸
- **优雅动画效果**：精心设计的交互动画，提供流畅愉悦的用户体验
- **快速搜索功能**：支持按媒体名称快速搜索，轻松找到目标新闻源
- **区域筛选**：可按地区快速筛选新闻媒体

## 技术栈

- **前端**：纯原生 HTML5、CSS3 和 JavaScript，无需任何框架
- **样式**：采用现代 CSS 技术，包括 Flexbox、Grid 布局、CSS 变量、动画和过渡效果
- **字体**：使用 Google Fonts 的 Noto Sans SC 字体，优化中文显示效果
- **响应式设计**：使用媒体查询实现多设备适配

## 视觉效果

项目采用了深色主题设计，主色调为橙色(#ff9000)和深灰色，提供了舒适的阅读体验。界面包含精心设计的卡片悬停效果、平滑过渡动画和微妙的光晕效果，营造出现代感和科技感。

## 永久免费部署方案

本项目可以通过 GitHub Pages 和 Cloudflare 实现完全免费的永久部署，具体步骤如下：

### 1. GitHub Pages 部署

1. 将项目代码推送到 GitHub 仓库

   ```bash
   git init
   git add .
   git commit -m "初始化项目"
   git remote add origin https://github.com/你的用户名/全球新闻导航.git
   git push -u origin main
   ```

2. 在 GitHub 仓库设置中启用 GitHub Pages
   - 进入仓库 → Settings → Pages
   - Source 选择 main 分支
   - 点击 Save，几分钟后网站将自动部署

### 2. Cloudflare 加速与保护

1. 注册 Cloudflare 账户并添加你的 GitHub Pages 域名

2. 设置 Cloudflare Pages

   - 在 Cloudflare 控制面板中选择 Pages
   - 点击"创建项目"并连接到你的 GitHub 仓库
   - 设置构建配置（本项目为静态网站，无需特殊配置）
   - 部署完成后，Cloudflare 会提供一个`*.pages.dev`域名

3. 启用 Cloudflare CDN 加速
   - 在 DNS 设置中将 GitHub Pages 的域名指向 Cloudflare
   - 启用 HTTPS 和缓存优化

### 为什么选择 GitHub + Cloudflare？

- **完全免费**：GitHub Pages 和 Cloudflare 的基础服务都是永久免费的
- **高可用性**：依托 GitHub 和 Cloudflare 的全球基础设施，确保网站稳定运行
- **CDN 加速**：Cloudflare 的全球 CDN 网络大幅提升访问速度
- **DDoS 防护**：Cloudflare 提供免费的 DDoS 攻击防护
- **SSL 证书**：自动提供和更新 HTTPS 证书
- **流量无限制**：对于这类轻量级静态网站，基本不会触及免费额度限制

## 本地开发

由于项目使用纯前端技术栈，无需复杂的开发环境。只需克隆仓库后，使用任意现代浏览器打开`index.html`即可进行开发和测试。

```bash
git clone https://github.com/你的用户名/全球新闻导航.git
cd 全球新闻导航
# 使用浏览器打开index.html或使用任意静态文件服务器
```

## 贡献指南

欢迎贡献更多新闻源或改进项目！请通过 Pull Request 提交您的贡献。

## 许可证

本项目采用 MIT 许可证。详情请参阅 LICENSE 文件。

---

**免责声明**：本网站为新闻导航工具，仅提供各新闻媒体网站的链接。我们努力客观标注各媒体的政治倾向，但这些标签仅供参考，可能无法完全准确地反映媒体的立场。
