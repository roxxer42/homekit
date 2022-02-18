import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue3 from 'bootstrap-vue-3'
import VueSidebarMenu from 'vue-sidebar-menu'
import { store } from './store/store'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'

const app = createApp(App)
app.use(BootstrapVue3)
app.use(router)
app.use(VueSidebarMenu)
app.use(store)
app.mount('#app')
