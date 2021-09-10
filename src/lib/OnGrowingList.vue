<template>
  <section>
    <div
      v-for="(item, idx) in items"
      :key="idx"
      class="
        flex flex-col
        md:flex-row
        lg:space-x-5
        items-start
        py-5
        lg:py-0
        md:items-center
        border-gray-300 border-b border-solid
      "
    >
      <div class="index" v-if="showIndex" :class="{ green: indexGreen }">
        {{ idx + 1 }}
      </div>
      <div class="item-container flex flex-col flex-grow">
        <slot name="content" :data="item">
          <span class="text-secondary-400 text-xs px-2 pb-1">{{
            itemsLabel
          }}</span>
          <span class="text-secondary-500 text-lg px-2">{{ item }}</span>
        </slot>
      </div>
      <slot name="actions" :data="item">
        <on-button
          class="self-end"
          type="iconic"
          :label="$t('common.remove')"
          icon="mdi-trash-can-outline"
          @click="$emit('remove', idx)"
        ></on-button>
      </slot>
    </div>
  </section>
</template>

<script>
import OnButton from "./OnButton.vue";
export default {
  components: { OnButton },
  name: "OnGrowingList",
  props: {
    value: { type: Array, default: () => [] },
    items: { type: Array, defautl: () => [] },
    showIndex: { type: Boolean, default: true },
    itemsLabel: { type: String, default: "" },
    indexGreen: { type: Boolean, default: false },
  },
};
</script>

<style  scoped>
/* .index {
  @apply rounded-full text-primary-500 bg-white w-6 h-6 flex justify-center items-center;
}
.item-container {
  @apply py-3 px-2;
}

.index.green {
  @apply text-white bg-primary-500;
} */
</style>
