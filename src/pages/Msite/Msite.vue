<template>
  <section class="msite">
    <!--首页头部-->
    <HeaderTop :title="address.name">
      <router-link class="header_search" slot="left" to="/search">
        <i class="iconfont icon-sousuo"></i>
      </router-link>
      <router-link class="header_login" slot="right" :to="userInfo._id ? '/userinfo' : '/login'">
        <span class="header_login_text" v-if="!userInfo._id">登录|注册</span>
        <span class="header_login_text" v-else>
          <i class="iconfont icon-icon_geren"></i>
        </span>
      </router-link>
    </HeaderTop>
    <!--首页导航-->
    <nav class="msite_nav">
      <div class="swiper-container" v-if="categorys.length">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(items, index) in categorysArr" :key="index">
            <a href="javascript:" class="link_to_food" v-for="(item2, index) in items" :key="index">
              <div class="food_container">
                <img :src="baseImages+item2.image_url">
              </div>
              <span>{{ item2.title }}</span>
            </a>
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
      <img src="./images/msite_back.svg" alt="back" v-else>
    </nav>
    <!--首页附近商家-->
    <div class="msite_shop_list">
      <div class="shop_header">
        <i class="iconfont icon-xuanxiang"></i>
        <span class="shop_header_title">附近商家</span>
      </div>
      <ShopList></ShopList>
    </div>
  </section>
</template>

<script>
// eslint-disable-next-line
import { mapState } from "vuex";
// eslint-disable-next-line
import Swiper from "swiper";
// eslint-disable-next-line
import "swiper/dist/css/swiper.min.css";
// eslint-disable-next-line

// eslint-disable-next-line
import HeaderTop from "../../components/HeaderTop/HeaderTop";

// eslint-disable-next-line
import ShopList from "../../components/ShopList/ShopList";

export default {
  data() {
    return {
      baseImages: "https://fuss10.elemecdn.com/"
    };
  },
  components: {
    HeaderTop,
    ShopList
  },
  computed: {
    ...mapState(["address", "categorys", "userInfo"]),

    // 根据categorys一维数组生成2维数组, 最大数为8
    categorysArr() {
      const { categorys } = this;
      // 准备两个数组
      const arr = [];
      let minArr = [];
      // 遍历数组
      categorys.forEach(c => {
        // 如果小数组已满, 那么就新创建一个小数组
        if (minArr.length === 8) {
          minArr = [];
        }
        // 如果大数组为空, 那么将小数组加到大数组中
        if (minArr.length === 0) {
          arr.push(minArr);
        }
        minArr.push(c);
      });
      return arr;
    }
  },
  watch: {
    categorys(value) {
      // 页面完成立即调用
      this.$nextTick(() => {
        // eslint-disable-next-line
        new Swiper(".swiper-container", {
          loop: true, // 循环模式选项
          pagination: {
            el: ".swiper-pagination"
          }
        });
      });
    }
  },
  mounted() {
    this.$store.dispatch("getCategorys");
    this.$store.dispatch("getShops");
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl'
.msite // 首页
  width: 100%
  overflow: hidden
  .msite_nav
    bottom-border-1px(#e4e4e4)
    margin-top: 45px
    height: 200px
    background: #fff
    .swiper-container
      width: 100%
      height: 100%
      .swiper-wrapper
        width: 100%
        height: 100%
        .swiper-slide
          display: flex
          justify-content: center
          align-items: flex-start
          flex-wrap: wrap
          .link_to_food
            width: 25%
            .food_container
              display: block
              width: 100%
              text-align: center
              padding-bottom: 10px
              font-size: 0
              img
                display: inline-block
                width: 50px
                height: 50px
            span
              display: block
              width: 100%
              text-align: center
              font-size: 13px
              color: #666
      .swiper-pagination
        >span.swiper-pagination-bullet-active
          background: #02a774
  .msite_shop_list
    top-border-1px(#e4e4e4)
    margin-top: 10px
    background: #fff
    .shop_header
      padding: 10px 10px 0
      .shop_icon
        margin-left: 5px
        color: #999
      .shop_header_title
        color: #999
        font-size: 14px
        line-height: 20px
</style>
