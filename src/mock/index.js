import Mock from 'mockjs'
const arrlist = []
for (var i = 0; i < 20; i++) {
  arrlist.push({
    src: Mock.Random.dataImage('200x100'),
    money: Mock.mock('@integer(60, 100)'),
    nums: Mock.mock('@integer(0, 20)'),
    tit: Mock.mock('@csentence(5)'),
    content: Mock.mock('@csentence(11, 20)')
  })
}
export default {
  arrlist
}
