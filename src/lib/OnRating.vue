<template>
  <ul class="grid grid-cols-5 justify-between">
    <li v-for="(item, i) in max" :key="i">
      <slot name="content" :item="item"> </slot>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    max: {
      type: Number,
      default: 5,
    },
    value: {
      type: [String, Number],
      default: "",
    },
  },
  computed: {
    innerVal: {
      get() {
        return this.value;
      },
      set(v) {
        this.$emit("input", v);
      },
    },
  },
};
</script>

<style></style>
