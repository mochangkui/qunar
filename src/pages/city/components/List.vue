<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title">当前城市</div>
        <div class="button-list">
          <div class="button-box">
            <div class="button">{{this.currentCity}}</div>
          </div>
        </div>
      </div>
      <!-- 热门城市 -->
      <div class="area">
        <div class="title">热门城市</div>
        <div class="button-list">
          <div class="button-box" v-for="item of hotCities" :key="item.id" @click="handleCityClick(item.name)">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <!-- 城市列表 -->
      <div class="area" v-for="(item, key) of cities" :key="key" :ref="key">
        <div class="title">{{key}}</div>
        <div class="item-list">
          <div class="item" v-for="innerItem of item" :key="innerItem.id" @click="handleCityClick(innerItem.name)">
            {{innerItem.name}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import Bscroll from 'better-scroll'
import { mapState } from 'vuex'
export default {
  name: 'CityList',
  props: {
    cities: {
      type: Object,
      default: () => {
        return {}
      }
    },
    hotCities: {
      type: Array,
      default: () => {
        return []
      }
    },
    letter: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleCityClick (city) {
      // dispatch（派遣）
      this.$store.dispatch('changeCity', city)
      this.$router.push('/')
    }
  },
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element, 100)
      }
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  }
}
</script>

<style type="text/css" lang="stylus" scoped>
  .border-topbottom
    &:before
      border-color: #ccc
    &:after
      border-color: #ccc
  .border-bottom
    &:before
      border-color: #ccc
  .list
    overflow: hidden
    position: absolute
    top: 1.58rem
    right: 0
    bottom: 0
    left: 0
    .title
      line-height: .54rem
      background: #eee
      padding-left: .2rem
      color: #666
    .button-list
      overflow: hidden
      padding: .1rem .6rem .1rem .1rem
      .button-box
        float: left
        width: 33.33%
        .button
          margin: .1rem
          padding: .1rem 0
          text-align: center
          border: .02rem solid #ccc
          border-radius: .06rem
    .item-list
      .item
        line-height: .76rem
        padding-left: .2rem
</style>
