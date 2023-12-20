import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import './assets/css/global.css';
import router from './routes/index';

createApp(App).use(router).use(createPinia()).mount('#app');