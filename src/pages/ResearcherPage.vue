<script lang="ts">
import ResearcherInfo from "@/components/Researcher/ResearcherInfo.vue"
import ResearcherData from "@/components/Researcher/ResearcherData.vue"
import UseraddedInfo from "@/components/User/UseraddedInfo.vue"

import { getAuthorData, getUserData } from '@/API'
import * as Type from "@/API/type"

export default {
    components: {
        ResearcherInfo,
        ResearcherData,
        UseraddedInfo
    },
    data() {
        return {
            displayName: '', // 初始化为一个空字符串，确保在组件创建时具有该属性,
            backGround: '',
            institutionDisplayName: '',
            citedCount: 0,
            worksCount: 0,
            works: [] as { id: string; workName: string; publicationDate: string }[],
            concepts: [] as { id: string; name: string }[],
            countByYears: [] as { year: number; works_count: number; cited_by_count: number }[],
            isMounted1: false, // 新增的变量
            isMounted2: false, // 新增的变量
            doi: '',  // 新增的本地变量 doi
            flag: '' // 标识当前用户是否已认领门户
        };
    },

    mounted() {

        // 在组件被挂载到 DOM 上时执行的函数
        this.getUserDataTest();
    },
    methods: {
        getUserDataTest(): void {
            // 获取路由参数中的 doi
            const doi = this.$route.params.doi as string;

            // 根据需要使用 doi 进行后续逻辑
            console.log('DOI from route:', doi);
            getAuthorData(doi).then((res: Type.GetUserDataReturn) => {
                console.log("getAuthorData:\n" + res.data);
                this.displayName = res.data.displayName;
                this.backGround = res.data.backGround;
                this.institutionDisplayName = res.data.institutionDisplayName;
                this.citedCount = res.data.citedCount;
                this.worksCount = res.data.worksCount;
                this.concepts = res.data.concepts;
                this.works = res.data.works;
                this.countByYears = res.data.countByYears;
                this.doi = doi;
                this.isMounted1 = true;
            }).catch(err => {
                console.log(err);
            });
            getUserData().then((res: Type.GetUserDataReturn) => {
                // console.log(res.msg);
                this.flag = res.msg
                // console.log(this.flag == '2')
                // this.flag = "2"
                this.isMounted2 = true;
            }).catch(err => {
                console.log(err);
            });

        },
    }
}

</script>

<template>
    <div v-if="isMounted1 && isMounted2">
        <ResearcherInfo :displayName="displayName" :backGround="backGround" :institutionDisplayName="institutionDisplayName"
            :doi="doi" :flag="flag"></ResearcherInfo>
        <UseraddedInfo  :citedCount="citedCount" :worksCount="worksCount" :concepts="concepts"
            :countByYears="countByYears">
        </UseraddedInfo>
        <ResearcherData :works="works"></ResearcherData>
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
