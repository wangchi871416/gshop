<template>
  <div>
    <footer class="footer_guide border-1px">
      <span class="guide_item" @click="goto('/msite')" :class="{on: $route.path=='/msite'}">
        <span class="item_icon">
          <i class="iconfont icon-_waimai"></i>
        </span>
        <span>外卖</span>
      </span>

      <span class="guide_item" @click="goto('/search')" :class="{on: $route.path=='/search'}">
        <span class="item_icon">
          <i class="iconfont icon-sousuo"></i>
        </span>
        <span>搜索</span>
      </span>

      <span class="guide_item" @click="goto('/order')" :class="{on: $route.path=='/order'}">
        <span class="item_icon">
          <i class="iconfont icon-dingdan"></i>
        </span>
        <span>订单</span>
      </span>

      <span class="guide_item" @click="goto('/profile')" :class="{on: $route.path=='/profile'}">
        <span class="item_icon">
          <i class="iconfont icon-wode"></i>
        </span>
        <span>我的</span>
      </span>

    </footer>
  </div>
</template>

<script>
export default {
  methods: {
    goto (path) {
      this.$router.replace(path)
    }
  }
}
</script>

<style scoped type="text/stylus" lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .footer_guide  //footer
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 50px
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      color #999999
      &.on
        color #02a774
      span
        font-size 12px
        margin-top 2px
        margin-bottom 2px
        .iconfont
          font-size 22px
</style>
