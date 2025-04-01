
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';  // Importation du fichier router

createApp(App)
  .use(router)  // Application du routeur à l'app Vue
  .mount('#app');
