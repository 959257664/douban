import Mock from 'mockjs'

// 获取个人信息
Mock.mock('api/getInfo', 'get', {
  'code': 'success',
  'name': 'douban User',
  'sign': 'this is my vue demo',
  'avatar': 'http://pbdc1ab8x.bkt.clouddn.com/user.jpg'
})

export default {}
