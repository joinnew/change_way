<template>
  <div class="container">
    <two-card :books = "allBooks" name="more"></two-card>
  </div>
</template>
<script>
import TwoCard from '@/common/TwoCard'
export default {
  data () {
    return {
      allBooks: [],
      id: ''
    }
  },
  components: {
    TwoCard
    },
  mounted () {
    this.allBooks = this.$store.state.allBooks;
  }
}
</script>
<style>

</style>

