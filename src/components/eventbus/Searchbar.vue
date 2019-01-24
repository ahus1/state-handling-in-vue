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
                     v-model="search">
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
    watch: {
      "search": function(newval) {
        try {
          this.$eventbus.$emit("searchfor", newval)
        } catch (e) {
          console.log(e)
        }
      },
      immediate: true
    }
  }
</script>
