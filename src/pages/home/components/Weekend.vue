<template>
  <div>
    <div class="weekend-title">周末去哪儿</div>
    <ul>
      <li class="item" v-for="item of weekendList" :key="item.id">
        <div class="item-img-box">
          <img class="item-img" :src="item.imgUrl">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'HomeWeekend',
  props: {
    weekendList: {
      type: Array
    }
  }
}
</script>

<style type="text/css" lang="stylus" scoped>
  .weekend-title
    line-height: .8rem
    background: #ccc
    text-indent: .2rem
  .item-img-box
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 37.1%
    .item-img
      width: 100%
  .item-info
    padding: .1rem
    .item-title
      line-height: .54rem
      font-size: .32rem
    .item-desc
      line-height: .4rem
      color: #ccc
</style>
