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
  export default {
    data() {
      return {
        search: ''
      }
    },
    mounted() {
      this.$eventbus.$on("searchfor", this.onSearchFor)
    },
    methods: {
      onSearchFor(data) {
        this.search = data;
      }
    },
    destroyed() {
      this.$eventbus.$off("searchfor", this.onSearchFor)
    }
  }
</script>
