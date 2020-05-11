<template>
    <div class="header">
        <!-- 顶部导航栏 -->
        <div class="nav-topbar">
            <div class="container">
                <div class="topbar-menu">
                    <a href="#">小米商城</a>
                    <a href="#">MUI</a>
                    <a href="#">云服务</a>
                    <a href="#">协议规则</a>
                </div>
                <div class="topbar-user">
                    <a href="#">登录</a>
                    <a href="#">注册</a>
                    <a href="#" class="my-cart"> <span class="icon-cart"></span> 购物车</a>
                </div>
            </div>
        </div>
        <!-- 导航菜单 -->
        <div class="nav-header">
            <div class="container">
                <!-- 图标 -->
                <div class="header-logo">
                    <a href="/#/index"></a>
                </div>
                <!-- 下拉菜单 -->
                <div class="header-menu">
                    <div class="item-menu">
                        <span>小米手机</span>
                        <div class="children"></div>
                    </div>
                    <div class="item-menu">
                        <span>RedMi手机</span>
                        <div class="children"></div>
                    </div>
                    <div class="item-menu">
                        <span>电视</span>
                        <div class="children"></div>
                    </div>
                </div>
                <!-- 搜索框 -->
                <div class="header-search"></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: "nav-header",
  data() {
    return {};
  }
};
</script>
<style lang="scss">
@import "./../assets/scss/config.scss";
.header {
  .nav-topbar {
    height: 39px;
    line-height: 39px;
    background-color: $colorB;
    .container {
      display: flex;
      justify-content: space-between;
      a {
        display: inline-block;
        color: #b0b0b0;
        margin-right: 17px;
      }
      .topbar-user {
        .my-cart {
          width: 110px;
          background-color: $colorA;
          text-align: center;
          color: $colorG;
          .icon-cart {
            display: inline-block;
            width: 16px;
            height: 12px;
            margin-right: 4px;
            background: url("/imgs/icon-cart-checked.png") no-repeat center;
            background-size: contain;
          }
        }
      }
    }
  }
  .nav-header {
    .container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 112px;
      .header-logo {
        display: inline-block;
        width: 55px;
        height: 55px;
        overflow: hidden;
        a {
          display: inline-block;
          width: 110px;
          height: 55px;
          background-color: $colorA;
          &::before {
            content: "";
            display: inline-block;
            width: 55px;
            height: 55px;
            background: url("/imgs/mi-logo.png") no-repeat center;
            background-size: contain;
            transition: all 0.5s;
          }
          &:after {
            content: "";
            display: inline-block;
            width: 55px;
            height: 55px;
            background: url("/imgs/mi-home.png") no-repeat center;
            background-size: contain;
          }
          &:hover:before {
            margin-left: -55px;
            transition: all 0.5s;
          }
        }
      }
      .header-menu{
          display: inline-block;
          padding-left: 209px;
          .item-menu{
              display: inline-block;
              color: $colorB;
              font-size: $fontI;
              font-weight: bold;
              line-height: 112px;
              span{
                  cursor: pointer;
              }
              &:hover{

              }
          }
      }
    }
  }
}
</style>