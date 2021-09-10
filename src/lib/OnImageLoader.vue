<template>
  <div
    class="
      rounded-lg
      border-4 border-primary-500
      bg-opacity-10
      border-dotted
      bg-primary-500
      p-2
      cursor-pointer
      relative
      dropzone
    "
    :class="{ 'flex justify-center items-center': centered }"
    dropzone="dropfiles"
    @drop.prevent="dropped"
    @dragstart.prevent
    @dragover.prevent
    @dragend.prevent
    @click="$refs.mediaCreation.click()"
  >
    <div class="overlay flex justify-center items-center">
      <slot name="overlay-icon">
        <div
          class="
            w-10
            h-10
            rounded-full
            bg-white bg-opacity-30
            flex
            justify-center
            items-center
          "
        >
          <i class="mdi text-white mdi-camera"></i>
        </div>
      </slot>
    </div>
    <input
      type="file"
      ref="mediaCreation"
      class="hidden"
      :accept="acceptedExt"
      @change="uploadMedia"
    />
    <!-- <div class="" v-if="filesList.length > 0">
      <ul>
        <li v-for="(file, f) in filesList" :key="f">{{ file.name }}</li>
      </ul>
    </div> -->
    <slot v-if="!loading"></slot>
    <slot name="loading" v-else>
      <span v-if="loading" class="flex items-center justify-center">
        <i
          class="
            mdi mdi-loading mdi-spin
            fill-current
            text-primary-500 text-3xl
          "
        ></i>
      </span>
    </slot>
    <slot v-if="!loading" name="preview"></slot>
  </div>
</template>

<script>
export default {
  props: {
    acceptedExt: { type: String, default: "image/*" },
    centered: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      filesList: [],
    };
  },
  methods: {
    dropped(e) {
      this.filesList = e.dataTransfer.files;
      this.$emit("uploadCompleted", this.filesList);
    },
    uploadMedia(fileList) {
      this.filesList = Object.values(fileList.target.files);
      this.$emit("uploadCompleted", this.filesList);
    },
  },
};
</script>

<style  scoped>
/* .dropzone:hover .overlay {
  @apply translate-y-0 opacity-100;
}

.overlay {
  @apply w-full h-full rounded-lg bg-black bg-opacity-40 opacity-0 transform -translate-y-1 transition-all  absolute top-0 left-0 z-30;
} */
</style>
