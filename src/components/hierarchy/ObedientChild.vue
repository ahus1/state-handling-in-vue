<template>
  <div>
    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label" for="firstname">Firstname</label>
      </div>
      <div class="field-body">
        <div class="field">
          <div class="control">
            <input autocomplete="off" class="input" id="firstname" :value="person.firstname" @input="updatedFirstname">
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
            <input autocomplete="off" class="input" id="lastname" :value="person.lastname" @input="updatedLastname">
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
    },
    methods: {
      updatedFirstname (e) {
        this.$emit('updatedFirstname', e.target.value)
      },
      updatedLastname (e) {
        this.$emit('updatedLastname', e.target.value)
      }
    }
  }
</script>
