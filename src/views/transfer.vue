<template>
  <div>
    <el-transfer
      ref="test"
      v-model="value"
      :filter-method="filterMethod"
      :data="data"
      filterable
      target-order="push"
      filter-placeholder="请输入城市拼音"
      @left-check-change="handleChange"
    />
    <div class="button_box">
      <el-button
        type="primary"
        @click="handleConfirm">
        确定
      </el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Transfer',
  data () {
    const generateData = _ => {
      const data = []
      const cities = []
      const pinyin = []
      for (let i = 1; i < 6; i++) {
        cities.push(`组件${i}`)
        pinyin.push(`Com${i}`)
      }
      cities.forEach((city, index) => {
        data.push({
          label: city,
          key: pinyin[index],
          pinyin: pinyin[index]
        })
      })
      return data
    }
    return {
      data: generateData(),
      value: [],
      filterMethod (query, item) {
        return item.pinyin.indexOf(query) > -1
      }
    }
  },
  methods: {
    handleConfirm () {
      sessionStorage.setItem('arr', JSON.stringify(this.value))
      this.$router.push('/about')
      console.log(this.$refs.test)
    },
    handleChange (a, b) {
      // this.value.push(b)
    }
  }
}
</script>
<style>
.button_box{
  display:flex;
  margin:50px auto;
  justify-content: center;
}
</style>
