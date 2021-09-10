<template>
  <div class="circular">
    <svg :width="width" :height="width">
      <defs>
        <linearGradient id="gradient" x1="0%" y1="100%" x2="100%" y2="100%">
          <stop offset="0%" :stop-color="from" />
          <stop offset="100%" :stop-color="to" />
        </linearGradient>
      </defs>

      <circle
        class="progress-ring__bg md:flex"
        stroke="#ddd"
        :stroke-width="strokeWidth"
        fill="transparent"
        :r="radius"
        :cx="width / 2"
        :cy="width / 2"
      />
      <circle
        ref="progress_ring"
        class="progress-ring__circle"
        :stroke="gradient ? 'url(#gradient)' : stroke"
        :stroke-width="strokeWidth"
        stroke-linecap="round"
        :fill="fill"
        :r="radius"
        :cx="width / 2"
        :cy="width / 2"
      />
    </svg>
    <div
      class="
        absolute
        top-0
        left-0
        flex
        justify-center
        items-center
        text-xl
        font-bold
      "
      :style="{ width: width + 'px', height: width + 'px' }"
    >
      <slot></slot>
    </div>
    <div class="w-full"><slot name="caption"></slot></div>
  </div>
</template>

<script>
export default {
  name: "OnCircularProgress",
  props: {
    width: {
      type: Number,
      default: 120,
    },
    strokeWidth: {
      type: Number,
      default: 7,
    },
    progress: {
      type: Number,
      default: 75,
    },
    stroke: {
      type: String,
      default: "tomato",
    },
    fill: {
      type: String,
      default: "transparent",
    },
    gradient: {
      type: Boolean,
      default: false,
    },
    gradientPosition: {
      type: Array,
      default: () => [],
    },
    from: {
      type: String,
      default: "from-primary-500",
    },
    to: {
      type: String,
      default: "to-primary-700",
    },
  },
  data: () => ({
    circle: null,
  }),
  computed: {
    radius() {
      return this.width / 2 - this.strokeWidth * 2;
    },
    circumference() {
      return this.radius * 2 * Math.PI;
    },
  },
  mounted() {
    this.circle = this.$refs.progress_ring; // document.querySelector('circle')

    this.circle.style.strokeDasharray = `${this.circumference} ${this.circumference}`;
    this.circle.style.strokeDashoffset = `${this.circumference}`;

    this.setProgress(this.progress);
  },
  methods: {
    setProgress(percent) {
      const offset = this.circumference - (percent / 100) * this.circumference;
      this.circle.style.strokeDashoffset = offset;
    },
  },
};
</script>

<style  scoped>
/* .progress-ring__bg {
  transform: rotate(0);
}
.progress-ring__circle {
  transition: 0.35s stroke-dashoffset;

  transform: rotate(-90deg);
  transform-origin: 50% 50%;
}

div.absolute {
  pointer-events: none;
} */
</style>
