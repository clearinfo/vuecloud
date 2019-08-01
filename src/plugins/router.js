import Vue from "vue";
import VueRouter from "vue-router";
// 引入组件
import Home from "../components/home/"
import HelloWorld from "../components/HelloWorld"
import ClassList from "../components/ClassList/"
Vue.use(VueRouter);
const routes = [
    {
        path:"/",
        component: Home
    },
	{
        path:"/HelloWorld",
		name:'HelloWorld',
        component: HelloWorld
    },
    {
        path:"/classList",
        name:'ClassList',
        component: ClassList
    }
]
var router =  new VueRouter({
    routes
})
export default router;