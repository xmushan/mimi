<template>
    <div class="footer">
        <div class="footer-logo">
            <img src="/imgs/logo-footer.png" alt="">
            <p>小米商城</p>
        </div>
        <div class="footer-link">
            <a href="#" target="_blank">徐木杉</a><span>|</span>
            <a href="#" target="_blank">Vue项目</a><span>|</span>
            <a href="#" target="_blank">GitHub</a><span>|</span>
            <a href="https://github.com/Xmushan" target="_blank">https://github.com/Xmushan</a>
        </div>
        <div class="copyright">Copyright ©2019 <span class="domain">mi.futurefe.com</span> All Rights Reserved.</div>
    </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
@import "./../assets/scss/config.scss";
@import "./../assets/scss/mixin.scss";
.footer{
    height: 234px;
    border-top: 4px solid $colorA;
    background-color: $colorB;
    font-size: 16px;
    text-align: center;
    .footer-logo{
        margin-top: 46px;
        margin-bottom: 31px;
        p{
            color: $colorD;
        }
        img{
            width: 53px;
            height: 36px;
            margin-bottom: 13px;
        }
    }
    .footer-link{
        a{
            color: $colorD;
            display: inline-block;
        }
        span{
            color: white;
            margin: 0 10px;
        }
    }
    .copyright{
        color: $colorD;
        letter-spacing: 1px;
        margin-bottom: 13px;
        .domain{
            color: $colorA;
        }
    }
}
</style>