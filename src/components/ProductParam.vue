<template>
    <div class="top" :class="{'is_fixed':isfixed}">
        <div class="container">
            <div class="left">
                <span class="name">{{title}}</span>
                <span>|</span>
                <span class="name2">{{title}}</span>
                <span>|</span>
                <span class="name2">{{title}}</span>
            </div>
            <div class="right">
                <span class="dec">概述</span>
                <span>|</span>
                <span class="dec">参数</span>
                <span>|</span>
                <span class="dec">用户评价</span>
                <slot name="btn"></slot>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  props: {
    title: String
  },
  data() {
    return {
      isfixed: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.initHeight);
    
  },
  methods: {
    initHeight() {
      let scrollTop = window.pageXOffset || document.documentElement.scrollTop;
      this.isfixed = scrollTop > 152 ? true : false;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "./../assets/scss/config.scss";
@import "./../assets/scss/mixin.scss";
.is_fixed {
  position: fixed;
  top: 0;
  width: 100%;
}
.top {
  height: 71px;
  line-height: 71px;
  background-color: #ffffff;
  border-top: 1px solid #e5e5e5;
  -webkit-box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.07);
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.07);
  z-index: 50;
  .container {
    display: flex;
    justify-content: space-between;
    .left {
      .name {
        font-size: 18px;
        color: #333333;
        margin-right: 8px;
      }
      .name2 {
        font-size: 12px;
        color: #666666;
        margin: 0 8px;
      }
    }
    .right {
      .dec {
        font-size: 14px;
        color: #666666;
        margin: 0 11px;
      }
    }
  }
}
</style>