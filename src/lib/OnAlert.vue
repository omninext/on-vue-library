<template>
  <div
    class="flex flex-col justify-center items-center px-24 py-10 text-center"
  >
    <slot name="image">
      <img :src="image" class="w-16 object-cover" />
    </slot>
    <slot name="title">
      <h2 class="text-secondary-500 font-bold text-2xl py-3">
        {{ title }}
      </h2>
    </slot>
    <slot name="message">
      <div class="py-5">
        <span>{{ message }}</span>
      </div>
    </slot>
    <slot name="actions">
      <on-button
        type="outline"
        :label="ctaText"
        @click="$emit('cta')"
      ></on-button>
    </slot>
  </div>
</template>

<script>
import OnButton from "./OnButton.vue";
export default {
  name: "OnAlert",
  components: {
    OnButton,
  },
  props: {
    image: { type: String, default: "/icone/notification-warning.svg" },
    title: { type: String, default: "" },
    message: { type: String, default: "" },
    ctaText: { type: String, default: "" },
  },
};
</script>

<style></style>
