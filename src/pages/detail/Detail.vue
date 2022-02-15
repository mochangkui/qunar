<template>
  <div>
    <detail-header></detail-header>
    <detail-banner :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs"></detail-banner>
    <detail-list :categoryList="categoryList"></detail-list>
    <div class="box"></div>
  </div>
</template>

<script type="text/javascript">
import axios from 'axios'
import DetailHeader from './components/Header'
import DetailBanner from './components/Banner'
import DetailList from './components/List'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      categoryList: []
    }
  },
  methods: {
    getDetailInfo () {
      axios.get('/api/detail.json', {
        params: {
          id: this.$route.params.id
        }
      }).then(this.getDetailInfoSucc)
    },
    getDetailInfoSucc (res) {
      if (res.data.ret && res.data.data) {
        this.sightName = res.data.data.sightName
        this.bannerImg = res.data.data.bannerImg
        this.gallaryImgs = res.data.data.gallaryImgs
        this.categoryList = res.data.data.categoryList
      }
    }
  },
  mounted () {
    this.getDetailInfo()
  }
}
</script>

<style type="text/css" lang="stylus" scoped>
  .box {
    height 12rem;
  }
</style>
