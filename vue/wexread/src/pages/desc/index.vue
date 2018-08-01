<template>
  <div class="container">
    <div class="book-wrapper">
      <div class="img">
        <image :src=book.imgSrc />      
      </div>
      <h3>{{ book.name }}</h3>
      <h4>{{ book.author }}</h4>
      <div class="element" :class="{'active': more}">
        <p>{{ book.desc }}</p>      
      </div>
      <span @click="showMore" :class="{'hidden': more}">更多</span>
    </div>
    <comment :isbn="isbn"></comment>
  </div>
</template>
<script>
import Comment from '@/components/Comment'
export default {
  data () {
    return {
      item: {},
      book: {},
      more: false
    }
  },
  components: {
    Comment
  },
  computed: {
    allBooks () {
      return this.$store.state.allBooks
    }
  },
  created () {
    this.$store.dispatch('searchSomething', '')
    this.$store.dispatch('addCommentList')
  },
  mounted () {
    var isbn = this.$root.$mp.query.isbn
    this.book = this.allBooks.find(book => book.isbn === isbn)
  },
  methods: {
    showMore () {
      this.more = true
    }
  },
  onShow () {
    this.more = false
  }
}
</script>
<style scoped lang="stylus">
.container 
  text-align center
  background-color #eee
  margin 0
  .book-wrapper 
    padding 0 34.66rpx
    background-color #fff
    .img
      height 360.464rpx
      width 249.552rpx
      margin 26.3416rpx auto 44.3648rpx
      image 
        width 100%
        height 100%
    h3
      font-size 32rpx
      margin-bottom 37.4328rpx
    h4 
      margin-bottom 52.6832rpx
    .element 
      display -webkit-box
      overflow hidden
      text-overflow ellipsis
      word-break break-all
      -webkit-box-orient vertical
      -webkit-line-clamp 2
      line-height 36rpx
      max-height 100rpx
      transition max-height .3s
    .element.active 
      display inline-block
      max-height 600rpx
      text-align left
    .hidden 
      display none
</style>