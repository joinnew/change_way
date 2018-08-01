<template>
  <div class="special-wrapper">
    <div class="item" v-for="num in page*2" :key="num">
      <two-card :books="specialList.slice((num-1)*7, (num-1)*7+3)"></two-card>    
      <card :books="specialList.slice((num-1)*7+3, (num-1)*7+7)" name="special"></card>
    </div>
    <span v-if="page === allPage">已经到底啦</span>
  </div>
</template>
<script>
import Card from '@/common/Card'
import TwoCard from '@/common/TwoCard'
export default {
  components: {
    Card,
    TwoCard
  },
  data () {
    return {
      page : 1,
      allPage: 2
    }
  },
  computed: {
    specialList () {
      var specialList = this.$store.state.special;
      return specialList.slice(0, this.page*2*7);
      }
  },
  onReachBottom () {
    this.page++   
    if (this.page > this.allPage) {
      this.page--
      return false;
    } else {
      this.$store.dispatch('addSpecial')
    }
  }
}
</script>
<style lang="stylus">
span 
  display flex
  justify-content center
  margin-top 30rpx
  &:after, &:before 
    content ''
    width 80rpx
    height 3rpx
    background black
    margin-top 16rpx
  &:before 
    margin-right 8rpx
  &:after 
    margin-left 8rpx
</style>
