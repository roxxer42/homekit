<template>
  <div id="nav">
     <b-button-group vertical>
      <b-button><router-link to="/">Home</router-link></b-button>
      <b-button><router-link to="/roller">Roller</router-link></b-button>
      <b-button><router-link to="/alarm">Alarm</router-link></b-button>
    </b-button-group>
  </div>
  <router-view/>
</template>

<style>
body {margin:0}

.nav {
  width: 90px;
  background-color: #303030;
}

.nav {
  display: block;
  text-align: center;
  padding: 15px;
  transition: all 0.5s ease;
  color: white;
  font-size: 35px;
}

.nav li:hover {
  background-color: #006346;
}

.nav li.router-link-active {
  background-color: #008c62;
  color: white;
}
</style>
