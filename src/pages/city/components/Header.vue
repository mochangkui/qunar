<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <div class="iconfont back-icon">&#xe624;</div>
    </router-link>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'CityHeader'
}
</script>

<style type="text/css" lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    overflow: hidden
    position: relative
    height: .86rem
    line-height: .86rem
    text-align: center
    color: #fff
    background: $bgColor
    font-size: .32rem
    .back-icon
      position: absolute
      top: 0
      left: 0
      width: .64rem
      text-align: center
      font-size: .4rem
      color: #fff
</style>
