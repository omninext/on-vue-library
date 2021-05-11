<template>
  <button
    @click="$emit('click')"
    :class="[
      ...buttonColor,
      { 'cursor-not-allowed': disabled },
      { 'opacity-50': disabled }
    ]"
    :disabled="disabled"
    class="rounded-sm hover:opacity-80"
  >
    <span v-if="loading">
      <i class="mdi mdi-loading mdi-spin fill-current text-primary-700"></i>
    </span>
    <template v-else>
      <slot></slot>
    </template>
  </button>
</template>

<script>
export default {
  name:"OnButton",
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: "primary"
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    buttonColor() {
      return [
        `text-${this.color}-500`,
        `bg-${this.color}-50`,
        "border",
        `border-${this.color}-500`
      ];
    }
  }
};
</script>

<style lang="postcss" scoped>
button.btn {
  @apply px-8 py-1 border border-primary-500;
}
button[type="submit"] {
  @apply px-8 py-1;
}
</style>
