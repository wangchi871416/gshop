<template>
  <div id="app">
    <router-view/>
    <footer-guide></footer-guide>
  </div>
</template>

<script>
import FooterGuide from '@/components/FooterGuide/FooterGuide'

export default {
  components: {
    FooterGuide
  },
  name: 'App'
}
</script>

<style scoped type="text/stylus" lang="stylus" rel="stylesheet/stylus">
  .app
    width 100%
    height 100%
    background #f5f5f5
</style>
