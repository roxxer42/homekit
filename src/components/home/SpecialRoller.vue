<template>
  <div class="closeAll">
    <button class="btn-close-all" v-on:click="closeAll">
      <p>Not at Home</p>     
    </button>
    <button class="btn-at-home" v-on:click="atHome">
      <p>At Home</p>     
    </button>
  </div>
</template>

<script>
export default {
  name: 'SpecialRoller',
  components: {
  },
  methods: {
    closeAll: function() {
      this.$store.dispatch("setRollerToNotAtHome")
    },
    atHome: function() {
      this.$store.dispatch("setRollerToAtHome")
    }
  }
}
</script>

<style>
.closeAll {
  float: left;
}
.btn-close-all {
  float: left;
  background-color: lightslategray;
  border: 1px solid black;
  border-radius: 3px;
  font-size: 20px;
  min-width: 230px;
  max-width: 230px;
}
.btn-at-home {
  float: left;
  background-color: lightslategray;
  border: 1px solid black;
  border-radius: 3px;
  font-size: 20px;
  min-width: 230px;
  max-width: 230px;
  margin-top: 10px;
}
</style>
