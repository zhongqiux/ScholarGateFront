import { createApp } from 'vue'
import '@/style.css'
import '@/tailwind.css'
import App from '@/App.vue'
import "tailwindcss/tailwind.css"
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { router } from '@/router'

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

const app = createApp(App)
app.config.globalProperties.$env = import.meta.env

app.use(pinia)
app.use(router)

app.mount('#app')
