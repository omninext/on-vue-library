<template>
  <div
    class="chip"
    :class="[bgColor, borderColor, textColor, $slots.image ? 'pl-4' : 'pl-6 ']"
  >
    <div v-if="$slots.image" class="w-5 h-5 rounded-full">
      <slot name="image"></slot>
    </div>
    <div
      class="whitespace-nowrap overflow-hidden overflow-ellipsis chip-content"
    >
      <slot name="content"></slot>
    </div>
    <i
      v-if="clearable"
      class="close-icon mdi mdi-close"
      @click="$emit('clear')"
    ></i>

    <input type="hidden" value="itme[itemValue]" />
  </div>
</template>

<script>
export default {
  name: "OnChip",
  props: {
    clearable: {
      type: Boolean,
      default: true,
    },
    textColor: {
      type: String,
      default: "text-secondary-500",
    },
    bgColor: {
      type: String,
      default: "bg-gray-100",
    },
    borderColor: {
      type: String,
      default: "border-gray-300",
    },
  },
};
</script>

<style lang="postcss"  scoped>
.chip {
  padding-top: 3px;
  padding-bottom: 3px;
  @apply rounded-full flex flex-row items-center gap-3 w-max justify-around border border-solid opacity-80 hover:opacity-100 px-5;
}

.chip-content {
  max-width: 180px;
}

.close-icon {
  @apply cursor-pointer text-sm font-medium  rounded-full;
}
</style>
