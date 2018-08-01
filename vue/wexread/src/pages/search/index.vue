<template>
  <div class="container">
    <search-wrapper :focus="true" :tag="tag"></search-wrapper>
    <search-history></search-history>
  </div>
</template>
<script>
import SearchWrapper from '@/components/SearchWrapper'
import SearchHistory from '@/components/SearchHistory'
export default {
  data () {
    return {
      tag: ''
    }
  },
  components: {
    SearchWrapper,
    SearchHistory
  },
  mounted () {
    this.tag = this.$root.$mp.query.tag
  }
}
</script>
<style>

</style>

