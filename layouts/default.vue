<template>
  <v-app dark>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <v-card
          id="settings"
          class="py-2 px-4"
          flat
          min-width="100"
          style="
            position: fixed;
            top: 115px;
            right: -35px;
            border-radius: 8px;
            z-index: 1;
          "
        >
          <v-icon large v-text="'fas fa-cog'" />
        </v-card>

        <v-menu
          v-model="menu"
          :close-on-content-click="false"
          activator="#settings"
          bottom
          content-class="v-settings"
          left
          nudge-left="8"
          offset-x
          origin="top right"
          transition="scale-transition"
        >
          <v-card class="text-center mb-0" width="300">
            <v-card-text>
              <strong class="mb-3 d-inline-block">SIDEBAR FILTERS</strong>

              <v-item-group v-model="color" mandatory>
                <v-item v-for="color in colors" :key="color" :value="color">
                  <template #default="{ active, toggle }">
                    <v-avatar
                      :class="active && 'v-settings__item--active'"
                      :color="color"
                      class="v-settings__item mx-1"
                      size="25"
                      @click="toggle"
                    />
                  </template>
                </v-item>
              </v-item-group>

              <v-divider class="my-4 secondary" />
            </v-card-text>
          </v-card>
        </v-menu>
        <Nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light> mdi-repeat </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
export default {
  name: 'DefaultLayout',
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    }
  },
}
</script>
