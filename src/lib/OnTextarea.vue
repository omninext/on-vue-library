<template>
  <div class="grid gap-2" :class="inline ? 'grid-flow-col' : 'grid-flow-row'">
    <slot name="before"></slot>
    <span
      v-if="label"
      class="text-secondary-400 text-xs px-2"
      :class="inline ? 'col-span-4 md:col-span-3' : ''"
      >{{ label }}<small v-if="required">*</small></span
    >
    <div>
      <textarea
        v-model="newVal"
        :placeholder="placeholder"
        :class="classes"
        :rows="rows"
        :cols="cols"
        @input="onInput"
        :required="required"
        :maxlength="maxLength"
      />
      <slot name="info">
        <span class="info">{{ infoMessage }}</span>
      </slot>

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
    value: {
      type: String,
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
    rows: {
      type: Number,
      default: 3,
    },
    cols: {
      type: Number,
      default: 50,
    },
    maxLength: {
      type: Number,
      defautl: null,
    },
    infoMessage: {
      type: String,
      defautl: "",
    },
    required: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      newVal: this.value,
    };
  },
  watch: {
    value(value) {
      this.newVal = value;
    },
    newVal: {
      immediate: true,

      handler(n) {
        this.$emit("input", n);
      },
    },
  },
  methods: {
    onInput(event) {
      this.newVal = event.target.value;
    },
  },
};
</script>

<style scoped>
/* textarea {
  color: inherit;
  font-size: inherit;
  @apply py-3 ;
  @apply px-2 ;
  @apply border-gray-300 ;
  @apply border-b ;
  @apply bg-transparent ;
  @apply outline-none;
}
textarea::placeholder {
  @apply text-gray-300;
}
textarea.error {
  @apply bg-red-100;
}
textarea.error::placeholder {
  @apply text-red-600;
}

.info {
  @apply px-2 text-xs text-secondary-400 italic;
} */
</style>
