import 'bootstrap/dist/css/bootstrap.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


import './assets/main.css'
import 'bootstrap'

import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBhg-mTSTqvcHupyRlvdAnMt3lo6Vh6xPs",
    authDomain: "icargo-pacific-auth-f6bfd.firebaseapp.com",
    projectId: "icargo-pacific-auth-f6bfd",
    storageBucket: "icargo-pacific-auth-f6bfd.appspot.com",
    messagingSenderId: "881238235789",
    appId: "1:881238235789:web:688e219630b30bccf6e0c4"
  };

initializeApp(firebaseConfig)

const app = createApp(App).use(router)
app.mount('#app')


