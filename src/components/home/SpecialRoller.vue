<template>
  <div class="special-roller-container">
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
.special-roller-container {
  display: flex;
  flex-direction: column;
}
.btn-close-all, .btn-at-home {
  background-color: lightslategray;
  border: 1px solid black;
  border-radius: 3px;
  font-size: 20px;
  min-width: 230px;
  max-width: 230px;
  margin-top: 10px;
}
.btn-close-all {
  order: 1;
}
.btn-at-home {
  order: 2;
}
</style>
