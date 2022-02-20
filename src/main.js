import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue3 from 'bootstrap-vue-3'
import VueSidebarMenu from 'vue-sidebar-menu'
import { store } from './store/store'
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'

library.add(fas);

const app = createApp(App)
app.use(BootstrapVue3)
app.use(router)
app.use(VueSidebarMenu)
app.use(store)
app.component("font-awesome-icon", FontAwesomeIcon)
app.mount('#app')
