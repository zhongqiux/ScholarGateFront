<template>
    <div>
        <div class="background"></div>
        <div style="opacity: 0.85; color: black;">
            <!-- 登陆页 -->
            <div :class="{ 'flip-front': playFlip }" class="flip-item flip-item-front">
                <div class="register-form" style="margin-top: 200px;">
                    <h2 class="tit" style="font-weight: bold; color: black; font-size: 26px;">登录</h2>
                    <form @submit.prevent="login">
                        <div class="form-group">
                            <label for="username">账号</label>
                            <input v-model="username" type="text" id="username" placeholder="请输入账号" required />
                        </div>
                        <div class="form-group">
                            <label for="pwd">密码</label>
                            <input v-model="pwd" type="pwd" id="pwd" placeholder="请输入密码" required />
                        </div>
                        <div class="tit">
                            <button type="submit">登录</button>
                        </div>
                        <div class="tit" style="margin-top: 20px;">
                            <el-button @click="handleForgotPassword">忘记密码？</el-button>
                            <el-button @click="play">没有账号？立即注册</el-button>
                        </div>
                    </form>
                </div>
            </div>
            <!-- 注册页 -->
            <div :class="{ 'flip-back': playFlip1 }" class="flip-item flip-item-back">
                <div class="register-form">
                    <h2 class="tit" style="font-weight: bold; color: black; font-size: 26px;">注册</h2>
                    <form @submit.prevent="register">
                        <div class="form-group">
                            <label for="nickname">昵称</label>
                            <input v-model="nickname" type="text" id="nickname" required />
                        </div>
                        <div class="form-group">
                            <label for="fullname">真实姓名</label>
                            <input v-model="fullname" type="text" id="fullname" required />
                        </div>
                        <div class="form-group">
                            <label for="email">邮箱</label>
                            <input v-model="email" type="email" id="email" required />
                        </div>
                        <div class="form-group">
                            <label for="password">密码</label>
                            <input v-model="password" type="password" id="password" required />
                        </div>
                        <div class="form-group">
                            <label for="confirmPassword">确认密码</label>
                            <input v-model="confirmPassword" type="password" id="confirmPassword" required />
                        </div>
                        <div class="tit">
                            <button type="submit">注册</button>
                        </div>
                        <el-button @click="play">已有账号？前往登录</el-button>
                    </form>
                </div>
            </div>
            <!-- 忘记密码页 -->
            <div :class="{ 'flip-back': playForget }" class="flip-item flip-item-back">
                <div class="register-form" style="margin-top: 110px;">
                    <h2 class="tit" style="font-weight: bold; color: black; font-size: 26px;">忘记密码</h2>
                    <form @submit.prevent="resetPassword">
                        <div class="form-group">
                            <label for="f_username">用户名</label>
                            <input v-model="f_username" type="text" id="f_username" required />
                        </div>
                        <div class="form-group">
                            <label for="f_email">邮箱</label>
                            <input v-model="f_email" type="email" id="f_email" required />
                        </div>
                        <div class="form-group">
                            <label for="verificationCode">验证码</label>
                            <input v-model="verificationCode" type="text" id="verificationCode" style="width: 275px;" required />
                            <button type="button" @click="sendVerificationCode"
                                :disabled="verificationCodeSent" style="font-size: 16px; width: 100px;">发送</button>
                        </div>
                        <div class="form-group">
                            <label for="newPassword">新密码</label>
                            <input v-model="newPassword" type="password" id="newPassword" required />
                        </div>
                        <div class="form-group">
                            <label for="confirmNewPassword">确认密码</label>
                            <input v-model="confirmNewPassword" type="password" id="confirmNewPassword" required />
                        </div>
                        <div class="tit">
                            <button type="submit">重置密码</button>
                        </div>
                        <el-button @click="handleForgotPassword">返回登录</el-button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
// import { routes } from '../router/routes'
// import useUserStore from '../store/modules/user'
// import Cookies from 'js-cookie'
import { ElMessage } from 'element-plus'

// const userStore = useUserStore()
export default {
    data() {
        return {
            playFlip: false,
            playFlip1: false,
            playForget: false,
            username: '',
            pwd: '',
            nickname: '',
            fullname: '',
            email: '',
            password: '',
            confirmPassword: '',
            f_username: '',
            f_email: '',
            verificationCode: '',
            verificationCodeSent: false,
            newPassword: '',
            confirmNewPassword: '',
        }
    },
    methods: {
        // 登录/注册页面翻转
        play() {
            this.playFlip = !this.playFlip
            this.playFlip1 = !this.playFlip1
        },
        // 注册
        async register() {
            if (this.password !== this.confirmPassword) {
                alert('两次密码不一致！');
                return;
            }
            // 在这里执行注册逻辑，可以发送请求给服务器或者执行其他操作
            const data = {
                'username': this.nickname,
                'password': this.password,
                'realName': this.fullname,
                'email': this.email,
            }
            console.log(data)
            // try {
            //     const response = await fetch('http://8.130.113.86:8000/auth/register', {
            //         method: 'POST',
            //         headers: {
            //             'Content-Type': 'application/json',
            //         },
            //         body: JSON.stringify(data),
            //     })

            //     if (response.status === 200) {
            //         response.json().then(res => {
            //             if (res.code === 200) {
            //                 ElMessage({
            //                     message: `注册成功！`,
            //                     type: 'success',
            //                     offset: 100,
            //                 })
            //                 this.nickname = ''
            //                 this.fullname = ''
            //                 this.email = ''
            //                 this.password = ''
            //                 this.confirmPassword = ''
            //                 this.play()
            //                 sessionStorage.setItem('showIntro', 'true')
            //             } else if (res.code === 411) {
            //                 ElMessage({
            //                     message: `用户已存在！`,
            //                     type: 'warning',
            //                     offset: 100,
            //                 })
            //             } else if (res.code === 410) {
            //                 ElMessage({
            //                     message: `邮箱不合法！`,
            //                     type: 'warning',
            //                     offset: 100,
            //                 })
            //             } else {
            //                 alert('da失败！')
            //             }
            //         })
            //     } else {
            //         alert('RERER！')
            //     }
            // } catch (error) {
            //     console.log(error)
            // }
        },
        // 登录
        async login(e: { preventDefault: () => void; }) {
            e.preventDefault();
            // 检验密码是否正确的逻辑
            // 登录成功后修改isLoggedIn的值为true
            if (this.username === '' || this.pwd === '') {
                window.alert('账号和密码不能为空！')
            } else {
                const data = {
                    'username': this.username,
                    'password': this.pwd
                }
                console.log(data)
                // routes.push({ path: '/teams' })
                // const response = await fetch('http://8.130.113.86:8000/auth/login', {
                //     method: 'POST',
                //     headers: {
                //         'Content-Type': 'application/json',
                //     },
                //     body: JSON.stringify(data),
                // });
                // if (response.status === 200) {
                //     response.json().then(res => {
                //         if (res.code === 200) {
                //             localStorage.setItem('isLoggedIn', 'true');
                //             //userStore.getUserInfo(username.value)
                //             sessionStorage.setItem('username', this.username)
                //             sessionStorage.setItem('userId', res.data.userId)
                //             // router.push({ path: '/teams' })
                //         } else {
                //             window.alert('账号或密码错误！请重新输入')
                //         }
                //     })
                // } else {
                //     window.alert('EEE')
                // }
            }
        },
        // 登录/忘记密码页面翻转
        handleForgotPassword() {
            //跳转到忘记密码页面
            // router.replace('/forgetpassword')
            this.playFlip = !this.playFlip
            this.playForget = !this.playForget
        },
        // 邮箱验证码
        sendVerificationCode() {
            // 在这里执行发送邮箱验证码的逻辑
            // 设置 verificationCodeSent 为 true，防止重复发送验证码
            console.log('发送邮箱验证码', this.f_email);
            this.verificationCodeSent = true;
        },
        // 重置密码
        resetPassword() {
            if (this.newPassword !== this.confirmNewPassword) {
                alert('密码和确认密码不匹配');
                return;
            }
            // 在这里执行重置密码逻辑，可以发送请求给服务器或者执行其他操作
            console.log('重置密码信息：', {
                username: this.f_username,
                email: this.f_email,
                verificationCode: this.verificationCode,
                newPassword: this.newPassword,
            });
            ElMessage({
                message: `重置成功！`,
                type: 'success',
                offset: 100,
            })

            this.f_username = ''
            this.f_email = ''
            this.verificationCode = ''
            this.verificationCodeSent = false
            this.newPassword = ''
            this.confirmNewPassword = ''

            this.handleForgotPassword()
        },
    }
}
</script>

<style scoped>
.background {
    position: fixed;
    background-image: url("https://scholarin.cn/signin/static/hky_signin_page_bg.webp");
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-repeat: no-repeat;
    background-size: 100% 100%;
}

.tit {
    margin-bottom: 24px;
    display: flex;
    justify-content: center;
}

.register-form {
    margin: 100px 500px;
    padding: 20px 50px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: white;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 1);
}

.form-group {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    height: 40px;
}

label {
    width: 100px;
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
}

input {
    width: 380px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.flip-item {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    transition: all 1s ease-in-out 0s;
    backface-visibility: hidden;
    box-sizing: border-box;
}

.flip-item-front {
    z-index: 2;
}

.flip-item-back {
    transform: rotateY(180deg);
    z-index: 1;
    /* background: green; */
    /* color: white; */
}

.flip-front {
    transform: rotateY(180deg);
}

.flip-back {
    transform: rotateY(0deg);
}
</style>