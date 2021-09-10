<template>
  <div class="relative">
    <on-background-image :bgImage="bgImage" :rounded="rounded" />
    <div
      class="flex flex-col h-full relative z-30"
      :class="{
        'bg-white': !bgImage && !cardGreen,
        'rounded-md': rounded,
        'p-4': pad,
        'border border-secondary-100': outlined,
        'shadow-md': shadow,
        'bg-primary-500 bg-opacity-20': cardGreen,
        'border-solid border-l-4 border-primary-500': leftBorder,
      }"
    >
      <div class="flex-shrink-0"><slot name="header"></slot></div>
      <div class="flex-grow"><slot name="content"></slot></div>
      <div class="flex-shrink-0"><slot name="footer"></slot></div>
    </div>
  </div>
</template>

<script>
import OnBackgroundImage from "./OnBackgroundImage.vue";
// import { DateTime } from 'luxon'
export default {
  components: { OnBackgroundImage },
  name: "OnCard",
  props: {
    bgImage: {
      type: String,
      default: "",
    },
    rounded: {
      type: Boolean,
      default: false,
    },
    pad: {
      type: Boolean,
      default: true,
    },
    outlined: {
      type: Boolean,
      default: true,
    },
    shadow: {
      type: Boolean,
      default: false,
    },
    cardGreen: {
      type: Boolean,
      defautl: false,
    },
    leftBorder: {
      type: Boolean,
      default: false,
    },
    cardId: {
      type: String,
      defautl: "",
    },
    plannedStartDate: {
      type: String,
      defautl: "",
    },
    plannedStartTime: {
      type: String,
      defautl: "",
    },
    plannedEndTime: {
      type: String,
      defautl: "",
    },
  },
  // data() {
  //   return {
  //     currentPlannedTime: '',
  //   }
  // },
  // computed: {
  //   getCurrentPlannedTime() {
  //     let newDate = DateTime.fromISO(
  //       `${this.plannedStartDate}T${this.plannedStartTime}`
  //     )
  //     let diff = newDate.diffNow('minutes')
  //     console.log('DIFFERENZA', diff)
  //     if (diff.values.minutes <= 60) {
  //       return newDate.toRelative()
  //     }
  //     return `${this.plannedStartTime} - ${this.plannedEndTime}`
  //   },
  // },
  // methods: {
  //   getPlannedTime() {
  //     this.currentPlannedTime = this.getCurrentPlannedTime()
  //     this.$emit('updatePlannedTime', this.currentPlannedTime)
  //   },
  // },
};
</script>

<style></style>
