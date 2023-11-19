import { createApp } from 'vue'
import '@/style.css'
import '@/tailwind.css'
import App from '@/App.vue'
import "tailwindcss/tailwind.css"
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { router } from '@/router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

const app = createApp(App)
app.config.globalProperties.$env = import.meta.env
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
app.use(pinia)
app.use(router)
app.use(ElementPlus)

app.mount('#app')
