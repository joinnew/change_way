<template>
  <div class="hot-wrapper">
      <card :books="hotRecom" :readNum="true"></card>
  </div>
</template>
<script>
import Card from '@/common/Card'
export default { 
  computed: {
    hotRecom () {
     return this.$store.state.hotRecom.slice(0, 3);
    }
  },
  components: {
    Card
  },
  updated () {
    wx.hideToast()
  }
}
</script>
<style scoped> 

</style>
