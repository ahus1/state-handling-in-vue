<template>
  <div>
    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label" for="firstname">Firstname</label>
      </div>
      <div class="field-body is-normal">
        <div class="field">
          <div class="control">
            <div v-if="mode === 'edit'">
              <input autocomplete="off" class="input" :class="{'is-danger': message.firstname !== ''}" id="firstname"
                     v-model="personToEdit.firstname">
              <p v-if="message.firstname !== ''" class="help is-danger">{{message.firstname}}</p>
            </div>
            <div class="output" v-else>{{ person.firstname }}</div>
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
          <div class="control">
            <div v-if="mode === 'edit'">
            <input autocomplete="off" class="input" :class="{'is-danger': message.lastname !== ''}" id="lastname" v-if="mode === 'edit'"
                   v-model="personToEdit.lastname">
              <p v-if="message.lastname !== ''" class="help is-danger">{{message.lastname}}</p>
            </div>
            <div class="output" v-else>{{ person.lastname }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="control">
      <button @click="edit" class="button is-link" v-if="mode === 'readonly'">Edit</button>
      <button @click="save" class="button is-link" v-else>Save</button>
    </div>
  </div>
</template>


<script>
  import Vue from 'vue'

  export default {
    props: {
      person: Object
    },
    data() {
      return {
        mode: 'readonly',
        personToEdit: {},
        message: {}
      }
    },
    methods: {
      edit: function () {
        Vue.set(this.personToEdit, "firstname", this.person.firstname)
        Vue.set(this.personToEdit, "lastname", this.person.lastname)
        Vue.set(this.message, "lastname", "");
        Vue.set(this.message, "firstname", "");
        this.mode = 'edit'
      },
      save: function () {
        let error = false
        if (this.personToEdit.firstname === '') {
          this.message.firstname = 'must not be empty'
          error = true
        } else {
          this.message.firstname = ''
        }
        if (this.personToEdit.lastname === '') {
          this.message.lastname = 'must not be empty'
          error = true
        } else {
          this.message.lastname = ''
        }
        if (error) {
          return
        }
        this.$emit("updatedPerson", {
          firstname: this.personToEdit.firstname,
          lastname: this.personToEdit.lastname
        })
        this.mode = 'readonly'
      }
    }
  }
</script>
