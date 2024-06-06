<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body {
  font-family: 'Roboto', sans-serif;
  background-color: #f0f2f5;
  margin: 0;
  padding: 0;
}

#app {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.235);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  color: whitesmoke;
}

nav {
  margin-bottom: 20px;
  display: flex;
  justify-content: space-around;
  background-color: #007bff68;
  padding: 10px;
  border-radius: 8px;
}

nav a {
  text-decoration: none;
  color: #fff;
  font-weight: 500;
  padding: 10px 20px;
  border-radius: 5px;
  transition: background-color 0.3s, transform 0.3s;
}

nav a.router-link-exact-active {
  background-color: #0056b3;
}

nav a:hover {
  background-color: #0056b3;
  transform: scale(1.05);
}
</style>
