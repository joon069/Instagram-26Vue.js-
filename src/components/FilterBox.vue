//FilterBox.vue

<template>
  <div class="filter-item" @click="select">
    <div class="filter-title">{{ filter }}</div>
    <div
      class="filter-thumb"
      :class="filter"
      :style="{ backgroundImage: `url(${image})` }"
    ></div>
  </div>
</template>

<script>
export default {
  name: 'FilterBox',
  props: {
    image: String,
    filter: String,
  },
  methods: {
    select() {
      this.emitter.emit('select-filter', this.filter);
    },
  },
};
</script>

<style scoped>
div {
  box-sizing: border-box;
}
</style>