<template>
  <div>
    <v-card
      id="settings"
      class="pa-4"
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
      :close-on-content-click="false"
      activator="#settings"
      bottom
      left
      nudge-left="8"
      offset-x
      origin="top right"
    >
      <v-card class="px-2 pt-1 pb-n4">
        <div class="ma-4">
          <v-switch v-model="darkMode" label="Dark Mode" elevation="4" />
          <v-color-picker
            v-model="swatchValue"
            class="ma-2"
            elevation="4"
            mode="hexa"
            show-swatches
            :swatches="swatches"
            :value="swatchValue"
            @#update:color()
          />
          <v-radio-group v-model="colorRadioGroup">
            <v-row>
              <v-col>
                <v-radio label="Primary" :value="1" />
              </v-col>
              <v-col>
                <v-btn
                  class="ma-2"
                  color="primary"
                  v-text="'Primary'"
                  width="100%"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-radio label="Secondary" :value="2" />
              </v-col>
              <v-col>
                <v-btn
                  class="ma-2"
                  color="secondary"
                  v-text="'Secondary'"
                  width="100%"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col> <v-radio label="Secondary" :gtvalue="3" /> </v-col>
              <v-col>
                <v-btn class="ma-2" color="info" v-text="'Info'" width="100%" />
              </v-col>
            </v-row>
          </v-radio-group>

          <v-row class="mt-2">
            <v-col cols="6">
              <v-btn color="accent" v-text="'Accent'" width="100%" />
            </v-col>
            <v-col cols="6">
              <v-btn color="success" v-text="'Success'" width="100%" />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
              <v-btn color="warning" v-text="'Warning'" width="100%" />
            </v-col>
            <v-col cols="6"
              ><v-btn color="error" v-text="'Error'" width="100%"
            /></v-col>
          </v-row>
        </div>
      </v-card>
    </v-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      colorRadioGroup: 1,
      darkMode: true,
      swatches: [
        ['#E91E63', '#9C27B0', '#673AB7'],
        ['#3F51B5', '#00BCD4', '#009688'],
        ['#8BC34A', '#CDDC39'],
        ['#FFEB3B', '#FFC107', '#FF5722'],
        ['#795548', '#607D8B'],
      ],
      swatchValue: this.$vuetify.theme.themes.dark.primary,
    }
  },
  watch: {
    colorRadioGroup(data) {
      console.log('colorRadioGroup: ', data)
    },
    darkMode(data) {
      if (data) {
        this.swatchValue = this.$vuetify.theme.themes.dark.primary
      }
      if (!data) {
        this.swatchValue = this.$vuetify.theme.themes.light.primary
      }
      this.$vuetify.theme.dark = this.darkMode
    },
    swatchValue(data) {
      console.log('Hex: ', data)
    },
  },
  mounted() {
    this.$vuetify.theme.dark = this.darkMode
  },
  methods: {
    // changeColor(data) {
    //   console.log('Color change: ', data)
    // },
  },
}
</script>
