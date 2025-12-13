# Eno-M Desktop

<div align="center">
  <img src="public/512px.png" width="120" height="120" alt="Icon">
  <p>Based on Bilibili Audio, a beautiful desktop music player.</p>
  <p>基于 Bilibili 的高颜值桌面音乐播放器</p>
</div>

---
<img width="1391" height="812" alt="image" src="https://github.com/user-attachments/assets/37d2424e-71b5-430e-953d-89a126668e7e" />
<img width="1387" height="786" alt="image" src="https://github.com/user-attachments/assets/44fec5b5-07ac-4eb4-97fe-358db915f1d9" />
<img width="1395" height="787" alt="image" src="https://github.com/user-attachments/assets/141521b4-3eb0-4b5e-8a9c-304f611f60d2" />
<img width="1387" height="782" alt="image" src="https://github.com/user-attachments/assets/07fbbfc9-d2a3-4bdb-9a11-2023cf320472" />




## ✨ Features

- 🎵 **Bilibili 音乐播放**：直接播放 B 站音频和视频内容
- 📺 **视频模式**：支持悬浮窗和侧边栏视频播放
- ❤️ **收藏夹同步**：登录后可管理 B 站收藏夹
- 🎨 **歌单海报生成**：自定义生成精美歌单海报
- 🎚️ **EQ 均衡器**：内置多种音效预设（Pop, Rock, Jazz 等）
- 🔍 **搜索**：支持关键词和 BV 号搜索
- 🖥️ **跨平台**：支持 Windows 和 macOS

## 📥 Download

前往 [Releases](https://github.com/meanc/eno-m-desktop/releases)
页面下载最新版本。

- **macOS**: `.dmg`
- **Windows**: `.exe`

### macOS 应用启动问题

使用命令行处理：

```bash
xattr -dr com.apple.quarantine /Applications/ENO-M.app
```

## 🛠️ Development

### Setup

```bash
# Clone repository
git clone https://github.com/meanc/eno-m-desktop.git
cd eno-m-desktop

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

### Build

```bash
# Build for production
pnpm build
```

## 🏗️ Tech Stack

- **Core**: [Electron](https://www.electronjs.org/),
  [Vite](https://vitejs.dev/), [Vue 3](https://vuejs.org/)
- **UI**: [UnoCSS](https://unocss.dev/)
- **State Management**: [Pinia](https://pinia.vuejs.org/)
- **Audio**: [Howler.js](https://howlerjs.com/)

## 📄 License

[MIT](LICENSE) © 2025-meanc [meanc](https://github.com/meanc)
