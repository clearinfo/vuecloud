<template>
	<div class="page-ui-list">
		<h3>{{msg}}</h3>
	</div>
</template>
<script>
import SHA1 from '@/assets/js/SHA1'
import Vue from "vue";
Vue.prototype.$SHA1 = SHA1
export default {
	name:'ClassList',
	data(){
		return {
			msg:'考试系统课程列表'
		}
	},
	methods:{
		getDataList(){
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
			this.axios.get('https://d.apicloud.com/mcm/api/lc_class?filter=',{
				headers: {
				    "X-APICloud-AppId": appID,
				    "X-APICloud-AppKey": appKey
				},
				params:encodeURIComponent(params)
			}).then((response)=>{
                console.log(response.data)
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