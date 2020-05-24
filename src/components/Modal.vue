<template>
    <transition name="slide">
        <div class="modal" v-show="showModal">
        <!-- 遮罩层 -->
        <div class="mask"></div>
        <!-- 消息框 -->
        <div class="modal-dialog">
            <div class="modal-header">
                <span>{{title}}</span>
                <a href="javascript:;" class="icon-close" @click="$emit('cancel')"></a>
            </div>
            <div class="modal-body">
                <slot name="body"></slot>
            </div>
            <div class="modal-footer">
                <a v-if="btnType==1" href="javascript:;" class="btn" @click='$emit("submit")'>{{sureText || 确定}}</a>
                <a v-if="btnType==2" href="javascript:;" class="btn btn-defult" @click='$emit("cancel")'>取消</a>
                <div class="btn-group" v-if="btnType==3">
                    <a href="javascript:;" class="btn">确定</a>
                    <a href="javascript:;" class="btn btn-defult" @click="$emit('cancel')">取消</a>
                </div>
            </div>
        </div>
        </div>
    </transition>
</template>
<script>
export default {
    name: 'modal',
    props: {
        // 弹框类型 ： 小:small，中:middle，大:large 表单:form
        modalType: {
            type: String,
            default: 'form'
        },
        // 弹框标题
        title: String,
        // 按钮类型 ：1：确定 2：取消 3：都有
        btnType: String,
        sureText: {
            type:String,
            default: '确定'
        },
        cancelText: {
            type: String,
            default: '确定'
        },
        showModal: Boolean
    },
    data () {
        return {}
    }
}
</script>
<style lang="scss" scoped>
@import "./../assets/scss/config.scss";
@import "./../assets/scss/mixin.scss";
.modal{
    @include position(fixed);
    z-index: 100;
    transition: all .3s;
    .mask{
        @include position(fixed);
        background-color: $colorI;
        opacity: .5;
    }
    .modal-dialog{
        @include position(absolute,40%,50%,660px,auto);
        background-color: $colorG;
        transform: translate(-50%,-50%);
        .modal-header{
            height: 60px;
            background-color: $colorJ;
            padding: 0 25px;
            line-height: 60px;
            font-size: $fontI;
            .icon-close{
                @include positionImg(absolute,23px,25px,14px,14px,'/imgs/icon-close.png');
                &:hover{
                    transform: scale(1.3);
                    transition: all .3s linear;
                }
            }
        }
        .modal-body{
            padding: 42px 40px 54px;
            font-size: 14px;
        }
        .modal-footer{
            height: 82px;
            line-height: 82px;
            text-align: center;
            background-color: $colorJ;
        }
    }
    &.slide-enter-active{
        top: 0;
    }
    &.slide-enter{
        top: -100%;
    }
    &.slide-leave-active{
        top: -100%;
    }
}

</style>