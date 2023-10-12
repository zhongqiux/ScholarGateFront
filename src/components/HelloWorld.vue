<script setup lang="ts">

//接口导入测试
import { hello,test } from '@/API'
import * as Type from "@/API/type"

//接口的二次封装
const APITest = function(msg:String):void{
    test(msg).then((res:Type.CommonReturnType)=>{
      console.log(res)
    }).catch(err=>{
      console.log(err)
    })
}
//store的使用
import { useCounterStore } from '@/store'
const store = useCounterStore()
</script>

<template>

  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
  <h2 class="text-4xl font-light">asjkdaksdakh</h2>
  <span class="inline-flex items-center bg-purple-600 rounded-full px-2 text-sm text-white py-1 font-medium">
    <svg xmlns="http://www.w3.org/2000/svg" class="fill-current mr-1.5 text-white" viewBox="0 0 16 16" width="16" height="16">
      <path d="M11.28 6.78a.75.75 0 00-1.06-1.06L7.25 8.69 5.78 7.22a.75.75 0 00-1.06 1.06l2 2a.75.75 0 001.06 0l3.5-3.5z"></path>
      <path fill-rule="evenodd" d="M16 8A8 8 0 110 8a8 8 0 0116 0zm-1.5 0a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"></path>
    </svg>
    Closed
  </span><br>
  <button class="btn btn-success" @click="hello">Success</button><br>
  <button class="btn btn-success" @click="APITest('hello')">hello</button><br>
  <button class="btn btn-primary" @click="store.increment">increment</button><span>{{ store.count }}</span>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
