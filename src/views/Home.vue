<template>
  <div class="home">
    <h1>{{title}}</h1>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import config from '@/configs'
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'Home',
  data () {
    return {
      title: config.title
    }
  },
  components: {
    HelloWorld
  }
}
</script>
