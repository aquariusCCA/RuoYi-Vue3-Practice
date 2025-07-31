> **參考文章：** 
> 1. [[Vite] Vite Plugin - vite-plugin-svg-icons](https://hackmd.io/@yuna9068/HJG3Hqn2n "[Vite] Vite Plugin - vite-plugin-svg-icons")
> 2. [官方文件](https://github.com/vbenjs/vite-plugin-svg-icons#usage "官方文件")

# 安裝

**確認前提與安裝套件**

- 請先確定您的專案已使用 Vite 作為構建工具，且 Node.js 版本支援。
    
- 安裝插件本體與必要相依：
	```bash
	npm install vite-plugin-svg-icons -D 
	# 或 
	yarn add vite-plugin-svg-icons -D
	```
    

> _您是否已檢查專案的 Vite 版本與插件相容性？_

# 配置

打開 `vite.config.ts`（或 `.js`），引入並加入 plugins：

```typescript
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';

export default defineConfig({
  plugins: [
    vue(),
    createSvgIconsPlugin({
      // 指定存放 SVG 圖示檔的資料夾
      iconDirs: [path.resolve(process.cwd(), 'src/icons/svg')],
      // symbol id 格式：可依需求自定義
      symbolId: 'icon-[dir]-[name]'
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
});

```

在 `main.ts`（或 `main.js`）中，於 `createApp` 之前或之後加入：

```ts
import 'virtual:svg-icons-register'; 
// 此行會根據 plugin 的設定，自動將所有 SVG 以 <symbol> 注入到 DOM
```

# 建立共用的 SvgIcon 元件

```html
<script setup>
const props = defineProps({
  prefix: {
    type: String,
    default: 'icon',
  },
  name: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: '#333',
  },
});

const symbolId = computed(() => `#${props.prefix}-${props.name}`);
</script>


<template>
  <svg aria-hidden="true">
    <use :href="symbolId" :fill="color" />

    <!-- 文件中英範例不同，但兩種寫法結果一樣  -->
    <!-- <use :xlink:href="symbolId" :fill="color" /> -->
  </svg>
</template>
```

# 使用

```html
<!-- 顯示 assets/icons/icon-link.svg  -->
<SvgIcon class="icon" name="icon-link" color="#00f" />

<!-- 顯示 assets/icons/sns/icon-ig.svg  -->
<SvgIcon class="icon" name="sns-icon-ig" />
<SvgIcon class="icon" name="icon-ig" prefex="icon-sns" />
```