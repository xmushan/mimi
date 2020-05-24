<template>
    <div class="price-dec">
        <div class="container">
            <div class="title">
                价格说明
            </div>
            <div class="dec">
                <p> <strong>划线价：</strong>商品显示的划横线价格为参考价，
                该价格可能是品牌专柜标价，商品吊牌价或由品牌供应供应商提供的
                正品零售价（如厂商指导价、建议零售等）或在小米商城/小米有品/
                小米官方旗舰店曾经展示过的销售价；由于地区，时间的差异性和市
                场行情波动，品牌专柜标价、商品吊牌价等坑会与您购物的展示的不一致，
                该价格仅供您参考。
                </p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {

        }
    }
}
</script>
<style lang="scss" scoped>
.price-dec{
    height: 340px;
    background:rgba(243,243,243,1);
    .title{
        line-height: 70px;
        color: #333333;
        font-size: 24px;
    }
    .dec{
        box-sizing: border-box;
        padding: 70px;
        margin-top: 20px;
        height: 189px;
        background-color: #ffffff;
        p{
            color: #999999;
            font-size: 14px;
            letter-spacing: 1px;
            strong{
                color: #333333;
            }
        }
    }
}
</style>