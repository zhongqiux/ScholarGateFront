<script lang="ts">
import UserInfo from "@/components/User/UserInfo.vue"
import UserProfile from "@/components/User/UserProfile.vue"
import { getUserData } from '@/API'
import * as Type from "@/API/type"

export default {
    components: {
        UserProfile,
        UserInfo
    },

    data() {
        return {
            avatar: 0,
            displayName: '', // 初始化为一个空字符串，确保在组件创建时具有该属性,
            backGround: '',
            institutionDisplayName: '',
            works: [] as { workName: string; publicationDate: string }[],
            stars: [] as { id: string; name: string }[],
            isMounted: false, // 新增的变量
        };
    },

    mounted() {

        // 在组件被挂载到 DOM 上时执行的函数
        this.getUserDataTest();
    },
    methods: {
        getUserDataTest(): void {
            getUserData().then((res: Type.GetUserDataReturn) => {
                console.log(res.data.backGround);
                this.avatar = parseInt(res.data.avatar, 10);
                this.displayName = res.data.displayName;
                if (res.data.backGround == null||res.data.backGround == "") {
                    this.backGround = "此用户还没有简介噢~";
                }
                else { this.backGround = res.data.backGround; }
                this.institutionDisplayName = res.data.institutionDisplayName;
                this.works = res.data.works;
                this.stars = res.data.stars;
                // console.log(this.works[0].workName);
                this.isMounted = true;
            }).catch(err => {
                console.log(err);
            });
        },
    }
}


</script>

<template>
    <div v-if="isMounted">
        <UserInfo :avatar="avatar" :displayName="displayName" :backGround="backGround"
            :institutionDisplayName="institutionDisplayName"></UserInfo>
        <UserProfile :works="works" :stars="stars"></UserProfile>
    </div>
    <div v-else>
        <el-icon class="is-loading" :size="300">
            <Loading />
        </el-icon>
    </div>
</template>
  
<style scoped>
.is-loading {

    margin-top: 25vh;
}
</style>
