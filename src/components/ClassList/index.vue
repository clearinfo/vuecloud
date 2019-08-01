<template>
	<div class="page-ui-list">
		<h3>{{msg}}</h3>
		<ul>
			<li v-for="(item,index) in dataList" :key="index" v-html="item.classname">
			</li>
		</ul>
	</div>
</template>
<script>
import SHA1 from '@/assets/js/SHA1'
import Vue from "vue"
Vue.prototype.$SHA1 = SHA1
export default {
	name:'ClassList',
	data(){
		return {
			msg:'考试系统课程列表',
			dataList:[]
		}
	},
	methods:{
		getDataList(){
			var s = this;
			var now = Date.now();
			var appID="A6018338664263";
			var myKey="243634D7-F3DC-F027-2AAA-2C2691768DC6";
			var appKey = SHA1("A6018338664263"+"UZ"+"243634D7-F3DC-F027-2AAA-2C2691768DC6"+"UZ"+now)+"."+now
			alert(appKey,'appKey');
			var params={
		            fields:{},
		            where: {

		            },
		            skip:0,
		            limit:5
		    }
		    var url='https://d.apicloud.com/mcm/api/lc_class'
			this.axios.get(url,{
				headers: {
				    "X-APICloud-AppId": appID,
				    "X-APICloud-AppKey": appKey,
				    "Content-Type":'application/x-www-form-urlencoded; charset=UTF-8'
				},
				params:{
					filter:params
				}

			}).then((response)=>{
                console.log(response.data)
                s.dataList=response.data;
                
            }).catch((response)=>{
                console.log(response)
            })
			
		}
	},
	mounted(){
		this.getDataList()
	}
}
</script>
<style type="text/css" scoped>
	
</style>