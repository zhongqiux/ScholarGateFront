<script lang="ts">
import ResearcherInfo from "@/components/Researcher/ResearcherInfo.vue"
import ResearcherData from "@/components/Researcher/ResearcherData.vue"
import { getAuthorData } from '@/API'
import * as Type from "@/API/type"

export default {
    components: {
        ResearcherInfo,
        ResearcherData,
    },
    data() {
        return {
            avatar: 0,
            displayName: '', // 初始化为一个空字符串，确保在组件创建时具有该属性,
            backGround: '',
            institutionDisplayName: '',
            works: [] as { workName: string; publicationDate: string }[],
            isMounted: false, // 新增的变量
            doi: '',  // 新增的本地变量 doi
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
                console.log(res.data);
                this.avatar = parseInt(res.data.avatar, 10);
                this.displayName = res.data.displayName;
                this.backGround = res.data.backGround;
                this.institutionDisplayName = res.data.institutionDisplayName;
                this.works = res.data.works;
                this.doi = doi;
                console.log(this.works[0].workName);
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
        <ResearcherInfo :displayName="displayName" :backGround="backGround"
            :institutionDisplayName="institutionDisplayName" :doi="doi"></ResearcherInfo>
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
