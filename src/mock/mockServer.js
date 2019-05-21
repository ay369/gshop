/*
使用mockjs提供mock数据接口
*/
// 引入mockjs
import Mock from 'mockjs';
// 引入data数据;
import data from './data.json';

// 放回goods接口
Mock.mock('/goods', { code: 0, data: data.goods });
// 放回ratings接口
Mock.mock('/ratings', { code: 0, data: data.ratings });
// 放回info接口
Mock.mock('/info', { code: 0, data: data.info });
