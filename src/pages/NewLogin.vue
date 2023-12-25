<template>
    <div>
        <div class="background"></div>
        <img data-v-c970699f="" src="/ScholarGateFront/src/assets/icon.png" class="w-60 h-17"
            style="position: absolute; left: 35.5vw; top: -1vh; width: 30vw;">
        <div style="opacity: 0.65; color: black;">
            <!-- 登陆页 -->
            <div :class="{ 'flip-front': playFlip }" class="flip-item flip-item-front">
                <div class="register-form" style="margin-top: 20vh;">
                    <h2 class="tit" style="font-weight: bold; color: black; font-size: 26px;">登录</h2>
                    <form @submit.prevent="APIlogin">
                        <div class="form-group">
                            <label for="username">账号</label>
                            <input v-model="username" type="text" id="username" placeholder="请输入账号" />
                        </div>
                        <div class="form-group">
                            <label for="pwd">密码</label>
                            <input v-model="pwd" type="pwd" id="pwd" placeholder="请输入密码" />
                        </div>
                        <div class="tit">
                            <button type="submit">登录</button>
                        </div>
                        <div class="tit" style="margin-top: 3vh;">
                            <el-button @click="play">没有账号？立即注册</el-button>
                        </div>
                    </form>
                </div>
            </div>
            <!-- 注册页 -->
            <div :class="{ 'flip-back': playFlip1 }" class="flip-item flip-item-back">
                <div class="register-form">
                    <h2 class="tit" style="font-weight: bold; color: black; font-size: 26px;">注册</h2>
                    <form @submit.prevent="APIregister">
                        <div class="form-group">
                            <label for="nickname">账号</label>
                            <input v-model="nickname" type="text" id="nickname" required />
                        </div>
                        <div class="form-group">
                            <label for="email">邮箱</label>
                            <input v-model="email" type="email" id="email" required />
                        </div>
                        <div class="form-group">
                            <label for="verificationCode">验证码</label>
                            <input v-model="verificationCode" type="text" id="verificationCode" style="width: 18.2vw;"
                                required />
                            <button type="button" @click="sendVerificationCode" :disabled="verificationCodeSent"
                                style="font-size: 16px; width: 6vw;">发送</button>
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
        </div>
    </div>
</template>

<script lang="ts">
// import { routes } from '../router/routes'
// import useUserStore from '../store/modules/user'
// import Cookies from 'js-cookie'
import { ElMessage } from 'element-plus'
import { login, register, sendCode } from '@/API'
import * as Type from "@/API/type"
import { useUserStore } from '@/store'



// const userStore = useUserStore()
export default {
    data() {
        return {
            playFlip: false,
            playFlip1: false,
            // playForget: false,
            username: '',
            pwd: '',
            nickname: '',
            email: '',
            password: '',
            confirmPassword: '',
            f_username: '',
            f_email: '',
            verificationCode: '',
            verificationCodeSent: false,
            newPassword: '',
            confirmNewPassword: '',
            store: useUserStore(),
        }
    },
    methods: {
        // 登录/注册页面翻转
        play() {
            this.playFlip = !this.playFlip
            this.playFlip1 = !this.playFlip1
        },

        APIlogin(): void {
            if (this.username === '' || this.pwd === '') {
                ElMessage({
                    message: `账号和密码不能为空！`,
                    type: 'error',
                })
            } else {
                login(this.username, this.pwd).then((res: Type.LoginReturn) => {
                    if (res.flag == true) {
                        this.store.outdate = Date.now() + 60 * 60 * 1000
                        this.store.userId = res.data.userId
                        this.store.userName = res.data.userName
                        this.store.token = res.data.token
                        this.store.email = res.data.email
                        this.store.avatar = res.data.avatar
                        this.store.Identity = res.data.type
                        ElMessage({
                            message: `登录成功！`,
                            type: 'success',
                        })
                        this.$router.push('/')
                        console.log(res)
                    } else {
                        ElMessage({
                            message: `登录失败！`,
                            type: 'error',
                        })
                        console.log(res)
                    }
                }).catch(err => {
                    console.log(err)
                })
            }
        },

        APIregister(): void {
            if (this.password !== this.confirmPassword) {
                ElMessage({
                    message: `两次密码不一致！`,
                    type: 'error',
                })
                return;
            } else if (this.verificationCode === '') {
                ElMessage({
                    message: `验证码不能为空！`,
                    type: 'error',
                })
                return;
            } else {
                register(this.nickname, this.password, this.email, this.verificationCode).then((res: Type.RegisterReturn) => {
                    if (res.flag == true) {
                        ElMessage({
                            message: `注册成功！`,
                            type: 'success',
                        })
                        this.nickname = ''
                        this.password = ''
                        this.email = ''
                        this.verificationCode = ''
                        this.confirmPassword = ''
                        this.verificationCodeSent = false
                        this.play()
                    } else {
                        ElMessage({
                            message: `注册失败！`,
                            type: 'error',
                        })
                    }
                }).catch(err => {
                    console.log(err)
                })
            }
        },

        // 邮箱验证码
        sendVerificationCode() {
            // 在这里执行发送邮箱验证码的逻辑
            // 设置 verificationCodeSent 为 true，防止重复发送验证码
            console.log('发送邮箱验证码', this.email);
            if (this.email == '') {
                ElMessage({
                    message: `请输入邮箱！`,
                    type: 'error',
                })
                return
            } else {
                const myreg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
                if (!myreg.test(this.email)) {
                    ElMessage({
                        message: `请检查邮箱格式！`,
                        type: 'warning',
                    })
                    return
                } else {
                    sendCode(this.email).then((res: Type.SendCodeReturn) => {
                        if (res.flag == true) {
                            this.verificationCodeSent = true;
                            ElMessage({
                                message: `验证码发送成功！`,
                                type: 'success',
                            })
                        } else {
                            ElMessage({
                                message: `验证码发送失败！`,
                                type: 'error',
                            })
                            console.log(res)
                        }
                    }).catch(err => {
                        console.log(err)
                    })
                }
            }
        },
    }
}
</script>

<style scoped>
.background {
    position: fixed;
    /* background-image: url("https://scholarin.cn/signin/static/hky_signin_page_bg.webp"); */
    background-image: url("https://scholarin.cn/signin/static/pubscholar_signin_page_bg.webp");
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-repeat: no-repeat;
    background-size: 100% 100%;
}

.tit {
    margin-bottom: 3vh;
    display: flex;
    justify-content: center;
}

.register-form {
    margin: 14vh 30vw;
    padding: 3vh 3vw;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: white;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 1);
}

.form-group {
    display: flex;
    justify-content: space-between;
    margin-bottom: 3vh;
    height: 5vh;
}

label {
    width: 7vw;
    display: block;
    margin-bottom: 1vh;
    font-weight: bold;
}

input {
    width: 25vw;
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