<template>
  <div class="container">
    <div @click="toSearch">
      <search-wrapper :disabled="true"></search-wrapper>
    </div>
    <search-words></search-words>
    <div class="hot-wrapper">
      <header>
        <h3>热门推荐
          <a href="../more/main">查看全部</a>
        </h3>
      </header>
      <hot-recom></hot-recom>
    </div>
    <div class="special-wrapper">
      <h3>小编精选</h3>
      <special></special>
    </div>
  </div>
</template>
<script>
import SearchWrapper from '@/components/SearchWrapper'
import HotRecom from '@/components/HotRecom'
import SearchWords from '@/components/SearchWords'
import Special from '@/components/Special'

export default {
  components: {
    SearchWords,
    HotRecom,
    SearchWrapper,
    Special
  },
  created () {
    // 在这里先把首页需要的数据取到
    wx.showToast({
      title: '加载中',
      icon: 'loading'
    })
    this.$store.dispatch("addSearchWords")
    this.$store.dispatch("addHotRecom")
    this.$store.dispatch("addSpecial")
    wx.hideToast()
  },
  methods: {
    toSearch () {
      wx.navigateTo({url: '../search/main'})
    }
  }
}
</script>
<style lang="stylus" scoped>
h3 
  font-size 32rpx
a 
  float right
  color #1b88ee
  font-size 28rpx
.special-wrapper 
  margin-top 74.8656rpx
  
</style>
