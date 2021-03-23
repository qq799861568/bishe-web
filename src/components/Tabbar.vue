<template>
	<div class="tabberWarp" >
		<div class="warp">
			<Item :txt='item.txt' :page='item.page' @change='getVal' v-for='item in tabbarDes':sel='selected'>
 
				<img :src="item.normalImg" slot='normalImg'>
				<img :src="item.activeImg" slot='activeImg'>
			</Item>
		</div>
	</div>
</template>
<script type="text/javascript">
	import Item from './Item.vue'
	export default{
		components:{
			Item
		},
		data:function(){
			return{
				selected:'skin',
				tabbarDes:[
					{
						txt:'热点',
						page:'hotspot',
						normalImg:require('../assets/tabbar/hotspot.png'),
						activeImg:require('../assets/tabbar/hotspot_active.png')
						
					}, {
						txt:'行情',
						page:'quotation',
						normalImg:require('../assets/tabbar/hotspot.png'),
						activeImg:require('../assets/tabbar/hotspot_active.png')
						
					}, {
						txt:'我的',
						page:'account',
						normalImg:require('../assets/tabbar/hotspot.png'),
						activeImg:require('../assets/tabbar/hotspot_active.png')
						
					}, 
				]
			}
		},
		methods:{
			getVal:function(res){
				this.selected = res;
			}
		}
	}
</script>
<style type="text/css">
	.warp{
		width: 100%;
		border-top: 1px solid #eee;
		background: #fff;
		display: flex;
		align-items: center;
		justify-content: space-around;
		font-size: 0;
	}
	.warp img{
		width: 20px;
		height: 20px;
	}
	.tabberWarp img{
		margin-top: 10px;
		margin-bottom: 5px;
 
	}
	.tabberWarp{
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		padding-bottom: 5px;
		background: #fff;
	}
</style>