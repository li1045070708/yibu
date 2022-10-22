<template>
  <div class="panel">
    <el-button type="primary">{{ time }}</el-button>

    <el-button type="primary" @click="keshi">我是按钮</el-button>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      time: 0,
      total:0,
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
    function addXMLRequestCallback(callback) {
      var oldSend, i;
      if (XMLHttpRequest.callbacks) {
        // we've already overridden send() so just add the callback
        XMLHttpRequest.callbacks.push(callback);
      } else {
        // create a callback queue
        XMLHttpRequest.callbacks = [callback];
        // store the native send()
        oldSend = XMLHttpRequest.prototype.send;
        // override the native send()
        XMLHttpRequest.prototype.send = function() {
          // process the callback queue
          // the xhr instance is passed into each callback but seems pretty useless
          // you can't tell what its destination is or call abort() without an error
          // so only really good for logging that a request has happened
          // I could be wrong, I hope so...
          // EDIT: I suppose you could override the onreadystatechange handler though
          for (i = 0; i < XMLHttpRequest.callbacks.length; i++) {
            XMLHttpRequest.callbacks[i](this);
          }
          // call the native send()
          oldSend.apply(this, arguments);
        };
      }
    }

    // e.g.
    addXMLRequestCallback(function(xhr) {
      let that = this;
      xhr.addEventListener("load", function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
          // console.log(xhr,'999999');
          if(xhr.responseURL.indexOf('course/getCourseDetail')!=-1) {
            const res = JSON.parse(xhr.responseText).data
            console.log(res,'res');

            if(res.standardTime){
              // this.total = Number(res.standardTime)>1?Number(res.standardTime)*4500000:Number(res.standardTime)*90000
              that.total=Number(res.standardTime)*4500000
              console.log(that.total);
              window.sessionStorage.setItem('total', Number(res.standardTime)*4500000)
              
            }

          }
          // console.log(xhr.responseURL);
        }
      });
    });
  },

  methods: {
    btn() {
      let lastTime = document.getElementsByClassName("rightContent");
      console.log(
        document.getElementsByClassName("rightContent")[0].childNodes
      );
      // console.log(document.getElementsByClassName("rightContent"));
      // console.log(this.$(".rightContent").children('div').eq(3).children('span').eq(3));
      let temp = this.$(".rightContent")
        .children("div")
        .eq(3);

      console.log(
        temp
          .find("span")
          .eq(2)
          .html(),
        "temp"
      );
      this.time = temp
        .find("span")
        .eq(2)
        .html();
    },
    keshi(){
      console.log(this.time.length)
      var length = this.time.length-2;
      // this.total=Number(this.time.substr(0,length))*4500000
      // this.total=Number(this.time.substr(0,length))*4500000
      this.total=window.sessionStorage.getItem('total');
      console.log(this.total,"total")
      this.time ="已完成"+window.sessionStorage.getItem('total')/4500000
      window.sessionStorage.setItem('videoTotalDuration', this.total)
      window.sessionStorage.setItem('currentCoursePlayTime', this.total)
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
  top: 40px;
  right: 10px;
  z-index: 9999;
}
</style>
