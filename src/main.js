import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from "element-plus";


const app =createApp(App)

app.use(ElementPlus)
// app.provide("$axios",axios.create({
//     baseURL:'127.0.0.1:998'
// }));
app.mount('#app')
