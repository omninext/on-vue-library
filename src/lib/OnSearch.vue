<template>
  <div class="shadow-md w-full flex border border-gray-100 py-2 px-4">
    <input
      type="text"
      class="text-sm text-secondary-500 flex-grow"
      v-model="innerValue"
      :placeholder="placeholder"
    />
    <button
      @click="$emit('search', value)"
      class="flex-shrink border-l border-gray-100 pl-4"
    >
      <i class="mdi mdi-magnify text-primary-500 text-xl"></i>
    </button>
  </div>
</template>

<script>
export default {
  name: "OnSearch",
  props: {
    value: String,
    placeholder: String,
  },

  computed: {
    innerValue: {
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
