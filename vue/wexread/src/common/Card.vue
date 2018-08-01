<template>
  <div class="list">
    <div class = "item" :class="name === 'special' ? 'special' : ''" v-for="book in books" :key="book.isbn" @click="toMessage(book.isbn)">
      <image :src=book.imgSrc />
      <h4>{{ book.name }}</h4>
      <p class="author">{{ book.author }}</p>
      <p v-if="readNum">{{ book.readNum }}人同时在读</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    books: Object,
    readNum: {
      type: Boolean,
      default: false
    },
    name: String
  },
  methods: {
    toMessage (isbn) {
      wx.navigateTo({
        url: `../desc/main?isbn=${isbn}`
      })
    }
  }
};
</script>
<style scoped lang="stylus">
.list 
  display flex
  flex-wrap wrap
  justify-content space-between
  align-items center
  margin-top 49.9104rpx;
  line-height 36rpx
  .item 
    width 30%
    &.special
      width 20%
      & image 
        height 203.8008rpx
    image 
      width 100%
      height 286.9848rpx
    p 
      color #858c96
    h4 
      max-height 72rpx
      overflow hidden
      color #212832
    .author
      color #49505a
      white-space nowrap
      overflow hidden
      text-overflow ellipsis
</style>
