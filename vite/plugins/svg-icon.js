import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import path from "path";

export default function createSvgIcon(isBuild) {
  return createSvgIconsPlugin({
    // 存放svg图标路径
    iconDirs: [path.resolve(process.cwd(), "src/assets/icons")],
    // 指定symbolId格式
    // [dir]：目录名，[name]：文件名 
    symbolId: "icon-[dir]-[name]",
    // svgoOptions：是否啟用 SVGO 設定。
    // 傳入 isBuild，通常開發時關閉（false），避免壓縮減慢熱重載；打包時開啟（true）以減少檔案體積。
    svgoOptions: isBuild,
  });
}
