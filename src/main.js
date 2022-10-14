import { createApp } from 'vue'
import App from './App.vue'
import { store } from './store/store'
import Router from './router/index'


createApp(App).use(Router).use(store).mount('#app')
