<template>
    <nav>
      <ul ref="nav">
        <!-- <figure class="image-logo" @click="toggleNav">
          <img src="@/assets/logo.png" alt="Amit Portfolio" class="logo"/>
        </figure> -->
        <li v-for="(link, index) in navLinks" :key="index">
          <router-link :to="link.path" style="color: var(--primary)">
            {{ link.text }}
            <i class="material-icons">{{link.icon}}</i>
          </router-link>
        </li>
      </ul>
    </nav>
  </template>
  
  <script>
  import router from "../router.js";
  
  export default {
    props: ['navLinks'],
    methods: {
      toggleNav() {
        router.push({ name: "Home" });
      }
    }
  }
  </script>
  
  <style scoped>
  @import '@/assets/css/navigation.css';
  
  </style>