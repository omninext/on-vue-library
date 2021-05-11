<template>
  <form
    @submit.prevent="$emit('submit')"
    class="flex flex-col w-full sm:w-3/4 mx-auto border rounded-md my-4 shadow-2xl"
  >
    <slot name="prepend"></slot>
    <div class="flex flex-col p-4">
      <div class="border-b">
        <h1 v-if="title" class="text-tertiary-800 opacity-60">{{ title }}</h1>
        <h2 v-if="subtitle" class="text-tertiary-200 opacity-60">
          {{ subtitle }}
        </h2>
      </div>
      <div class="py-4">
        <slot name="content"></slot>
      </div>
      <div class="py-4 w-full">
        <slot name="action"></slot>
      </div>
      <div class="py-4 w-full text-red-500" v-if="$scopedSlots.errors">
        <slot name="errors"></slot>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name:"OnForm",
  props: {
    title: {
      type: String,
      default: ""
    },
    subtitle: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="postcss">
form input,
form select,
form textarea {
  @apply mb-2 px-4 py-2 border rounded-sm w-full focus:outline-none;
}

form button {
  @apply focus:outline-none;
}

h1 {
  @apply text-3xl font-medium text-gray-700;
}
h2 {
  @apply text-sm font-light text-gray-400 mb-4;
}
</style>
