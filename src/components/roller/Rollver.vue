<template>
  <div class="roller">
    <b-container class="bv-example-row">
      <b-row>
        <b-col>{{ name }}</b-col>
        <b-col>{{ id }}</b-col>
        <b-col>FAKE %</b-col>
      </b-row>
      <b-row>
        <b-col>Open</b-col>
        <b-col>Close</b-col>
      </b-row>
    </b-container>
    <b-button v-on:click="getRollerState">UPDATE</b-button>
  </div>
</template>

<script>
export default {
  name: 'Roller',
  props: {
    name: String,
    id: Number,
  },
  methods: {
    getRollerState: function() {
      this.$store.dispatch("getState", this.id)
    }
  }
}
</script>