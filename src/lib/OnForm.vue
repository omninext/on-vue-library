<template>
  <form
    @submit.prevent="$emit('submit')"
    class="flex flex-col w-full sm:w-3/4 mx-auto rounded-md my-4"
    :class="classes"
  >
    <slot name="prepend"></slot>
    <div class="flex flex-col p-4">
      <div class="border-b">
        <h1 v-if="title" class="text-gray-700">{{ title }}</h1>
        <h2 v-if="subtitle" class="text-gray-500">
          {{ subtitle }}
        </h2>
      </div>
      <div class="py-4">
        <slot name="content"></slot>
      </div>
      <div class="pb-4 w-full text-red-500" v-if="$slots.errors">
        <slot name="errors"></slot>
      </div>
      <div class="py-4 w-full">
        <slot name="action"></slot>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    subtitle: {
      type: String,
      default: "",
    },
    classes: {
      type: Array,
      defautl: () => [],
    },
  },
};
</script>

<style >
/* form input,
form select,
form textarea {
  @apply mb-2 px-4 py-2 border rounded-sm w-full focus:outline-none;
}

form button {
  @apply focus:outline-none;
}

h1 {
  @apply text-lg text-gray-700;
}
h2 {
  @apply text-sm font-light text-gray-400 mb-4;
} */
</style>
