<template>
  <div
    class="w-5 h-5 rounded-md flex justify-center items-center cursor-pointer"
    :class="[`bg-${color}`, outline ? `border-${outlineColor}  border-2` : '']"
    @click="click"
  >
    <input type="checkbox" v-model="innerVal" :value="value" class="hidden" />
    <i
      class="mdi font-bold"
      :class="[
        {
          'mdi-check': checked.includes(value),
        },
        outline ? 'text-gray-500' : 'text-white',
      ]"
    ></i>
  </div>
</template>

<script>
export default {
  props: {
    checked: {
      type: Array,
      default: () => [],
    },
    value: { type: [Array, String, Boolean, Number], default: "" },
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
  },
  computed: {
    innerVal: {
      get() {
        return this.value;
      },
      set(v) {
        this.$emit("input", v);
      },
    },
  },
  mounted() {
    let tipo = typeof this.checked;
    console.log(tipo);
  },
  // props: ['checked', 'value'],
  model: {
    prop: "checked",
    event: "input",
  },

  methods: {
    click() {
      let checked = [].concat(this.checked);
      if (checked.includes(this.value)) {
        checked.splice(checked.indexOf(this.value), 1);
      } else {
        checked.push(this.value);
      }
      this.$emit("input", checked);
    },
  },
};
</script>

<style></style>
