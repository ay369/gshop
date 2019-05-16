// 通过mutations间接更新state过个数据
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS
} from './mutations-types'
import { reqAddress, reqFoodCategorys, reqShops } from '../api'

export default {
  // 异步获取地址
  async getAddress ({ commit, state }) {
    // 发送异步ajax请求
    const geohash = state.latitude + ',' + state.longitude
    const result = await reqAddress(geohash)
    // 提交一个mutations
    if (result.code === 0) {
      const address = result.data
      commit(RECEIVE_ADDRESS, { address })
    }
  },
  async getACategorys ({ commit }) {
    // 发送异步ajax请求
    const result = await reqFoodCategorys()
    // 提交一个mutations
    if (result.code === 0) {
      const categorys = result.data
      commit(RECEIVE_CATEGORYS, { categorys })
    }
  },
  async getShops ({ commit, state }) {
    // 发送异步ajax请求
    const { longitude, latitude } = state
    const result = await reqShops(longitude, latitude)
    // 提交一个mutations
    if (result.code === 0) {
      const shops = result.data
      commit(RECEIVE_SHOPS, { shops })
    }
  }
}