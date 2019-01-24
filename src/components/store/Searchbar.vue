<template>
  <div>
    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label" for="search">Search</label>
      </div>
      <div class="field-body is-normal">
        <div class="field">
          <div class="control">
            <input autocomplete="off" class="input" id="search"
                     :value="search" @input="updateSearchEvent">
          </div>
          <div class="control">
            <button @click="save" class="button is-primary">save</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  import { mapActions, mapMutations, mapState } from 'vuex'

  export default {
    data() {
      return {
      }
    },
    computed: {
      ...mapState('search', {
        search: state => state.value
      })
    },
    methods: {
      ...mapMutations('search', [
        'updateSearch'
      ]),
      ...mapActions('search', [
        'saveSearch'
      ]),
      updateSearchEvent(e) {
        this.updateSearch(e.target.value)
      },
      save() {
        this.saveSearch(this.search + " saved")
      }
    }
  }
</script>
