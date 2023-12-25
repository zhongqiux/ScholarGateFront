<script lang="ts">
import UserInfo from "@/components/User/UserInfo.vue"
import UserProfile from "@/components/User/UserProfile.vue"
import UseraddedInfo from "@/components/User/UseraddedInfo.vue"
import { getUserData } from '@/API'
import * as Type from "@/API/type"

export default {
    components: {
        UserProfile,
        UserInfo,
        UseraddedInfo
    },

    data() {
        return {
            avatar: 0,
            displayName: '', // 初始化为一个空字符串，确保在组件创建时具有该属性,
            backGround: '',
            institutionDisplayName: '',
            citedCount: 0,
            worksCount: 0,
            works: [] as { id: string; workName: string; publicationDate: string }[],
            stars: [] as { id: string; name: string }[],
            concepts: [] as { id: string; name: string }[],
            countByYears: [] as { year: number; works_count: number; cited_by_count: number }[],
            isMounted: false, // 新增的变量
            flag: "",// 标识当前用户身份：1普通用户；2已认领的作者用户
        };
    },

    mounted() {

        // 在组件被挂载到 DOM 上时执行的函数
        this.getUserDataTest();
    },
    methods: {
        getUserDataTest(): void {
            getUserData().then((res: Type.GetUserDataReturn) => {
                console.log("res.msg:" + res.msg);
                this.avatar = parseInt(res.data.avatar, 10);
                this.displayName = res.data.displayName;
                this.flag = res.msg;
                // this.flag = "2";
                if (res.data.backGround == null || res.data.backGround == "") {
                    this.backGround = "此用户还没有简介噢~";
                }
                else { this.backGround = res.data.backGround; }
                this.institutionDisplayName = res.data.institutionDisplayName;
                this.citedCount = res.data.citedCount;
                this.worksCount = res.data.worksCount;
                this.concepts = res.data.concepts;
                this.works = res.data.works;
                this.stars = res.data.stars;
                this.countByYears = res.data.countByYears;
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
            :institutionDisplayName="institutionDisplayName" :flag="flag"></UserInfo>
        <UseraddedInfo v-if="flag !== '1'" :citedCount="citedCount" :worksCount="worksCount" :concepts="concepts" :countByYears="countByYears">
        </UseraddedInfo>
        <UserProfile :works="works" :stars="stars" ></UserProfile>
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
