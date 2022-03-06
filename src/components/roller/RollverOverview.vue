<template>
  <div class="roller-overview">
    <div v-for='roller in rollers' :key="roller.id">
      <roller class="roller-overview" :name="roller.name" :id="roller.id" />
    </div>
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
.roller-overview {
  margin-top: 10px;
}
</style>