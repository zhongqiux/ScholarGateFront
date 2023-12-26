<template>
  <!--  左侧漂浮-->
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>科研人员信息</span>
        </div>
      </template>
      <div style="max-height: 200px;overflow:auto;overflow-x: hidden;">
        <div class=" flex flex-row">
          <div class="mr-2 name">姓名：</div>
          <div>{{ store.author.displayName || 'mty' }}</div>
        </div>
        <div class="name flex flex-row">
          <div class="mr-2 name">机构：</div>
          <div>{{ store.author.institutionDisplayName || 'mty' }}</div>
        </div>
        <div class="works flex justify-start"><span>作品</span></div>
        <div v-for="item,index in store.author.works" class="mt-2">
          <div class="title" @click="go('/result',{id:item.id})"> {{ (index+1) + '、'+item.workName }} </div>
        </div>
      </div>
      <template #footer>Footer content</template>
    </el-card>
  
    <RelationVue @greet="test" :doi="work" v-if="refresh"></RelationVue>
  </template>
<script lang="ts">
import { useCounterStore } from "@/store";
import RelationVue from "@/components/RelationGraphic"
import {defineComponent} from 'vue'
import { getAuthorData,type } from "@/API";

export default defineComponent({
  name:'HelloWorld',
  components:{
    RelationVue
  },
  mounted:function(){
    
    this.work = this.$route.query.id;
    // console.log(this.work)
    this.refresh = true;
  },
  data(){
    return{
      store:useCounterStore(),
      work:'',
      refresh:false,
    }
  },
  methods:{
    go(path,query){
      this.$router.push({path:path,query:query})
    },
    test(id){
      console.log('test')
      getAuthorData(id).then(res=>{
        this.store.author = res.data;
        console.log(this.store.author)
      })
    }
  }
})
</script>



<style scoped>
.read-the-docs {
  color: #888;
}

.box-card{
  position: absolute;
  width: 300px;
  top: 30%;
  left: 30px;
  z-index: 999;
  border-radius: 30px;
  background-color: #f5f5f5;
  color: #1a1a1a;
}
.title {
  overflow: hidden;
  
  display: -webkit-box;    
  -webkit-box-orient: vertical;    
  -webkit-line-clamp: 2; 
  text-align: left;   
}
.title:hover {
  color: cornflowerblue;
  cursor: pointer;
}
.name {
  min-width: 50px;
}
</style>
