<template>
  <ul
    class="
      whitespace-nowrap
      absolute
      bg-white
      border border-gray-200
      z-100
      right-0
      mt-6
      rounded-sm
      p-3
      px-3
      shadow-lg
      text-center
      min-w-32
    "
  >
    <slot></slot>
  </ul>
</template>

<script>
export default {
  name: "OnMenuItems",
};
</script>

<style></style>
