<template>
  <div class="absolute top-0 left-0 w-full h-full z-0" v-if="bgImage">
    <div
      class="absolute bg-gradient-to-t from-secondary-500 w-full h-full z-20"
      :class="{ 'rounded-md': rounded }"
    ></div>
    <img
      :src="bgImage"
      class="absolute w-full h-full object-cover opacity-60 z-10"
      :class="{ 'rounded-md': rounded }"
    />
  </div>
</template>

<script>
export default {
  name: "OnBackgroundImage",
  props: {
    bgImage: {
      type: String,
      default: "",
    },
    rounded: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style></style>
