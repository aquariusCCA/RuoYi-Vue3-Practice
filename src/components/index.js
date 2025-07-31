import SvgIcon from '@/components/SvgIcon/index.vue'

// element-plus图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// 自定义图标
const globalComponents = {
	SvgIcon,
}

// 注册全局组件
export default {
	install(app) {
		// 全局注册element-plus图标
		for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
			app.component(key, component)
		}

		// 全局注册自定义图标
		Object.keys(globalComponents).forEach((key) => {
			app.component(key, globalComponents[key])
		})
	}
}
