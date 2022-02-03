<template>
  <v-row justify="space-around">
    <v-color-picker class="ma-2" :swatches="swatches" show-swatches />
  </v-row>
</template>

<script>
export default {
  data: () => ({
    swatches: [
      ['#F44336', '#2196F3', '#8BC34A', '#FF5722'],
      ['#E91E63', '#03A9F4', '#CDDC39', '#795548'],
      ['#9C27B0', '#00BCD4', '#FFEB3B', '#607D8B'],
      ['#673AB7', '#009688', '#FFC107'],
      ['#3F51B5', '#4CAF50', '#FF9800'],
    ],
  }),
}
</script>
