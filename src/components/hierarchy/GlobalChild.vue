<template>
  <div>
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
    props: {
      person: Object
    },
    data () {
      return {
      }
    }
  }
</script>
