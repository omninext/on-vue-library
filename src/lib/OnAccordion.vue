<template>
  <div
    class="
      grid grid-cols-12
      gap-4
      py-3
      mb-2
      items-start
      lg:items-center
      border-b-4 border-solid
    "
  >
    <div
      class="
        col-span-12
        lg:col-span-4 lg:border-r
        flex
        justify-between
        items-start
        px-2
      "
    >
      <slot name="content-always-visible"></slot>
      <div class="flex justify-center lg:hidden">
        <on-button
          type="icononly"
          icon="mdi mdi-chevron-down"
          @click="visible = !visible"
        ></on-button>
      </div>
    </div>

    <div
      class="
        content
        grid grid-cols-8
        col-span-12
        gap-4
        lg:col-span-8
        items-start
        lg:items-center
      "
      :class="{ 'content-hide': !visible }"
    >
      <slot name="content-hideble"></slot>
    </div>
  </div>
</template>

<script>
import OnButton from "./OnButton.vue";
export default {
  components: {
    OnButton,
  },
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    hide() {
      console.log("HIDING");
      this.visible = false;
    },
  },
};
</script>

<style lang="postcss" scoped>
.content {
  @apply transition-all visible;
}
.content-hide {
  @apply hidden lg:grid opacity-0 lg:opacity-100;
}
</style>
