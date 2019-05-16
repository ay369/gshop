// 直接更新state的数据
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS
} from './mutations-types'
export default {
  [RECEIVE_ADDRESS] (state, { address }) {
    state.address = address
  },
  [RECEIVE_CATEGORYS] (state, { category }) {
    state.category = category
  },
  [RECEIVE_SHOPS] (state, { shops }) {
    state.shops = shops
  }
}
