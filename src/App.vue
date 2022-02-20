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
                  element: 'font-awesome-icon',
                  attributes: {
                    'icon': 'align-justify'
                  }
                }
              },
              {
                href: '/roller',
                title: 'Roller',
                icon: {
                  element: 'font-awesome-icon',
                  attributes: {
                    'icon': 'arrows-up-down'
                  }
                }
              },
              {
                href: '/alarm',
                title: 'Alarm',
                icon: {
                  element: 'font-awesome-icon',
                  attributes: {
                    'icon': 'bell'
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