
import Vue from 'vue'

const requireComponent = require.context('./', false, /\.vue$/) // 找到components文件夹下以.vue命名的文件
const requireAll = context => context.keys().map(context)
const comMap = {}
requireAll(requireComponent).forEach(item => {
  if (item.default.name) {
    comMap[item.default.name] = item.default
  }
})
export default function (comArr) {
  let filteredComMap = {}
  for (let comName in comMap) {
    if (comArr.includes(comName)) {
      filteredComMap[comName] = comMap[comName]

      Vue.component(comName, comMap[comName])
    }
  }
  return filteredComMap
}
