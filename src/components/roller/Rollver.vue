<template>
  <div class="roller">
    <b-container class="roller-container">
      <b-row class="roller-header">
        <b-col>
          {{ name }} {{ state }}% offen
        </b-col>
      </b-row>
      <b-row>
        <b-col class="roller-open">
          Auf
        </b-col>
        <b-col class="roller-close">
          Zu
        </b-col>
      </b-row>
    </b-container>
    <b-button v-on:click="getRollerState">UPDATE</b-button>
  </div>
</template>

<script>
export default {
  name: 'Roller',
  data() {
    return {
      state: 90
    }
  },
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

<style>
.roller-container {
  border: 1px solid #000;
  border-radius: 5px;
  text-align: center;
}
.roller-header {
  border-bottom: 1px solid #000;
}
.roller-open {
  border-right: 1px solid #000;
}
</style>