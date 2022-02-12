<template>
  <div id="app">
    <div id="view" :class="[{'collapsed' : collapsed}]">
      <router-view/>
    </div>
    <sidebar-menu
      class="sidebar"
      :menu="menu"
      :collapsed="collapsed"
      @item-click="onItemClick"
      @update:collapsed="onToggleCollapse"
    />
  </div>
</template>

<script>
import overviewIcon from './assets/overview.png'
import alarmIcon from './assets/alarm.png'
import rollerIcon from './assets/roller.png'

export default {
  name: 'App',
  components: {
  },
  data() {
      return {
          menu: [
              {
                href: '/',
                title: 'Home',
                icon: {
                  element: 'img',
                  attributes: {
                    src: overviewIcon
                  }
                }
              },
              {
                href: '/roller',
                title: 'Roller',
                icon: {
                  element: 'img',
                  attributes: {
                    src: rollerIcon
                  }
                }
              },
              {
                href: '/alarm',
                title: 'Alarm',
                icon: {
                  element: 'img',
                  attributes: {
                    src: alarmIcon
                  }
                }
              }
          ],
          collapsed: true
      };
  },
  methods: {
    onItemClick(e, i) {
      console.log("onItemClick", e, i);
    },
    onToggleCollapse(collapsed) {
      console.log("onCollapse");
      this.collapsed = collapsed;
    }
  }
};
</script>

<style>
#view {
  padding-left: 350px;
}
#view.collapsed {
  padding-left: 70px;
}
</style>