<template>
  <div class="grid gap-2" :class="inline ? 'grid-flow-col' : 'grid-flow-row'">
    <slot name="before"></slot>
    <span
      v-if="label"
      class="text-secondary-400 text-xs"
      :class="inline ? 'col-span-4 md:col-span-3' : ''"
      >{{ label }} <small v-if="required">*</small></span
    >
    <div>
      <input
        v-model="newVal"
        :type="inputType"
        :placeholder="placeholder"
        :class="classes"
        @input="onInput"
        :required="required"
        :disabled="$attrs.disabled"
      />

      <slot name="error"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "OnInput",
  props: {
    label: {
      type: String,
      default: "",
    },
    inputType: {
      type: String,
      default: "text",
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    classes: {
      type: [Array, Object, String],
      default: "w-full",
    },
    inline: {
      type: Boolean,
      default: false,
    },
    required: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  computed: {
    newVal: {
      get() {
        return this.modelValue;
      },
      set(v) {
        this.$emit("update:modelValue", v);
      },
    },
  },
  watch: {
    value(value) {
      this.newVal = value;
    },
    // newVal: {
    //   immediate: true,
    //   handler(n) {
    //     this.$emit("input", n);
    //   },
    // },
  },
  methods: {
    onInput(event) {
      this.newVal = event.target.value;
    },
  },
};
</script>

<style  scoped>
/* input {
  color: inherit;
  font-size: inherit;
  @apply py-1 px-2 border-gray-300 border-b border-solid bg-transparent;
}
input::placeholder {
  @apply text-gray-300;
}
input.error {
  @apply bg-red-100;
}
input.error::placeholder {
  @apply text-red-600;
} */
</style>
