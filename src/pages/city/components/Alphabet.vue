<template>
  <ul class="list">
   <li class="item"
    v-for="letter of letters"
    :key="letter"
    :ref="letter"
    v-on:click="handleLetterClick"
    @touchstart.prevent="handleTouchStart"
    @touchmove="handleTouchMove"
    @touchend="handleTouchEnd"
    >{{letter}}</li>
  </ul>
</template>

<script type="text/javascript">
export default {
  name: 'CityAlphabet',
  props: {
    cities: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.$props.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    handleLetterClick (e) {
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearInterval(this.timer)
        }
        this.timer = setInterval(() => {
          const touchY = e.touches[0].clientY - 79 // 79为整个头部的高度
          const index = Math.floor((touchY - this.startY) / 22)
          if (index >= 0 && index < 26) {
            this.$emit('change', this.letters[index])
          }
        }, 20)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
}
</script>

<style type="text/css" lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .list
    display: flex
    flex-direction: column
    justify-content: center
    position: absolute
    top: 1.58rem
    right: 0
    bottom: 0
    width: .4rem
    .item
      line-height: .4rem
      text-align: center
      color: $bgColor
</style>
