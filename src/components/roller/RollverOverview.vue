<template>
  <div class="roller-overview-container">
      <roller class="roller-overview-item" v-for='roller in rollers' :key="roller.id" :name="roller.name" :id="roller.id" />
  </div>  
</template>

<script>
import Roller from './Rollver.vue'

export default {
  name: 'RollverOverview',
  components: {
    Roller
  },
  data() {
    return {
    }
  },
  computed: {
    rollers() {
      return this.$store.getters.getAllRollers;
    },
  },
}
</script>
<style>
.roller-overview-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
}
.roller-overview-item {
  width: 49%;
  margin-top: 2%;
}
</style>