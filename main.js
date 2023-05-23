import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.prod.js'
import convertidor from './components/app'
import main from '.main'


let app = createApp(main);
app.component(convertidor);
app.mount("#app")