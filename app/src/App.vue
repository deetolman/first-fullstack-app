<template>
  <div id="app">
    <header>
      <h2>Welcome to Get-A-Pet!</h2>
      <nav>
        <router-link class="nav" to="/">Home</router-link>
        <router-link class="nav" to="/dogs">s</router-link>
        <br>
      </nav>
    </header>

    <main>
      <img src="./assets/beagle.jpg">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>

export default {
  name:'app'
  
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 40px;
}
header {
  font-size: 20px;
  height: 75px;
  letter-spacing: 2px;
  justify-content: space-between;
}
nav {
    word-spacing: 5px;
}
img {
  width:100%;
  padding: 50px;
  margin: 10px;;
}
body {
  background-color:azure;
}
</style>
