<template>
  <div class="roller-container">
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
      state: 50,
      lastState: "STOP",
      polling: null,
    }
  },
  props: {
    name: String,
    id: Number,
  },
  async mounted() {
    this.updateAndSetRollerState()
    this.pollRollerPosition()
  },
  beforeUnmount() {
    clearInterval(this.polling)
  },
  computed: {
    positionState() {
      return this.state;
    }
  },
  methods: {
    anglesUp: function() {
      if (this.lastState === "STOP") {
        this.lastState = "UP";
        this.$store.dispatch("openRollerById", this.id)
      } else {
        this.stopRoller();
        this.lastState = "STOP";
      }
    },
    anglesDown: function() {
      if (this.lastState === "STOP") {
        this.lastState = "CLOSE"
        this.$store.dispatch("closeRollerById", this.id)
      } else {
        this.stopRoller();
        this.lastState = "STOP";
      }
    },
    stopRoller: function() {
      this.$store.dispatch("stopRollerById", this.id)
    },
    getRollerState: async function() {
      await this.$store.dispatch("updateRollerStateById", this.id)
    },
    getRollerPosition: function() {
      this.state = this.$store.getters.getCurrentRollerPosition(this.id);
    },
    updateAndSetRollerState: async function() {
      try {
        //await this.getRollerState()
      } catch (ex) {
        console.log("Could not update data. " + ex)
      } finally {
        this.getRollerPosition()
      }
    },
    async pollRollerPosition() {
      this.polling = setInterval(() => {
        this.updateAndSetRollerState()
      }, 30000)
    }
  }
}
</script>

<style>
.roller-container {
  display: flex;
  flex-direction: row;
  background-color: lightslategray;
  border: 1px solid black;
  border-radius: 3px;
  font-size: 20px;
  min-width: 230px;
  max-width: 230px;
  margin-top: 10px;
}
.name {
  margin: 5px 1px 5px 1px;
  padding: 5px 10px 5px 10px;
  min-width: 75px;
  max-width: 75px;
}
.arrow-up {
  margin-right: 15px;
  background-color: lightgrey;
  margin: 5px 5px 5px 5px;
  padding: 5px 8px 5px 8px;
}
.state {
  margin-right: 10px;
  margin: 5px 1px 5px 1px;
  padding: 5px 5px 5px 5px;
}
.arrow-down {
  margin-right: 15px;
  background-color: lightgrey;
  margin: 5px 5px 5px 5px;
  padding: 5px 8px 5px 8px;
}
</style>