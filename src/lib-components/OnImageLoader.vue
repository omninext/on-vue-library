<template>
  <div
    class="w-full h-64 rounded-lg border-4 border-gray-200 border-dotted bg-gray-100 flex justify-center items-center cursor-move"
    dropzone="dropfiles"
    @drop.prevent="dropped"
    @dragstart.prevent
    @dragover.prevent
    @dragend.prevent
    @click="$refs.productImage.click()"
  >
    <input
      type="file"
      ref="productImage"
      class="hidden"
      accept="image/*"
      :multiple="multiple"
      @change="uploadProduct"
    />
    <div class="" v-if="filesList.length > 0">
      <ul>
        <li v-for="(file, f) in filesList" :key="f">{{ file.name }}</li>
      </ul>
    </div>
    <div class="opacity-50" v-else>
      <svg
        xmlns:dc="http://purl.org/dc/elements/1.1/"
        xmlns:cc="http://creativecommons.org/ns#"
        xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
        xmlns:svg="http://www.w3.org/2000/svg"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
        xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
        width="180px"
        height="139px"
        viewBox="0 0 180.11873 139.79364"
      >
        <defs id="defs2" />

        <g
          inkscape:label="Layer 1"
          inkscape:groupmode="layer"
          id="layer1"
          transform="translate(-13.590944,-66.638611)"
        >
          <rect
            style="opacity:1;fill:#d0d0d0;fill-opacity:1;stroke:none;stroke-width:2.96123242;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:fill markers stroke"
            id="rect826"
            width="180.11873"
            height="139.79364"
            x="13.590944"
            y="66.638611"
          />
          <path
            style="opacity:0.675;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:2.98038435;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:fill markers stroke"
            d="M 118.5069,133.51362 84.257994,167.76253 68.290072,151.79461 26.352445,193.73223 h 31.935843 51.939412 68.49781 z"
            id="rect832"
            inkscape:connector-curvature="0"
          />
          <circle
            style="opacity:0.675;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:1.99717033;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:fill markers stroke"
            id="path860"
            cx="58.21706"
            cy="108.55542"
            r="11.772726"
          />
          <rect
            style="opacity:1;fill:none;fill-opacity:1;stroke:none;stroke-width:2.96123242;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:fill markers stroke"
            id="rect862"
            width="152.61417"
            height="116.09874"
            x="26.111267"
            y="77.633698"
          />
        </g>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    multiple: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      filesList: []
    };
  },
  methods: {
    dropped(e) {
      console.log("Hai droppato la bomba", e.dataTransfer.files);
      this.filesList = e.dataTransfer.files;
    },
    uploadProduct(fileList) {
      console.log("Ecco i file ", fileList.target.files);
    }
  }
};
</script>

<style></style>
