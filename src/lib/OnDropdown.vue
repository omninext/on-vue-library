<template>
  <div :tabindex="tabindex">
    <div class="relative">
      <button @click="showItems = !showItems" @blur="close">
        <slot name="activator"></slot>
      </button>
      <input type="hidden" :value="value" />
      <transition name="slide">
        <div
          v-if="showItems"
          class="absolute right-0 z-50 shadow-2xl rounded-md"
          :class="{
            'w-48': size == 'default',
            'w-80': size == 'big',
            'w-40': size == 'small',
          }"
        >
          <slot name="items" :items="items"></slot>
        </div>
      </transition>
    </div>
    <!-- <dismissible
      v-if="showItems"
      class="z-40"
      @close="showItems = false"
    ></dismissible> -->
  </div>
</template>

<script>
// import Dismissible from '@/components/_utils/Dismissible.vue'
export default {
  name: "OnDropdown",

  props: {
    size: {
      type: String,
      default: "default",
    },
    value: {
      type: String,
      default: "",
    },
    tabindex: {
      type: Number,
      required: false,
      default: 0,
    },
    items: {
      type: Array,
      default: () => [],
    },
  },
  data: () => ({
    showItems: false,
    loading: false,
    account: null,
  }),

  watch: {
    showItems: function (newval) {
      //console.log('Show Val changed ', newval, oldval)
      if (newval) this.$emit("open");
      if (!newval) this.$emit("close");
    },
  },
  methods: {
    close() {
      setTimeout(() => {
        this.showItems = false;
      }, 200);
    },
  },
};
</script>

<style scoped>
/* .slide-enter-active,
.slide-leave-active {
  transition: all 0.25s ease-in-out;
}
.slide-enter, .slide-leave-to  {
  transform: translateX(-10px);
  opacity: 0;
} */
</style>
