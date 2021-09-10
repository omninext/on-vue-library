<template>
  <transition name="modal">
    <div class="modal-mask" v-if="value">
      <input type="hidden" v-model="innerVal" />
      <div class="modal-wrapper" @click="close">
        <div
          class="modal-container"
          :class="[sizeClass, { 'py-20 px-10': pad }]"
          @click.stop
        >
          <div
            class="modal-dialog h-screen md:h-auto rounded-none md:rounded-xl"
          >
            <div class="modal-header flex flex-col pb-5">
              <slot name="header">
                <div
                  class="
                    align-end
                    text-right text-gray-700 text-3xl
                    cursor-pointer
                    py-3
                    px-5
                  "
                  @click="close"
                >
                  <i class="mdi mdi-close"></i>
                </div>
              </slot>
            </div>
            <div class="modal-body">
              <slot name="content"> </slot>
            </div>
            <div v-if="$slots.footer" class="modal-footer">
              <slot name="footer"></slot>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: "",
    },
    pad: {
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
    sizeClass() {
      let sizeClass;
      switch (this.size) {
        case "small":
          sizeClass = ["w-screen h-screen", " lg:w-3/5", "xl:w-2/4"];
          break;
        case "medium":
          sizeClass = ["w-screen h-screen", " lg:w-1/2", "xl:w-1/2"];
          break;

        default:
          sizeClass = ["w-full h-screen", " lg:w-4/5", "xl:w-3/4"];
          break;
      }
      return sizeClass;
    },
  },
  methods: {
    close() {
      this.innerVal = false;
      this.$emit("input", false);
      this.$emit("close", true);
    },
  },
};
</script>

<style scoped>
/* .modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  margin: 0px auto;
}

.modal-dialog {
  background-color: #fff;
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  max-height: 100%;
  position: relative;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  overflow-y: auto;
  max-height: 100%;

  flex: 1 1 auto !important;
}



@media (min-width: 744px) {
  .modal-container {
    padding: 40px;
  }
}
.modal-default-button {
  float: right;
}



.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
} */
</style>
