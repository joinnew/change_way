<template>
  <div class="comment-wrapper">
    <div class="comment-item" v-if="noComment">
      <header>
        精彩点评 · {{ theCommentList.allNum }}
        <span>{{ theCommentList.allStar }}分</span>
      </header>
      <div class="content" v-for="comment in theCommentList.comments" :key="comment.name">
        <div class="img">
          <!-- <image :src=comment.imgSrc /> -->
        </div>
        <span>{{ comment.name }}</span>点评此书
        <p class="element" :class="{'active': more}">{{ comment.content }}</p>
        <span @click="showMore" :class="{'hidden': more}">更多</span>
        <p class="time">
          {{ comment.data }} {{ comment.time }}
        </p>
      </div>
    </div>
    <div v-else>
      暂无评论
    </div>
    <div class="btn" @click="toChapter">阅读</div>
  </div>
</template>
<script>
export default {
  props: {
    isbn: String
  },
  data () {
    return {
      more: false,
      noComment: false
    }
  },
  computed: {
    commentList() {
      return this.$store.state.commentList;
    },
    theCommentList() {
      const theComment = this.commentList.find(comment => comment.isbn === this.isbn)
      if (theComment) {
        this.noComment = true;
      }
      return theComment
    }
  },
  methods: {
    showMore () {
      this.more = true;
    },
    toChapter () {
      wx.navigateTo({
        url: '../chapter/main'
      })
    }
  }
};
</script>
<style scoped lang="stylus">
.comment-wrapper 
  padding 40rpx 34.66rpx 0 34.66rpx
  margin-top 40rpx
  background-color #fff
  .element 
    max-height 60rpx
    display -webkit-box
    overflow hidden
    text-overflow ellipsis
    word-break break-all
    -webkit-box-orient vertical
    -webkit-line-clamp 2
    transition max-height .3s
    &.active 
      max-height 400rpx
      display inline-block
      text-align left
  .hidden 
    display none
  .btn 
    position fixed
    bottom 0
    left 0
    right 0
    background-color #39a9ff
    text-align center
    color #fff
    font-size 32rpx
    line-height 106.7528rpx
</style>

