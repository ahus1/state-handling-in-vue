<template>
  <div>
    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label" for="firstname">Firstname</label>
      </div>
      <div class="field-body is-normal">
        <div class="field">
          <div class="control" id="firstname">
            <div class="output">{{ person.firstname }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label" for="lastname">Lastname</label>
      </div>
      <div class="field-body is-normal">
        <div class="field">
          <div class="control" id="lastname">
            <div class="output">{{ person.lastname }}</div>
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
