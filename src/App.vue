<template>
  <nav class="navbar navbar-expand navbar-dark bg-dark">
    <router-link to="/" class="navbar-brand">Red Creative</router-link>
    <div class="navbar-nav mr-auto">
      <li class="nav-item">
        <router-link to="/tutorials" class="nav-link">Tutorials</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/add" class="nav-link">Add</router-link>
      </li>
    </div>
  </nav>

  <div class="container mt-3">
    <h2>Vue 3 Firebase CRUD example</h2>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
