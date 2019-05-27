// 通过mutations间接更新state过个数据
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO,
  RESULT_USER_INFO,
  RECEIVE_GOODS,
  RECEIVE_INFO,
  RECEIVE_RATINGS
} from './mutations-types';
import {
  reqAddress,
  reqFoodCategorys,
  reqShops,
  reqUserInfo,
  reqLogout,
  reqShopInfo,
  reqShopGoods,
  reqShopRatings
} from '../api';

export default {
  // 异步获取地址
  async getAddress({ commit, state }) {
    // 发送异步ajax请求
    const geohash = state.latitude + ',' + state.longitude;
    const result = await reqAddress(geohash);
    // 提交一个mutation
    if (result.code === 0) {
      const address = result.data;
      commit(RECEIVE_ADDRESS, { address });
    }
  },
  // 异步获取食品商家地址
  async getCategorys({ commit }) {
    // 发送异步ajax请求
    const result = await reqFoodCategorys();
    // 提交一个mutations
    if (result.code === 0) {
      const categorys = result.data;
      commit(RECEIVE_CATEGORYS, { categorys });
    }
  },
  // 异步获取商家列表
  async getShops({ commit, state }) {
    // 发送异步ajax请求
    const { longitude, latitude } = state;
    const result = await reqShops(longitude, latitude);
    // 提交一个mutations
    if (result.code === 0) {
      const shops = result.data;
      commit(RECEIVE_SHOPS, { shops });
    }
  },
  // 同步记录用户信息\
  recordUser({ commit }, userInfo) {
    commit(RECEIVE_USER_INFO, { userInfo });
  },
  // 异步获取用户信息
  async getUserInfo({ commit }) {
    const result = await reqUserInfo();
    if (result.code === 0) {
      const userInfo = result.data;
      commit(RECEIVE_USER_INFO, { userInfo });
    }
  },
  // 异步登出
  async logout() {
    const result = await reqLogout();
    if (result.code === 0) {
      commit(RESULT_USER_INFO);
    }
  },
  // 异步获取商家信息 reqShopInfo,
  async getShopInfo({ commit }) {
    const result = await reqShopInfo();
    if (result.code === 0) {
      const info = result.data;
      commit(RECEIVE_INFO, { info });
    }
  },
  // 异步获取商家评价 reqShopGoods,
  async getShopGoods({ commit }, callback) {
    const result = await reqShopGoods();
    if (result.code === 0) {
      const goods = result.data;
      commit(RECEIVE_GOODS, { goods });
      // 数据更新, 通知一下组件
      callback && callback();
    }
  },
  // 异步获取商家列表 reqShopRatings
  async getShopRatings({ commit }) {
    const result = await reqShopRatings();
    if (result.code === 0) {
      const ratings = result.data;
      commit(RECEIVE_RATINGS, { ratings });
    }
  }
};
