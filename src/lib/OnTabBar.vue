<template>
  <ul
    class="
      flex
      space-x-8
      lg:space-x-5 lg:justify-around
      px-8
      md:rounded-full
      bg-gray-100
      whitespace-nowrap
      on-tab
      w-full
      lg:w-auto
    "
  >
    <slot :data="items">
      <li
        v-for="(item, idx) in items"
        :key="idx"
        :class="{ active: activeTab == idx }"
        @click="activate(idx)"
      >
        <p class="flex-grow">
          {{ item }}
        </p>
      </li>
    </slot>
  </ul>
</template>

<script>
export default {
  name: "OnTabBar",
  props: {
    items: {
      type: Array,
      defautl: () => [],
    },
  },
  data() {
    return {
      activeTab: 0,
    };
  },
  methods: {
    activate(idx) {
      this.activeTab = idx;
      this.$emit("activeTab", idx);
    },
  },
};
</script>

<style >
/* .on-tab {
  max-width: 100%;
  overflow-x: scroll;
}
.on-tab::-webkit-scrollbar {
  display: none;
}

.on-tab li {
  position: relative !important;
  z-index: 1;
  @apply py-3 lg:py-2 border-none cursor-pointer text-sm;
}

.on-tab li::after {
  content: "";
  position: absolute;
  @apply border-b-2 border-primary-500;
  left: 38%;
  bottom: 0;
  height: 3px;
  width: 0%;
  opacity: 0;
  transition: all 0.5s ease-in-out;
}
.on-tab li.active {
  @apply text-primary-500 font-semibold;
}

.on-tab li.active::after {
  opacity: 1;
  width: 30%; 
} */
</style>
