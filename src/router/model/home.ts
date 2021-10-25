import { RouteRecord,RouteMeta,RouteRecordRaw } from "vue-router";
import Home from "@/view/Home.vue";

const home:RouteRecordRaw = {
  path:'/home',
  redirect:'/',
  name:'Home',
  components:()=>import('@/view/Home.vue'),
  meta:{
    title:'主页',
    icon:''
  }
}