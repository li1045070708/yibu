<template>
  <div class="panel">
    <el-button type="primary">{{ time }}课时</el-button>

    <el-button type="primary" @click="btn">我是按钮</el-button>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      time: 0
    };
  },
  created() {
    // this.test()
  },
  mounted() {
    //删除所有的显示框,防止重复显示内容
    setTimeout(() => {
      this.btn();
    }, 1500);
  },

  methods: {
    btn() {
      let lastTime = document.getElementsByClassName("rightContent");
      console.log(
        document.getElementsByClassName("rightContent")[0].childNodes
      );
      console.log(document.getElementsByClassName("rightContent"));
      console.log(this.$(".rightContent").children('div').eq(3).children('span').eq(3));
      this.time = 0
    }
  }
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
