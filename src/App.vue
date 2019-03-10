<template>
  <div id="app">
    <loading v-if="!isComplete"
      v-model="isComplete"></loading>
    <transition name="zoom">
      <div v-show="isComplete"
        id="main">
        <router-view />
      </div>
    </transition>
  </div>
</template>

<script>
import loading from './loading'
export default {
  name: 'App',
  components: {
    loading
  },
  data() {
    return {
      isComplete: false
    }
  }
}
</script>

<style>
#main,
#app,
body,
html {
  height: 100%;
}

body,
html {
  margin: 0;
}

body {
  background: #eaedf1;
}

#app {
  font-family: 'Helvetica Neue', 'Hiragino Sans GB', 'Microsoft YaHei',
    '\9ED1\4F53', Arial, sans-serif;
}

a {
  text-decoration: none;
}
.content__view {
  width: 100%;
  order: 1;
  background: white;
  box-sizing: border-box;
}
</style>
