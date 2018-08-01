<template>
  <div class="more-wrapper">
    <div class = "item" v-for="book in books" :key="book.isbn" @click="toMessage(book.isbn)">
      <image :src=book.imgSrc />
      <div class="word-wrapper">
        <h4>{{ book.name }}</h4>
        <h5 class="authorColor">{{ book.author }}</h5>
        <p>{{ book.desc }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    books: Array
  },
  methods: {
    toMessage(isbn) {
      wx.navigateTo({
        url: `../desc/main?isbn=${isbn}`
      })
    }
  }
}
</script>
<style scoped lang="stylus">
.item 
  margin-top 49.02rpx
  display flex
  image
    height 166.368rpx
    width 116.4576rpx
  .word-wrapper 
    margin-left 30.5008rpx
    display inline-block
    flex 1
  p 
    display -webkit-box
    overflow hidden
    text-overflow ellipsis
    word-break break-all
    -webkit-box-orient vertical
    -webkit-line-clamp 2
    color #858c96
    line-height 36rpx
  h4 
    font-size 28rpx
    margin-bottom 18rpx
  h5 
    margin-bottom 22rpx
</style>
