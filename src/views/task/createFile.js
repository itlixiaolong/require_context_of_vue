const fs = require('fs')
const path = require('path')
let formType1 = `
<el-radio-group v-model="value1">
    <el-radio label="线上品牌商赞助"></el-radio>
    <el-radio label="线下场地免费"></el-radio>
</el-radio-group>
`
let formType2 = `
<el-checkbox-group v-model="value2">
    <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
    <el-checkbox label="地推活动" name="type"></el-checkbox>
    <el-checkbox label="线下主题活动" name="type"></el-checkbox>
    <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
</el-checkbox-group>
`
let formType3 = `
<el-time-picker placeholder="选择时间" v-model="value3" style="width: 100%;"></el-time-picker>
`
let formType4 = `
<el-date-picker type="date" placeholder="选择日期" v-model="value4" style="width: 100%;"></el-date-picker>
`
let formType5 = `
<el-select v-model="value5" placeholder="请选择活动区域">
    <el-option label="区域一" value="shanghai"></el-option>
    <el-option label="区域二" value="beijing"></el-option>
</el-select>
`
let formType6 = `
<el-input v-model="value6"></el-input>
`
let formTypeArr = [formType1, formType2, formType3, formType4, formType5, formType6]
function createFileList (num) {
  for (let i = 1; i <= num; i++) {
    createFile(i)
  }
}
// 生成从minNum到maxNum的随机数
function randomNum (minNum, maxNum) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * minNum + 1, 10)
    case 2:
      return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10)
    default:
      return 0
  }
}
function createRandomType () {
  let index = randomNum(0, 5)
  return [formTypeArr[index], index + 1]
}

function createContent (index, formType) {
  let content = `
    <template>
      <div>
        <div>Com${index}</div>
        ${formType[0]}
      </div>
    </template>
    
    <script>
    export default {
      name: 'Com${index}',
      data () {
        return {
          value${formType[1]}: ''
        }
      }
    }
    </script>
    
    <style>
    
    </style>
    `
  return content
}

function createFile (index) {
  let fileName = path.resolve(__dirname, `com${index}.vue`)
  let formType = createRandomType()
  let content = createContent(index, formType)
  fs.writeFile(fileName, content, { flag: 'w+' }, err => {
    console.log(err)
  })
}

createFileList(5)
