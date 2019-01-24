<template>
  <div class="home">
    <h1 class="title">Single Component Example</h1>
    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label" for="firstname">Firstname</label>
      </div>
      <div class="field-body">
        <div class="field">
          <div class="control">
            <input autocomplete="off" class="input" id="firstname" v-model="person.firstname">
          </div>
        </div>
      </div>
    </div>
    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label" for="lastname">Lastname</label>
      </div>
      <div class="field-body">
        <div class="field">
          <div class="control">
            <input autocomplete="off" class="input" id="lastname" v-model="person.lastname">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    data () {
      return {
        person: {
          firstname: "",
          lastname: "Tester"
        }
      }
    },
    watch: {
      "$route.params.text": {
        handler: function (newValue) {
          this.person.firstname = newValue
        },
        immediate: true
      }
    }
  }
</script>
