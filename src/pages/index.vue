<template>
    <div class="index">
        <div class="container">
            <!-- 轮播图组件 -->
            <div class="swiper-box">
              <!-- 左侧导航菜单 -->
              <div class="nav-menu">
                <ul class="menu-wrapper">
                  <li class="menu-item">
                    <a href="#">手机 电话卡</a>
                    <div class="children">
                      <ul v-for="(item,index) in menuList" :key="index">
                        <li v-for="(itemChildren,index) in item" :key="index">
                          <a :href="itemChildren?'/#/product' + itemChildren.id : ''">
                            <img :src="itemChildren ? itemChildren.img : '/imgs/item-box-1.png'" alt="">
                            {{itemChildren ? itemChildren.name : '小米9'}}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li class="menu-item">
                    <a href="#">电视盒子</a>
                    <div class="children"></div>
                  </li>
                  <li class="menu-item">
                    <a href="#">笔记本 显示器 平板</a>
                    <div class="children"></div>
                  </li>
                  <li class="menu-item">
                    <a href="#">家电 插线板</a>
                    <div class="children"></div>
                  </li>
                  <li class="menu-item">
                    <a href="#">出行 穿戴</a>
                    <div class="children"></div>
                  </li>
                  <li class="menu-item">
                    <a href="#">智能 路由器</a>
                    <div class="children"></div>
                  </li>
                  <li class="menu-item">
                    <a href="#">电源 配件</a>
                    <div class="children"></div>
                  </li>
                  <li class="menu-item">
                    <a href="#">健康 儿童</a>
                    <div class="children"></div>
                  </li>
                  <li class="menu-item">
                    <a href="#">耳机 音响</a>
                    <div class="children"></div>
                  </li>
                  <li class="menu-item">
                    <a href="#">生活 箱包</a>
                    <div class="children"></div>
                  </li>
                </ul>
              </div>
                <swiper ref="mySwiper" :options="swiperOptions">
                    <swiper-slide v-for="(item,index) in slideList" :key="index">
                        <a :href='"/#/product"+item.id'><img :src=item.img alt=""></a>
                    </swiper-slide>
                    <!-- 分页 -->
                    <div class="swiper-pagination" slot="pagination"></div>
                    <!-- 导航按钮 -->
                    <div class="swiper-button-prev" slot="button-prev"></div>
                    <div class="swiper-button-next" slot="button-next"></div>
                </swiper>
            </div>
            <!-- 广告位 -->
            <div class="ads-box">
              <a :href="'/#/product/'+item.id" v-for="(item,index) in ads" :key="index">
                <img v-lazy="item.img" alt="">
              </a>
            </div>
            <div class="banner">
              <a href="/#/product/30">
              <img v-lazy="'/imgs/banner-1.png'" alt=""></a>
            </div>
        </div>
            <!-- 产品盒子 -->
        <div class="product-box">
          <div class="container">
              <h2>手机</h2>
              <div class="wrapper">
                <!-- 左侧图片 -->
                <div class="banner-left">
                  <a href="/#/product/345"><img v-lazy="'/imgs/mix-alpha.jpg'" alt=""></a>
                </div>
                <!-- 右侧产品栏 -->
                <div class="list-box">
                  <div class="list">
                    <div class="item" v-for="(item,index) in phoneList" :key='index'>
                      <div class="item-img">
                        <img v-lazy="item.mainImage" alt="">
                      </div>
                      <div class="item-info">
                        <h3>{{item.name}}</h3>
                        <p>{{item.subtitle}}</p>
                        <p class="price" @click="addCart(item.id)">{{item.price}}元起</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
            </div>
        
        <service-bar></service-bar>
        <!-- 对话框组件 -->
        <modal 
        title= "提示" 
        sureText= '查看购物车' 
        btnType= '1'
        modalType= 'middle'
        :showModal= showModal
        v-on:submit= "gotoCart"
        v-on:cancel= 'showModal=false'
        >
        <template v-slot:body>
          <p>商品添加成功</p>
        </template>
        </modal>
        <!-- 左侧固定菜单栏 -->
        <div class="fix-menu">
          <a href="javascript:;"> <img src="/imgs/手机.svg" alt=""><span>手机APP</span></a>
          <a href="javascript:;"> <img src="/imgs/用户.svg" alt=""><span>个人中心</span></a>
          <a href="javascript:;"> <img src="/imgs/维修.svg" alt=""><span>售后服务</span></a>
          <a href="javascript:;"> <img src="/imgs/客服.svg" alt=""><span>人工客服</span></a>
          <a href="javascript:;"> <img src="/imgs/购物车.svg" alt=""><span>购物车</span></a>
          <a href="#" class="back-top" v-show="topflag"> <img src="/imgs/返回顶部.svg" alt=""><span>返回顶部</span></a>
        </div>
    </div>
</template>
<script>
import ServiceBar from "../components/ServiceBar";
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  data() {
    return {
      swiperOptions: {
        autoplay: true,
        loop: true,
        cubeEffect: {
          slideShadows: true,
          shadow: true,
          shadowOffset: 100,
          shadowScale: 0.6
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      // 轮播循环图片
      slideList: [
        {
          id: "42",
          img: "/imgs/slider/slide-1.jpg"
        },
        {
          id: "45",
          img: "/imgs/slider/slide-2.jpg"
        },
        {
          id: "46",
          img: "/imgs/slider/slide-3.jpg"
        },
        {
          id: "",
          img: "/imgs/slider/slide-4.jpg"
        },
        {
          id: "",
          img: "/imgs/slider/slide-5.jpg"
        }
      ],
      // 左侧菜单导航图片
      menuList: [
        [
          {
            id: 30,
            img: "/imgs/item-box-1.png",
            name: "小米CC9"
          },
          {
            id: 31,
            img: "/imgs/item-box-2.png",
            name: "小米8青春版"
          },
          {
            id: 32,
            img: "/imgs/item-box-3.jpg",
            name: "Redmi K20 Pro"
          },
          {
            id: 33,
            img: "/imgs/item-box-4.jpg",
            name: "移动4G专区"
          }
        ],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
      ],
      // 广告位图片
      ads: [
        {
          id: 33,
          img: "/imgs/ads/ads-1.png"
        },
        {
          id: 48,
          img: "/imgs/ads/ads-2.jpg"
        },
        {
          id: 45,
          img: "/imgs/ads/ads-3.png"
        },
        {
          id: 47,
          img: "/imgs/ads/ads-4.jpg"
        }
      ],
      phoneList: [],
      showModal: false,
      topflag: false
    };
  },
  components: {
    Swiper,
    SwiperSlide,
    ServiceBar
  },
  directive: {
    swiper: directive
  },
  mounted() {
    this.init();
    this.ScreenScroll();
  },
  methods: {
    init() {
      this.axios
        .get("/products", {
          params: {
            categoryId: 100012,
            pageSize: 15
          }
        })
        .then(res => {
          this.phoneList = res.list.slice(6, 14);
        });
    },
    // 点击添加购物车
    addCart(id) {
      this.showModal = true;
      // this.axios.post('/carts',{
      //   productId:id,
      //   selected: true
      // }).then(res => {}).catch(() => {
      //   this.showModal = true
      // })
    },
    // 查看购物车按钮
    gotoCart() {
      this.$router.push("/cart");
    },
    // scroll 屏幕滚动
    ScreenScroll() {
      window.addEventListener("scroll", () => {
        if (document.documentElement.scrollTop >= 1150) {
          this.topflag = true;
        } else {
          this.topflag = false;
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
@import "./../assets/scss/config.scss";
@import "./../assets/scss/mixin.scss";
.index {
  .swiper-box {
    .swiper-container {
      height: 451px;
      img {
        width: 100%;
      }
      .swiper-button-prev {
        left: 274px;
      }
    }
    .nav-menu {
      position: absolute;
      box-sizing: border-box;
      z-index: 9;
      width: 264px;
      height: 451px;
      padding: 17px 0;
      background-color: rgba(105, 101, 101, 0.6);
      .menu-wrapper {
        .menu-item {
          height: 42px;
          line-height: 42px;
          a {
            position: relative;
            display: block;
            font-size: $fontI;
            color: $colorG;
            padding-left: 30px;
            &::after {
              content: "";
              position: absolute;
              right: 30px;
              top: 14px;
              @include bgImg(10px, 15px, "/imgs/icon-arrow.png");
            }
          }
          .children {
            position: absolute;
            display: none;
            width: 962px;
            height: 451px;
            background-color: $colorG;
            top: 0;
            left: 264px;
            border: 1px solid $colorH;
            ul {
              display: flex;
              justify-content: space-between;
              height: 75px;
              li {
                height: 75px;
                line-height: 75px;
                flex: 1;
                padding-left: 23px;
              }
              a {
                color: $colorB;
              }
              img {
                width: 42px;
                height: 35px;
                vertical-align: middle;
                margin-right: 15px;
              }
            }
          }
          &:hover {
            background-color: $colorA;
            .children {
              display: block;
            }
          }
        }
      }
    }
  }
  .ads-box {
    margin-top: 14px;
    margin-bottom: 31px;
    @include flex();
    a {
      width: 296px;
      height: 167px;
    }
  }
  .banner {
    margin-bottom: 50px;
  }
  .product-box {
    background-color: $colorJ;
    padding: 30px 0 50px;
    h2 {
      font-size: $fontF;
      height: 40px;
      line-height: 21px;
      color: $colorB;
    }
    .wrapper {
      display: flex;
      justify-content: space-between;
      .banner-left {
        img {
          width: 224px;
          height: 614px;
        }
        transition: all 0.3s linear;
        &:hover {
          z-index: 2;
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
          transform: translate3d(0, -2px, 0);
        }
      }
      .list-box {
        .list {
          @include flex();
          flex-wrap: wrap;
          width: 986px;
          box-sizing: border-box;
        }
        .item {
          transition: all 0.1s linear;
          padding: 10px 0;
          width: 234px;
          height: 280px;
          background-color: $colorG;
          text-align: center;
          margin-bottom: 14px;
          .item-img {
            img {
              height: 195px;
            }
          }
          .item-info {
            h3 {
              margin: 0 10px 2px;
              font-size: $fontJ;
              color: $colorB;
              line-height: $fontJ;
              font-weight: bold;
            }
            p {
              color: $colorD;
              line-height: 13px;
              margin: 6px auto 13px;
            }
            .price {
              color: $colorA;
              font-size: $fontJ;
              cursor: pointer;
              &::after {
                @include bgImg(22px, 22px, "/imgs/icon-cart-hover.png");
                content: "";
                margin-left: 5px;
                vertical-align: middle;
              }
            }
          }
          &:hover {
            z-index: 2;
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
            transform: translate3d(0, -2px, 0);
          }
        }
      }
    }
  }
  .fix-menu {
    position: fixed;
    display: flex;
    flex-direction: column;
    right: 0;
    top: 100px;
    a {
      display: inline-block;
      box-sizing: border-box;
      width: 82px;
      height: 90px;
      background-color: #fff;
      border: 1px solid #f5f5f5;
      text-align: center;
      padding-top: 20px;
      color: $colorD;
      cursor: default;
      img {
        width: 30px;
        height: 30px;
      }
      span {
        display: block;
        margin-top: 15px;
        font-size: 14px;
      }
      &:hover {
        color: $colorA;
      }
    }
    .back-top {
      margin-top: 15px;
    }
  }
}
</style>