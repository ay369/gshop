<template>
  <div id="app">
    <!-- 出口 -->
    <router-view/>
    <FooterGuide v-show="$route.meta.FooterShow"/>
  </div>
</template>

<script>
/* eslint-disable-next-line */
import { mapActions } from "vuex";
/* eslint-disable-next-line */
import FooterGuide from "./components/FooterGuide/FooterGuide";
export default {
  created() {
    this.getAddress();
    this.getUserInfo();
  },
  mounted() {},
  methods: {
    ...mapActions(["getAddress", "getUserInfo"])
  },
  components: {
    FooterGuide
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
#app
  width: 100%
  height: 100%
  background: #f5f5f5
</style>
