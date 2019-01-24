<template>
  <div class="home">
    <h1 class="title">Eventbus Example</h1>
    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label" for="search">Search Value</label>
      </div>
      <div class="field-body is-normal">
        <div class="field">
          <div class="control" id="search">
            <div class="output">{{ search }}<span v-if="search === ''">(empty)</span></div>
          </div>
        </div>
      </div>
    </div>
    <div class="box">
      <searchbar></searchbar>
    </div>
    <div class="control">
      <label class="radio">
        <input type="radio" name="off" v-model="listener" v-bind:value="false">
        off
      </label>
      <label class="radio">
        <input type="radio" name="on" v-model="listener" v-bind:value="true">
        on
      </label>
    </div>
    <div class="box" v-if="listener">
      <listener></listener>
    </div>
    <div class="content">
    </div>
  </div>
</template>


<script>
  import Searchbar from '../components/eventbus/Searchbar.vue'
  import Listener from '../components/eventbus/Listener.vue'

  export default {
    data() {
      return {
        search: '',
        listener: false
      }
    },
    components: {
      Searchbar,
      Listener
    },
    mounted() {
      this.$eventbus.$on("searchfor", this.onSearchFor)
    },
    destroyed() {
      this.$eventbus.$off("searchfor", this.onSearchFor)
    },
    methods: {
      onSearchFor: function(data) {
        this.search = data
      }
    }
  }
</script>
