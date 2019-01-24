<template>
  <div class="home">
    <h1 class="title">Store example</h1>
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
  import { mapState } from 'vuex'

  import Searchbar from '../components/store/Searchbar.vue'
  import Listener from '../components/store/Listener.vue'

  export default {
    data() {
      return {
        listener: false
      }
    },
    computed: {
      ...mapState('search', {
        search: state => state.value
      })
    },
    components: {
      Searchbar,
      Listener
    },
  }
</script>
