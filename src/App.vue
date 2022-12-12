<template>
  <div id="app">
    <Navigation :nav-links="navLinks"/>
    <router-view/>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'

const ROOT = '/amit-portfolio'
export default {
  components: {
    Navigation
  },
  data: () => ({
    ROOT : '/amit-portfolio',
    navLinks: [ 
    {
        text: 'HOME',
        path: `${ROOT}/home`,
        icon: 'home'
      },    
      {
        text: 'ABOUT ME',
        path: `${ROOT}/about`,
        icon: 'engineering'
      },
      {
        text: 'Experience',
        path: `${ROOT}/experience`,
        icon: 'work_history'
      }, 
      {
        text: 'Skills',
        path: `${ROOT}/skills`,
        icon: 'psychology'
      }, 
      {
        text: 'CONTACT',
        path: `${ROOT}/contact`,
        icon: 'contact_mail'
      },     
    ]
  })
}
</script>

<style>
figure {
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 10px;
  margin-inline-end: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--text-color);
}

</style>