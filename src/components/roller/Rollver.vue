<template>
  <div class="roller">
    <div class="name">
      {{ name }}
    </div>
    <button class="arrow-up" v-on:click="anglesUp">
      <font-awesome-icon icon="angles-up" class="icon-up" />
    </button> 
    <div class="state">
      {{ state }}%
    </div>
    <button class="arrow-down" v-on:click="anglesDown">
      <font-awesome-icon icon="angles-down" />
    </button>
  </div>
</template>

<script>
export default {
  name: 'Roller',
  data() {
    return {
      state: 90,
      lastState: "STOP"
    }
  },
  props: {
    name: String,
    id: Number,
  },
  methods: {
    anglesUp: function() {
      if (this.lastState === "STOP") {
        this.lastState = "UP";
        this.$store.dispatch("openRoller", this.id)
      } else {
        this.stopRoller();
        this.lastState = "STOP";
      }
    },
    anglesDown: function() {
      if (this.lastState === "STOP") {
        this.lastState = "CLOSE"
        this.$store.dispatch("closeRoller", this.id)
      } else {
        this.stopRoller();
        this.lastState = "STOP";
      }
    },
    stopRoller: function() {
      console.log("STOP")
      this.$store.dispatch("stopRoller", this.id)
    },
    getRollerState: function() {
      this.$store.dispatch("getState", this.id)
    }
  }
}
</script>

<style>
.roller {
  float: left;
  background-color: lightslategray;
  border: 1px solid black;
  border-radius: 3px;
  font-size: 20px;
  min-width: 225px;
  max-width: 225px;
}
.name {
  float: left;
  margin: 5px 1px 5px 1px;
  padding: 5px 10px 5px 10px;
  min-width: 75px;
  max-width: 75px;
}
.arrow-up {
  float: left;
  margin-right: 15px;
  background-color: lightgrey;
  margin: 5px 5px 5px 5px;
  padding: 5px 8px 5px 8px;
}
.state {
  float: left;
  margin-right: 15px;
  margin: 5px 1px 5px 1px;
  padding: 5px 5px 5px 5px;
}
.arrow-down {
  float: left;
  margin-right: 15px;
  background-color: lightgrey;
  margin: 5px 5px 5px 5px;
  padding: 5px 8px 5px 8px;
}
</style>