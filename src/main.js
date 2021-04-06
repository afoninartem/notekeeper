import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import firebase from "firebase/app";
import "firebase/firestore";
firebase.initializeApp({
  apiKey: "AIzaSyAzK_F-RVXRgcoqVdvm17FRQKtjNlEsohA",
  authDomain: "warehouse-needs.firebaseapp.com",
  databaseURL: "https://warehouse-needs.firebaseio.com",
  projectId: "warehouse-needs",
  storageBucket: "warehouse-needs.appspot.com",
  messagingSenderId: "534802380971",
  appId: "1:534802380971:web:3fec858bf600b9cc1e5fee"
}).firestore();
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
