<template>
  <div class="home">
    <h1 class="title">Hierarchy Component Example</h1>
    <div class="tabs">
      <ul>
        <li :class="{isActive: tab === 'reading'}" @click="tab = 'reading'"><a>Reading Only Child</a></li>
        <li :class="{isActive: tab === 'global'}" @click="tab = 'global'"><a>Global Child</a></li>
        <li :class="{isActive: tab === 'obedient'}" @click="tab = 'obedient'"><a>Obedient Child</a></li>
        <li :class="{isActive: tab === 'checking'}" @click="tab = 'checking'"><a>Checking Child</a></li>
      </ul>
    </div>
    <section class="content">
      <div>Hello, {{person.firstname}} {{person.lastname}}</div>
    </section>
    <div v-if="tab === 'reading'">
      <div class="box">
        <div class="subtitle">Reading Child</div>
        <reading-child :person="person"></reading-child>
      </div>
    </div>
    <div v-if="tab === 'global'">
      <div class="box">
        <div class="subtitle">Global Child</div>
        <global-child :person="person"></global-child>
      </div>
    </div>
    <div v-if="tab === 'obedient'">
      <div class="box">
        <div class="subtitle">Obedient Child</div>
        <obedient-child :person="person"
                        @updatedFirstname="onUpdatedFirstname"
                        @updatedLastname="onUpdatedLastname">
        </obedient-child>
      </div>
    </div>
    <div v-if="tab === 'checking'">
      <div class="box">
        <div class="subtitle">Checking Child</div>
        <checking-child :person="person"
                        @updatedPerson="onUpdatedPerson">
        </checking-child>
      </div>
    </div>
  </div>
</template>


<script>
  import ReadingChild from '../components/hierarchy/ReadingChild.vue'
  import GlobalChild from '../components/hierarchy/GlobalChild.vue'
  import ObedientChild from '../components/hierarchy/ObedientChild.vue'
  import CheckingChild from '../components/hierarchy/CheckingChild.vue'

  export default {
    data() {
      return {
        tab: 'reading',
        person: {
          firstname: "",
          lastname: "Tester"
        }
      }
    },
    components: {
      GlobalChild: GlobalChild,
      ObedientChild: ObedientChild,
      ReadingChild: ReadingChild,
      CheckingChild: CheckingChild
    },
    watch: {
      "$route.params.text": {
        handler: function (newValue) {
          this.person.firstname = newValue
        },
        immediate: true
      }
    },
    methods: {
      onUpdatedFirstname: function (val) {
        this.person.firstname = val
      },
      onUpdatedLastname: function (val) {
        this.person.lastname = val
      },
      onUpdatedPerson: function (p) {
        this.person.lastname = p.lastname
        this.person.firstname = p.firstname
      }
    }
  }
</script>
