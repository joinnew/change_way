<template>
  <div class="history-wrapper">
    <div class="tempHistory-wrapper" v-if="tempHistory.length">
      <div class="tempItem" v-for="content in tempHistory" v-if="content.text" :key="content.isbn">
        <p v-if="content.name" @click="toMessage(content.isbn)">
          <i class="iconfont icon-shuben"></i>
          {{ content.name }}
        </p>
        <p v-if="content.author" @click="toMessage(content.isbn)">
          <i class="iconfont icon-iconfontyonghu"></i>
          {{ content.author }}
        </p>
      </div>
      <two-card v-if="!tempHistory[0].text" :books="tempHistory"></two-card>
      <!-- <p>{{ tempHistory[0] }}</p> -->
    </div>
    <div class="history-wrapper" v-if="history.length && !state && !tempHistory.length">
      <h5>搜索记录</h5>
      <div class="item" v-for="content in history" :key="content" @click="toSearch(content)">
        <i class="iconfont icon-sousuo"></i>
        {{content}}
      </div>
      <span @click="clear">清除历史记录</span>
    </div> 
    <p v-else>{{ state }}</p>
  </div>
</template>
<script>
import TwoCard from '@/common/TwoCard'
export default {
  computed: {
    tempHistory () {
      return this.$store.state.tempHistory
    },
    history () {
      return this.$store.state.searchHistory
    },
    state () {
      return this.$store.state.tempHistoryState
    }
  },
  components: {
    TwoCard
  },
  methods: {
    toMessage (isbn) {
      if (isbn) {
        wx.navigateTo({
          url: `../desc/main?isbn=${isbn}`
        })
      } else {
        return ;
      }
    },
    clear () {
      this.$store.commit('CLEAR_SEARCH_HISTORY')
    },
    toSearch (content) {
      wx.navigateTo({
        url: `../search/main?tag=${content}`
      })
    }
  }
}
</script>
<style scoped lang="stylus">
.container 
  margin-top 40rpx
  margin-bottom 10rpx
  font-size 32rpx
  p
    padding-top 30rpx
    text-align center
  .history-wrapper 
    margin-top 30rpx
    .item 
      margin-top 30rpx
    i 
      padding-right 14rpx
      font-size 44rpx
      display inline-block
    span 
      color #1b88ee
      text-align center
      display block
      margin-top 30rpx
</style>

