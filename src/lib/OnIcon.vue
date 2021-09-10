<template>
  <i class="mdi" :class="[`mdi-${icon}`, iconSize]" v-if="icon" />
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: "",
      required: false,
    },
    size: {
      type: String,
      default: "md",
      validator: function (v) {
        return ["sm", "md", "lg", "xl"].indexOf(v) > -1;
      },
    },
  },
  computed: {
    iconSize() {
      let _icn = "";
      switch (this.size) {
        case "sm":
          _icn = "18px";
          break;
        case "md":
          _icn = "24px";
          break;
        case "lg":
          _icn = "36px";
          break;
        case "xl":
          _icn = "48px";
          break;

        default:
          _icn = "24px";
          break;
      }
      return `mdi-${_icn}`;
    },
  },
};
</script>

<style></style>
