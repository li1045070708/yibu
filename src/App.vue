<template>
  <div class="panel">
    <el-button type="primary">我是按钮</el-button>
  </div>
</template>

<script>

export default {
  name: "app",
  data() {
    return {};
  },
  created() {
    // this.test()
  },
  mounted() {
    //删除所有的显示框,防止重复显示内容
     let a = this.$(".rightContent")
    console.log(a,"元素集合");

   
  },
  methods: {}
};
</script>

<style lang="less">
.panel {
  width: 100px;
  height: 100px;
  background-color: rgb(145, 184, 241);
  position: fixed;
  top: 10px;
  right: 10px;
  z-index: 9999;
}
</style>
