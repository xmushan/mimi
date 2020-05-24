<template>
    <div class="product">
        <product-param :title = 'phoneMsg.name'>
            <template v-slot:btn>
                <button class="btn" @click="buy">立即购买</button>
            </template>
        </product-param>
        <div class="bigImg">
            <div class="name">{{phoneMsg.name}}</div>
            <div class="dec">{{phoneMsg.subtitle}}</div>
            <div class="dec2">
                <span>全球首款双频</span>
                <span>骁龙845</span>
                <span>AI 变焦双摄</span>
                <span>红外人脸识别</span>
            </div>
            <div class="price">
                <span>￥{{phoneMsg.price}}</span>
                <span>￥{{phoneMsg.price + 500}}</span>
            </div>
        </div>
        <div class="img-1"></div>
        <div class="img-2"></div>
        <!-- 轮播图 -->
        <div class="swrper-container">
            <swiper ref="mySwiper" :options="swiperOptions">
                <swiper-slide><img src="/imgs/product/gallery-2.png" alt=""></swiper-slide>
                <swiper-slide><img src="/imgs/product/gallery-3.png" alt=""></swiper-slide>
                <swiper-slide><img src="/imgs/product/gallery-4.png" alt=""></swiper-slide>
                <swiper-slide><img src="/imgs/product/gallery-5.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="/imgs/product/gallery-6.jpg" alt=""></swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
        <div class="video">
            <h2>60帧超慢动作摄影<br/>慢慢回味每一瞬间的精彩</h2>
            <p>后置960帧电影般超慢动作视频，将眨眼间的美妙展现得淋漓尽致！<br/>更能AI 精准分析视频内容，15个场景智能匹配背景音效。</p>
            <div class="video-bg" @click="showslide = true"></div>
            <div class="video-box">
                <div class="overlay" v-if="showslide"></div>
                <div class="video" :class="{'slide':showslide}">
                    <span class="icon-close" @click="closeVideo"></span>
                    <video ref="video" src="/imgs/product/video.mp4" muted autoplay controls="controls"></video>
                </div>
            </div>
        </div>
        <service-bar class="service"></service-bar>
    </div>
</template>
<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import productParam from "../components/ProductParam";
import ServiceBar from '../components/ServiceBar'
export default {
  data() {
    return {
      swiperOptions: {
        autoplay: true,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        slidesPerView: 3,
        spaceBetween: 30,
        freeMode: true
      },
      showslide: false,
      phoneMsg: {} // 商品信息
    };
  },
  components: {
    Swiper,
    SwiperSlide,
    productParam,
    ServiceBar
  },
  directives: {
    swiper: directive
  },
  mounted() {
      this.getProductInfo();
  },
  methods: {
    closeVideo() {
      this.showslide = false;
      this.$refs.video.pause();
    },
    getProductInfo() {
      let id = this.$route.params.id;
      this.axios.get(`/products/${id}`).then(res => {
        console.log(res);
        this.phoneMsg = res;
      })
    },
    buy() {
        let id = this.$route.params.id
        this.$router.push(`/detail/${id}`)
    }
  }
};
</script>
<style lang="scss" scoped>
@import "./../assets/scss/config.scss";
@import "./../assets/scss/mixin.scss";
.product {
  .bigImg {
    @include bgImg(100%, 718px, "/imgs/product/product-bg-1.png", cover);
    text-align: center;
    color: $colorB;
    .name {
      margin-top: 55px;
      font-size: 80px;
      font-weight: bolder;
    }
    .dec {
      font-size: 24px;
      font-weight: 200;
      letter-spacing: 5px;
    }
    .dec2 {
        margin-top: 10px;
      span {
        font-size: 16px;
        margin: 0 10px;
        &:after {
          content: "";
          display: inline-block;
          background-color: #bfab9d;
          width: 1px;
          height: 13px;
          margin-left: 20px;
          vertical-align: middle;
        }
        &:last-child:after {
          display: none;
        }
      }
    }
    .price {
      margin-top: 25px;
      span:first-child {
        font-size: 38px;
        margin-right: 11px;
      }
      span:last-child {
        font-size: 26px;
        text-decoration-line: line-through;
      }
    }
  }
  .img-1 {
    background: url(/imgs/product/product-bg-2.png) no-repeat center;
    height: 480px;
    background-size: 1226px 397px;
  }
  .img-2 {
    background: url(/imgs/product/product-bg-3.png) no-repeat center;
    height: 638px;
    background-size: cover;
  }
  .swrper-container {
    margin: 36px auto 52px;
    img {
      width: 100%;
    }
  }
  .video {
    height: 1044px;
    background-color: #070708;
    margin-bottom: 76px;
    color: #ffffff;
    text-align: center;
    h2 {
      font-size: 60px;
      padding-top: 82px;
      margin-bottom: 47px;
    }
    p {
      font-size: 24px;
      margin-bottom: 58px;
    }
    .video-bg {
      background: url("/imgs/product/gallery-1.png") no-repeat center;
      background-size: cover;
      width: 1226px;
      height: 540px;
      margin: 0 auto 120px;
      cursor: pointer;
    }
    .video-box {
      .overlay {
        @include position(fixed);
        background-color: $colorB;
        opacity: 0.5;
        z-index: 60;
      }
      .video {
        position: fixed;
        top: -50%;
        left: 50%;
        width: 1000px;
        height: 536px;
        transform: translate(-50%, -50%);
        z-index: 70;
        transition: all 0.5s;
        opacity: 0;
        &.slide {
          top: 50%;
          opacity: 1;
        }
        .icon-close {
          position: absolute;
          top: 20px;
          right: 20px;
          @include bgImg(20px, 20px, "/imgs/icon-close.png");
          cursor: pointer;
          z-index: 75;
        }
        video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          outline: none;
        }
      }
    }
  }
  .service{
      background:rgba(243,243,243,1);
  }
}
</style>