import Vue from "vue";
import VueRouter from "vue-router";
import App from './components/App'

//VueRouter è un plug-in e per usarlo devo scrivere
Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/',
            component: App  //component sarà esempio Home.vue
        }
],
    mode: 'history'//che usa un push state non disponibile in tutti i browser vecchi

})
