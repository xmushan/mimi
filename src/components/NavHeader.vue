<template>
    <div class="header">
        <!-- 顶部导航栏 -->
        <div class="nav-topbar">
            <div class="container">
                <div class="topbar-menu">
                    <a href="#">小米商城</a>
                    <a href="#">MUI</a>
                    <a href="#">云服务</a>
                    <a href="#">金融</a>
                    <a href="#">有品</a>
                    <a href="#">小爱开放平台</a>
                    <a href="#">企业团购</a>
                    <a href="#">资质证照</a>
                    <a href="#">企业团购</a>
                    <a href="#">资质证照</a>
                    <a href="#">协议规则</a>
                    <a href="#">下载app</a>
                    <a href="#">SelectLocation</a>
                </div>
                <div class="topbar-user">
                    <a href="javascript:;" v-if="username" class="username">
                      {{username}}
                      <div class="loginOut" @click="loginOut">退出登录</div>
                    </a>
                    <a href="javascript:;" v-if="username">我的订单</a>
                    <a href="javascript:;" v-if="!username" @click="login">登录</a>
                    <a href="javascript:;" v-if="!username" @click="register">注册</a>
                    <a href="javascript:;" class="my-cart" @click='goCart'><span class="icon-cart"></span>购物车（{{cartCount || 0}}）</a>
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
                  <!-- 小米手机 -->
                    <div class="item-menu">
                        <span>小米手机</span>
                        <div class="children">
                          <ul>
                            <li class="product" v-for="(item,index) in xiaomi" :key="index">
                              <a :href='"/#/product/"+item.id' target="_blank">
                                <div class="pro-img">
                                  <img :src='item.mainImage' alt="">
                                </div>
                                <div class="pro-name">{{item.name}}</div>
                                <div class="pro-price">{{item.price | currency}}</div>
                              </a>
                            </li>
                          </ul>
                        </div>
                    </div>
                    <!-- 红米手机 -->
                    <div class="item-menu">
                        <span>RedMi手机</span>
                        <div class="children">
                          <ul>
                            <li class="product" v-for="(item,index) in redMi" :key="index">
                              <a :href='"/#/product/"+item.id' target="_blank">
                                <div class="pro-img">
                                  <img :src="item.mainImage" alt="">
                                </div>
                                <div class="pro-name">{{item.name}}</div>
                                <div class="pro-price">{{item.price | currency}}</div>
                              </a>
                            </li>
                          </ul>
                        </div>
                    </div>
                    <!-- 电视 -->
                    <div class="item-menu">
                        <span>电视</span>
                        <div class="children">
                          <ul>
                            <li class="product">
                              <a href="#" target="_blank">
                                <div class="pro-img">
                                  <img src="/imgs/nav-img/nav-3-1.jpg" alt="">
                                </div>
                                <div class="pro-name">小米CC9</div>
                                <div class="pro-price">1799元</div>
                              </a>
                            </li>
                            <li class="product">
                              <a href="#" target="_blank">
                                <div class="pro-img">
                                  <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/8729282b199b3ec51e31c1b6b15f3f93.jpg?thumb=1&w=250&h=250&f=webp&q=90" alt="">
                                </div>
                                <div class="pro-name">小米CC9</div>
                                <div class="pro-price">1799元</div>
                              </a>
                            </li>
                            <li class="product">
                              <a href="#" target="_blank">
                                <div class="pro-img">
                                  <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/8729282b199b3ec51e31c1b6b15f3f93.jpg?thumb=1&w=250&h=250&f=webp&q=90" alt="">
                                </div>
                                <div class="pro-name">小米CC9</div>
                                <div class="pro-price">1799元</div>
                              </a>
                            </li>
                            <li class="product">
                              <a href="#" target="_blank">
                                <div class="pro-img">
                                  <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/8729282b199b3ec51e31c1b6b15f3f93.jpg?thumb=1&w=250&h=250&f=webp&q=90" alt="">
                                </div>
                                <div class="pro-name">小米CC9</div>
                                <div class="pro-price">1799元</div>
                              </a>
                            </li>
                            <li class="product">
                              <a href="#" target="_blank">
                                <div class="pro-img">
                                  <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/8729282b199b3ec51e31c1b6b15f3f93.jpg?thumb=1&w=250&h=250&f=webp&q=90" alt="">
                                </div>
                                <div class="pro-name">小米CC9</div>
                                <div class="pro-price">1799元</div>
                              </a>
                            </li>
                            <li class="product">
                              <a href="#" target="_blank">
                                <div class="pro-img">
                                  <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/8729282b199b3ec51e31c1b6b15f3f93.jpg?thumb=1&w=250&h=250&f=webp&q=90" alt="">
                                </div>
                                <div class="pro-name">小米CC9</div>
                                <div class="pro-price">1799元</div>
                              </a>
                            </li>
                          </ul>
                        </div>
                    </div>
                </div>
                <!-- 搜索框 -->
                <div class="header-search">
                  <div class="wrapper">
                    <input type="text" name="keyword">
                    <a href="#"></a>
                  </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: "nav-header",
  data() {
    return {
      xiaomi: [],
      redMi: [],
      TV: [],
      flag: false
    };
  },
  mounted() {
    this.getProductList()
  },
  methods: {
    login() {
      this.$router.push('/login')
    },
    getProductList() {
      this.axios.get('/products',{
        params: {
          pageNum: 1,
          pageSize: 20
        }
      }).then(res => {
          this.xiaomi = res.list.slice(4,10)
          this.redMi = res.list.slice(10,16)
      })
    },
    goCart() {
      //路由跳转  push
      //路由取参数 prams、query
      let islogin = window.sessionStorage.getItem('username')
      if (islogin === null){
        alert('请先登录')
        return
      }
      this.$router.push('/cart')
    },
    register() {
      this.$router.push('/register')
    },
    loginOut() {
      this.$store.state.username= ''
      this.$store.state.cartCount = ''
      window.sessionStorage.clear()
      this.$router.go(0)
    }
  },
  computed: {
    username() {
      //return this.$store.state.username
      return window.sessionStorage.getItem('username')
    },
    cartCount() {
      //return this.$store.state.cartCount
      return window.sessionStorage.getItem('sum')
    }
  },
  //价格格式过滤器
  filters: {
    currency(val) {
      if (!val) {
        return '0.00'
      }
      return '￥' + val.toFixed(2) + '元'
    }
  }
};
</script>
<style lang="scss">
@import "./../assets/scss/config.scss";
@import "./../assets/scss/mixin.scss";
.header {
  .nav-topbar {
    height: 39px;
    line-height: 39px;
    background-color: $colorB;
    .container {
      @include flex();
      a {

        display: inline-block;
        color: #b0b0b0;
        margin-right: 17px;
        &:last-child{
          margin: 0;
        }
        &:hover{
          color:$colorG;
        }
      }
      .topbar-user {
        .username{
          position: relative;
          &:hover{
            .loginOut{
              display: block;
            }
          }
          .loginOut{
            display: none;
            position: absolute;
            width: 50px;
            line-height: 30px;
            background-color: #333333;
            cursor: pointer;
            z-index: 50;
            &:hover{
              color: none;
            }
          }
        }
        .my-cart {
          width: 110px;
          background-color: $colorA;
          text-align: center;
          color: $colorG;
          .icon-cart {
            @include bgImg(16px, 12px, "/imgs/icon-cart-checked.png");
            margin-right: 4px;
          }
        }
      }
    }
  }
  .nav-header {
    .container {
      position: relative;
      @include flex();
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
            @include bgImg(55px, 55px, "/imgs/mi-logo.png");
            transition: all 0.5s;
          }
          &:after {
            content: "";
            @include bgImg(55px, 55px, "/imgs/mi-home.png");
          }
          &:hover:before {
            margin-left: -55px;
            transition: all 0.5s;
          }
        }
      }
      .header-menu {
        display: inline-block;
        width: 643px;
        padding-left: 209px;
        .item-menu {
          display: inline-block;
          color: $colorB;
          font-size: $fontI;
          font-weight: bold;
          margin-right: 20px;
          span {
            cursor: pointer;
          }
          &:hover {
            color: $colorA;
            .children {
              height: 220px;
              opacity: 1;
            }
          }
          .children {
            position: absolute;
            height: 0px;
            opacity: 0;
            overflow: hidden;
            top: 112px;
            left: 0;
            width: 1226px;
            border: 1px solid $colorH;
            background-color: white;
            box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.11);
            transition: all 0.5s;
            z-index: 15;
            ul{
              display: flex;
            }
            .product {
              position: relative;
              display: flex;
              width: 16.6%;
              height: 220px;
              font-size: 12px;
              line-height: 12px;
              text-align: center;
              .pro-img {
                height: 137px;
              }
              .pro-name {
                font-weight: bold;
                margin-top: 19px;
                margin-bottom: 8px;
                color: $colorB;
              }
              .pro-price {
                color: $colorA;
              }
              a {
                display: inline-block;
                margin: 0 auto;
              }
              img {
                width: auto;
                height: 111px;
                margin-top: 26px;
              }
              &::before {
                position: absolute;
                content: "";
                top: 28px;
                right: 0;
                width: 1px;
                height: 100px;
                border-left: 1px solid $colorF;
              }
              &:last-child::before{
                display: none;
              }
            }
          }
        }
      }
      .header-search {
        width: 319px;
        .wrapper {
          height: 50px;
          border: 1px solid #e0e0e0;
          display: flex;
          align-items: center;
          input {
            border: none;
            border-right: 1px solid #e0e0e0;
            height: 50px;
            width: 275px;
            text-indent: 10px;
          }
          a {
            @include bgImg(18px, 18px, "/imgs/icon-search.png");
            margin-left: 10px;
          }
        }
      }
    }
  }
}
</style>