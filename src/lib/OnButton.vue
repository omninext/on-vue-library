<template>
  <button
    v-bind="$attrs"
    @click="$emit('click')"
    :class="[testClass, { ...typeClass, tiny }]"
  >
    <slot name="prepend">
      <img v-if="svgPath" :src="svgPath" />
      <i v-if="icon" class="mdi" :class="icon"></i>
    </slot>
    <slot v-if="!loading"
      ><span>{{ label }}</span></slot
    >

    <slot name="loading" v-else>
      <span v-if="loading">
        <i
          class="mdi mdi-loading mdi-spin fill-current text-white text-3xl"
        ></i>
      </span>
    </slot>
    <slot name="append"></slot>
  </button>
</template>

<script>
export default {
  name: "OnButton",
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
    // disabled: {
    //   type: Boolean,
    //   default: false,
    // },
    type: {
      type: String,
      default: "basic",
      validator: function (value) {
        return (
          [
            "basic",
            "iconic",
            "icononly",
            "labled",
            "outline",
            "transparent",
          ].indexOf(value) !== -1
        );
      },
    },
    label: {
      type: String,
      default: "",
    },
    icon: {
      type: String,
      default: null,
    },
    svgPath: {
      type: String,
      default: null,
    },
    tiny: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    typeClass() {
      let _ret = {};
      _ret[this.type] = this.type;
      return { ..._ret };
    },
    testClass() {
      // let _ret = {};
      // _ret[this.type] = `on-${this.type}`;
      return `on-${this.type}`;
      // return { ..._ret };
    },
  },
};
</script>

<style lang="postcss"  scoped>
button {
  transition: all 0.1s ease-in;
  @apply text-sm lg:text-base whitespace-nowrap flex items-center justify-center;
}

button:disabled {
  @apply opacity-60 cursor-not-allowed;
}

button:focus {
  outline: none;
}

.label {
  @apply text-sm lg:text-base whitespace-nowrap;
}
i {
  @apply text-2xl;
}
.basic {
  @apply bg-primary-500 text-white rounded-sm hover:bg-primary-600 px-10 py-3;
}
.basic .label {
  @apply text-white text-base;
}

.tiny {
  padding: 5px 15px !important;
}

.basic img {
  @apply hidden;
}

.labled {
  @apply bg-primary-500 rounded-sm text-white hover:bg-primary-600 pl-5 pr-8 py-2 text-right flex flex-row items-center space-x-2;
}

.outline {
  @apply border-primary-500 text-primary-500 border-solid border rounded-sm hover:bg-primary-500 hover:text-white px-5 py-2 text-right flex flex-row items-center space-x-2;
}
.outline .label {
  @apply text-base;
}
.outline i {
  @apply text-2xl;
}

.transparent {
  @apply text-secondary-500 hover:underline px-5 pl-0 py-2 text-right flex flex-row items-center space-x-2;
}
.transparent .label {
  @apply font-bold;
}
.transparent i {
  @apply text-primary-500;
}
.iconic {
  @apply text-secondary-500 rounded-sm px-5 py-2 text-center whitespace-normal flex flex-col items-center hover:opacity-80;
}
.iconic .label {
  @apply text-xs;
}
.iconic i {
  @apply text-2xl lg:text-3xl font-light;
}

.icononly {
  @apply text-primary-500 px-3 pl-0 py-2 text-right flex flex-row items-center hover:text-primary-600 space-x-2;
}
.icononly .label {
  @apply opacity-0 w-0 transform -translate-x-2 transition-all;
}
.icononly:hover .label {
  @apply opacity-100 w-auto transform translate-x-0;
}

.icononly i {
  @apply text-3xl font-light;
}
</style>
