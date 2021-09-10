<template>
  <div
    class="w-5 h-5 rounded-md flex justify-center items-center cursor-pointer"
    :class="[
      `bg-${color}`,
      outline ? `border-${outlineColor} border-solid border-2` : '',
    ]"
    @click="innerVal = !innerVal"
  >
    <input type="radio" :value="label" v-model="innerVal" class="hidden" />
    <i
      class="mdi font-bold"
      :class="[
        {
          'mdi-check': innerVal == label,
        },
        outline ? 'text-gray-500' : 'text-white',
      ]"
    ></i>
  </div>
</template>

<script>
export default {
  props: {
    value: { type: [String, Number], default: "" },
    color: {
      type: String,
      default: "primary-500",
    },
    outlineColor: {
      type: String,
      default: "gray-400",
    },
    outline: {
      type: Boolean,
      default: false,
    },
    label: String,
  },
  computed: {
    innerVal: {
      get() {
        return this.value;
      },
      set() {
        this.$emit("change", this.label);
      },
    },
  },
};
</script>

<style></style>
