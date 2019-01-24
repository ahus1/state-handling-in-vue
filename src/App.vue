<template>
  <div id="app">
    <nav class="navbar is-fixed-top has-shadow" @click="click">
      <div class="navbar-brand">
        <span class="navbar-item">
          State in Vue Example
        </span>
        <a role="button" class="navbar-burger burger" v-bind:class="{ 'is-active': active }" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
        <div class="navbar-menu" v-bind:class="{ 'is-active': active }">
          <div class="navbar-start">
            <router-link to="/" class="navbar-item">Home</router-link>
            <router-link to="/single/Theo" class="navbar-item">Single</router-link>
            <router-link to="/hierarchy/Theo" class="navbar-item">Hierarchy</router-link>
            <router-link to="/eventbus/Theo" class="navbar-item">Eventbus</router-link>
            <router-link to="/store/Theo" class="navbar-item">Store</router-link>
          </div>
        </div>
    </nav>
    <section class="section">
      <router-view/>
    </section>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        active: false
      }
    },
    methods: {
      click: function() {
        this.active = !this.active
      }
    }
  }
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
