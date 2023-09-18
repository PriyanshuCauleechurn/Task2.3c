<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/SecondPage">SecondPage</router-link>
    </nav>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>




