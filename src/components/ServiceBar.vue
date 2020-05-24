<template>
    <div class="service">
        <div class="container">
            <ul>
                <li>
                    <span class="icon-setting"></span>预约维修服务
                </li>
                <li>
                    <span class="icon-7day"></span>7天无理由退换货
                </li>
                <li>
                    <span class="icon-15day"></span>15天免费换货
                </li>
                <li>
                    <span class="icon-post"></span>满99元包邮
                </li>
                <li>
                    <span class="icon-sell"></span>520余家售后网点
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name: 'service-bar',
    data () {
        return {}
    }
}
</script>

<style lang="scss" scoped>
@import "./../assets/scss/config.scss";
@import "./../assets/scss/mixin.scss";
.service{
    padding: 33px 0;
    color: #666666;
    font-size: 16px;
    text-align: center;
    li{
        display: inline-block;
        width: 19.8%;
        border-right: 1px solid $colorH;
        &:last-child{
            border: none;
        }
        span{
            display: inline-block;
            vertical-align: middle;
            width: 20px;
            height: 20px;
            margin-right: 8px;
        }
        .icon-setting{
            @include bgImg(20px,20px,'/imgs/icon-setting.png');
        }
        .icon-7day{
            @include bgImg(20px,20px,'/imgs/icon-7day.png');
        }
        .icon-15day{
            @include bgImg(20px,20px,'/imgs/icon-15day.png');
        }
        .icon-post{
            @include bgImg(20px,20px,'/imgs/icon-post.png');
        }
        .icon-sell{
            @include bgImg(20px,20px,'/imgs/定位.svg');
        }
        
    }
}
</style>