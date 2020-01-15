<template>
  <div :class="$style.wrapper">
    <section :class="$style.hero">
      <Header />
      <canvas
        :class="$style.canvas"
        ref="canvas"
      />
    </section>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  name: 'home',
  components: {
    Header,
  },
  data: () => ({ toggle: true }),
  mounted() {
    this.resize()
    window.resize = this.resize
    this.loop()
  },
  methods: {
    noise() {
      const ctx = this.$refs.canvas.getContext('2d')
      const { width, height } = this.$refs.canvas
      const idata = ctx.createImageData(width, height)
      const buffer = new Uint32Array(idata.data.buffer)
      const { length } = buffer
      let iterator = 0

      for (; iterator < length;) {
        // eslint-disable-next-line no-bitwise
        buffer[iterator += 1] = ((55 * Math.random()) | 0) << 24
      }

      ctx.putImageData(idata, 0, 0)
    },
    loop() {
      this.toggle = !this.toggle
      if (this.toggle) {
        requestAnimationFrame(this.loop)
        return
      }
      this.noise()
      requestAnimationFrame(this.loop)
    },
    resize() {
      this.$refs.canvas.width = window.innerWidth
      this.$refs.canvas.height = window.innerHeight
    },
  },
}
</script>

<style lang="scss" module>
.hero {
  height: 100vh;
  background-color: $red;
}

.canvas {
  height: 100%;
  width: 100%;
}
</style>
