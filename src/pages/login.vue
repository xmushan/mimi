<template>
    <div class="login">
        <div class="container">
            <a href="/#/index"><img src="/imgs/login-logo.png" alt=""></a>
        </div>
        <div class="wrapper">
            <div class="container">
                <div class="login-form">
                    <div class="choose">
                        <span class="userID">账号登录</span>
                        <span class="line"></span>
                        <span class="erweima">扫码登录</span>
                    </div>
                    <div class="input">
                        <input type="text" placeholder="邮箱/手机号码/小米ID" v-model="username">
                        <input type="password" placeholder="密码" v-model="password">
                    </div>
                    <div class="btn" @click="login">登录</div>
                    <div class="footer">
                        <span class="left" @click='register'>手机短信登录/注册</span>
                        <div class="right">
                            <span class="reg" @click='register'>立即注册</span>
                            <span class="line">|</span>
                            <span class="forget">忘记密码？</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <login-footer></login-footer>
    </div>
</template>
<script>
import LoginFooter from "../components/LoginFooter";
export default {
  data() {
    return {
      username: "",
      password: "",
      userId: ""
    };
  },
  components: {
    LoginFooter
  },
  methods: {
    login() {
      let { username, password } = this;
      if (username === "" || password === "") {
        alert("用户名或密码不能为空");
        return;
      }
      this.axios
        .post("/user/login", {
          username,
          password
        })
        .then(res => {
          //this.$cookie.set('userId',res.id,{expire: '1M'})
          //this.$store.dispatch("saveUserName", res.username);
          window.sessionStorage.setItem('username',res.username)
          this.$router.push("/#/index");
        })
        this.axios.get('/carts/products/sum').then(res => {
          console.log(res)
          window.sessionStorage.setItem('sum',res)
        })
    },
    register() {
      this.$router.push("/register");
    }
  }
};
</script>
<style lang="scss" scoped>
@import "./../assets/scss/config.scss";
@import "./../assets/scss/mixin.scss";
.login {
  .container {
    height: 112px;
    img {
      width: auto;
      height: 100%;
    }
  }
  .wrapper {
    background: url("/imgs/login-bg.jpg") no-repeat center;
    .container {
      position: relative;
      height: 576px;
      .login-form {
        box-sizing: border-box;
        position: absolute;
        bottom: 29px;
        right: 0;
        padding-left: 31px;
        padding-right: 31px;
        width: 410px;
        height: 510px;
        background-color: #ffffff;
        text-align: center;
        .choose {
          margin-top: 40px;
          font-size: 24px;
          color: $colorC;
          cursor: pointer;
          .userID {
            font-weight: bold;
            color: $colorA;
          }
          .line {
            display: inline-block;
            margin-right: 35px;
            margin-left: 35px;
            width: 2px;
            height: 35px;
            background-color: #cccccc;
            vertical-align: bottom;
          }
        }
        .input {
          margin-top: 20px;
          input {
            width: 348px;
            height: 50px;
            border: 1px solid rgba(229, 229, 229, 1);
            margin: 20px 0;
            text-indent: 10px;
          }
        }
        .btn {
          width: 348px;
          height: 50px;
          background-color: $colorA;
          color: $colorG;
          font-size: 16px;
          font-weight: bold;
          line-height: 50px;
        }
        .footer {
          display: flex;
          justify-content: space-between;
          margin-top: 10px;
          font-size: 14px;
          .left {
            font-weight: bold;
            color: $colorA;
            cursor: pointer;
          }
          .right {
            color: $colorE;
            cursor: pointer;
            .reg {
              &:hover {
                color: $colorA;
              }
            }
            .line {
              margin: 0 10px;
            }
            .forget {
              &:hover {
                color: $colorA;
              }
            }
          }
        }
      }
    }
  }
}
</style>