<template>
  <div id="app">
   
   <h1>counter</h1>
   <button @click="addNum">{{$store.state.count}}</button>
   <son></son>
  </div>
</template>

<script>
// 导入组件
import son from './components/son.vue'


export default {
  name: 'app',
  // 注册组件
  components:{
    son
  },
  methods: {
    addNum(){
      this.$store.commit('increment')
    }
  },
}
</script>

<style>

</style>
