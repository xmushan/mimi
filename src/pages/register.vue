<template>
    <div class="login-footer">
        <div class="wrapper">
            <div class="container">
                <div class="logo"><a href="/#/index" target="_blank"><img src="/imgs/mi-logo.png" alt=""></a></div>
                <div class="title">注册小米账号</div>
                <div class="input">
                    <span>请输入账户名：</span>
                    <input type="text" placeholder="请输入账户名" v-model="username">
                    <span class="tip">成功注册账号后，无法修改密码</span>
                    <span>请输入密码：</span>
                    <input type="text" placeholder="请输入密码" v-model="password">
                    <span>请输入邮箱：</span>
                    <input type="text" placeholder="请输入邮箱" v-model="email">
                </div>
                <div class="btn" @click="register">立即注册</div>
                <div class="dec"><input type="checkbox" v-model="flag"> 已阅读并同意：小米 <strong>用户协议</strong>和 <strong>隐私政策</strong></div>
            </div>
            <login-footer class="footer"></login-footer>
        </div>
    </div>
</template>
<script>
import LoginFooter from '../components/LoginFooter'
export default {
    data () {
        return {
            username: '',
            password: '',
            email:'',
            flag: false
        }
    },
    components: {
        LoginFooter
    },
    methods: {
        register() {
            let {username,password,email} = this
            if (username === '' || password === ''){
                alert('不可为空')
                return 
            }
            if (this.flag === false){
                alert('请先阅读用户协议和隐私政策')
                return
            }
            this.axios.post('/user/register',{
                username,
                password,
                email
            }).then(res => {
                alert('注册成功')
                this.$router.push('/#/login')
            }).catch(() => {
                alert('账户名或邮箱已存在')
            })
        }
    }
}
</script>
<style lang="scss" scoped>
@import "./../assets/scss/config.scss";
@import "./../assets/scss/mixin.scss";
.login-footer{
    .wrapper{
        position: fixed;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        background-color: #f5f5f5;
        padding-top: 50px;
        overflow-y:auto;
    }
    .container{
        width: 850px;
        height: 550px;
        background-color: #ffffff;
        text-align: center;
        .logo{
            display: inline-block;
            width: 50px;
            height: 50px;
            background-color: $colorA;
        }
        .title{
            margin-top: 46px;
            color: #333333;
            font-size: 30px;
            letter-spacing: 5px;
        }
        .input{
            margin: 0 auto;
            margin-top: 42px;
            width: 332px;
            text-align: left;
            .tip{
                font-size: 14px;
                color: #999999;
            }
            span{
                display: block;
                font-size: 14px;
                color: #333333;
                margin: 5px 0;
            }
            input{
                width: 100%;
                height: 42px;
                text-indent: 5px;
                font-size: 14px;
                border: 1px solid #E5E5E5;
            }

        }
        .btn{
            margin-top: 30px;
            width: 332px;
            height: 42px;
            color: #f5f5f5;
            background-color: $colorA;
            font-size: 14px;
            line-height: 42px;
        }
        .dec{
            margin-top: 25px;
            font-size: 14px;
            color: #999999;
            strong{
                color: black;
                cursor: pointer;
            }
        }
    }
    .footer{
        margin-bottom: 0;
        margin-top: 80px;

    }
}
</style>