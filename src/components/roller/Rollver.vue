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
        await this.getRollerState()
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
  height: 100px;
  background-color: lightslategray;
  border: 1px solid black;
  border-radius: 5px;
  font-size: 25px;
}
.name {
  flex-basis: 30%;
  margin-left: 2%;
  margin-top: 25px;
}
.arrow-up, .arrow-down {
  height: 100%;
  background-color: lightgrey;
  padding: 5px 8px 5px 8px;
  flex-basis: 30%;
}
.state {
  flex-basis: 15%;
  margin-left: 3%;
  margin-right: 3%;
  margin-top: 25px;
}
</style>