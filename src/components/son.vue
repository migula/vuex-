<template>
    <div class="son-container">
        <input type="button" value="修改值" @click="addNum">
    </div>
</template>
<script>
export default {
    methods: {
          addNum(){
              this.$store.commit('increment')
          }
    },
}
</script>
<style>
.son-container{
    background-color: yellowgreen;
    width: 200px;
    height: 200px;
}
</style>
