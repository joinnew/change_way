<template>
<div class="search-word">
  <div class="list">
    <a class="item" v-for="(tag, index) in tags" :key="index" :href="'../search/main?tag='+tag">
      {{ tag }}
    </a>
  </div>
  <i class="iconfont icon-shuaxin" @click="change"></i>
</div>
</template>
<script>
export default {
  data() {
    return {
      page: 1,
      tags: []
    };
  },
  computed: {
    allTags () {
      var allTags = this.$store.state.searchWords
      this.tags = allTags.slice(0, 6)
      return allTags
    }
    // console.log(this.tags);
  },
  methods: {
    change () {
      var len = this.allTags.length;
      this.page++;
      var page = this.page;
      if (len >= page*6) {
        this.tags = this.allTags.slice((page-1)*6, page*6)
      } else {
        if (len - page*6 <= -6) {
          this.page = 1;
          page = 1;
          this.tags = this.allTags.slice((page-1)*6, page*6)
        } else {
          this.tags = this.allTags.slice((page-1)*6, len-1)          
        }
      }
    },
    search (tag) {

    }
  }
};
</script>
<style scoped lang="stylus">
.search-word 
  position relative
  margin-top 58.23rpx
  .list 
    width 600rpx
    white-space pre-wrap
    .item 
      display inline-block
      padding 18.02rpx 40.2rpx
      margin-right 31.88rpx
      border 1rpx solid #edeef0
      border-radius 30rpx
      margin-bottom 31.88rpx
  i
    font-size 48rpx
    position absolute
    top 0
    right 0
    color #1b88ee
</style>
