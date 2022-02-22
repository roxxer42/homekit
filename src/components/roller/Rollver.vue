<template>
  <div class="roller">
    <div class="name">
      {{ name }}
    </div>
    <div class="arrow-up">
      <font-awesome-icon icon="angles-up" class="icon-up" />
    </div> 
    <div class="state">
      {{ state }}%
    </div>
    <div class="arrow-down">
      <font-awesome-icon icon="angles-down" />
    </div> 
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
.roller {
  float: left;
  background-color: lightslategray;
  border: 1px solid black;
  border-radius: 3px;
  font-size: 20px;
}
.name {
  float: left;
  margin: 5px 1px 5px 1px;
  padding: 5px 10px 5px 10px;
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