<template>
  <div>
    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label" for="search">Listened to</label>
      </div>
      <div class="field-body is-normal">
        <div class="field">
          <div class="control" id="search">
            <div class="output">{{ search }}<span v-if="search === ''">(empty)</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  import { mapState } from 'vuex'

  export default {
    data() {
      return {
      }
    },
    computed: {
      ...mapState('search', {
        search: state => state.value
      })
    }
  }
</script>
