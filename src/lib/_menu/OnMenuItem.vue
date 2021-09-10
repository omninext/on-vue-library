<template>
  <li
    @click="$emit('click')"
    class="
      border-b border-solid border-secondary-100
      p-2
      cursor-pointer
      transition-all
    "
    :class="{ 'item-active': isActive }"
  >
    <slot></slot>
  </li>
</template>

<script>
export default {
  /**
   * The only true button.
   * @displayName Menu Item
   */
  name: "OnMenuItem",
  props: {
    /**
     * checks if the item is active
     */
    isActive: { type: Boolean, default: false },
  },
  // methods: {
  //   clickHandler(ev) {
  //     this.$emit('selected', ev.target)
  //   },
  // },
};
</script>

<style  scoped>
li:last-child {
  border: none !important;
}

li::before {
  display: block;
  content: attr(title);
  font-weight: bold;
  height: 0;
  overflow: hidden;
  visibility: hidden;
}
li.item-active {
  @apply font-bold;
}
</style>
