<template>
  <div class="search-wrapper">
    <i class="iconfont icon-sousuo"></i>
    <input type="text" :placeholder="tag || '搜索'" :disabled="disabled" v-model="inputContent" focus="focus" @input="tempsearch" @change="search"/>
  </div>
</template>
<script>
export default {
  props: {
    focus: {
      type: Boolean,
      default: false
    },
    tag: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      inputContent: ''
    }
  },
  methods: {
    tempsearch () {
      this.$store.dispatch('searchSomething', this.inputContent)        
    },
    search () {
      this.$store.dispatch('addSearchHistory', this.inputContent)
    }
  },
  watch: {
    tag (newVal, oldVal) {
      this.$store.dispatch('addSearchHistory', this.tag)      
      this.$store.dispatch('searchSomething', {'tag':this.tag})
    }
  },
  onShow () {
    this.inputContent = ''
    this.$store.dispatch('searchSomething', this.inputContent)
    this.tag = ''
  }

}
</script>
<style scoped lang="stylus">
.search-wrapper 
  box-shadow 0 0 50rpx #ebedf3
  padding-left 92rpx
  font-size 30rpx
  margin-top 8rpx
  position relative
  i 
    position absolute
    top 28rpx
    left 30rpx
    font-size 44rpx
  input 
    height 110rpx
</style>
