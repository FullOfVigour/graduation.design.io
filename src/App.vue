<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
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
