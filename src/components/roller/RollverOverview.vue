<template>
  <div class="roller-overview">
    <h1>Roller overview: Total {{ rollerCount }}</h1>
    <b-container v-for='roller in rollers' :key="roller.id">
      <b-row>
        <b-col>
          <roller :name="roller.name" :id="roller.id"></roller>
        </b-col>
      </b-row>
    </b-container>
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
    rollerCount() {
      return this.$store.getters.getRollerCount;
    }
  },
}
</script>