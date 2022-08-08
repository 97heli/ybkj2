<template>
	<view style="padding: 0 24rpx">
		<view class="list" style="position: relative;margin-bottom: 20rpx;z-index:999;background-color:#fff;">
			<scroll-view scroll-x="true"  style="white-space: nowrap;margin-right: 80rpx;">
				<view class="" v-for="(item,index) in btnList" :key= 'index' @click="changeTab(item,1)">
					<view class="type_btn" :class="tabnow == item.id ? 'active':''">
						{{item.name}}
					</view>
				</view>
			</scroll-view>
			<view class="shaixuan flex" style="" @click="toshaixuan">
				<text style="font-weight: bold; font-size: 28rpx;">筛选</text>
				<image src="/static/homesecond/homeerji/shaixuan.png" mode="" style="width: 30rpx;height: 30rpx;"></image>
			</view>
		</view>
		<view class="classification" v-if="show == true">
			<text>全部分类</text>
			<view class="">
				<view class="flex" style="width: 100%;flex-wrap: wrap;">
					<view class="" v-for="(item,index) in btnList" :key= 'index' @click="changeTab(item,2)" style="width: 32%;text-align: center;justify-content: space-between;">  
						<view class="type_btn1 type_btn" :class="prepare == item.id ? 'active':''">
							{{item.name}}
						</view>
					</view>
				</view>
			</view>
			<view class="">
				<view class="flex main" style="font-size: 36rpx;border-radius:40rpx;justify-content:space-between ;margin-top:20rpx">
					<view class="Reset" @click = "Reset">
					重置
					</view>
					<view class="finish" @click="finish">
						完成
					</view>
				</view>
			</view>
		</view>
		<view style="z-index:0;">
			<goodList></goodList>
		</view>
		<u-overlay :show="overlay_show"  zIndex="1" :mask-click-able = 'false'></u-overlay>
		
	</view>
</template>

<script>
	import goodList from "@/components/goods_list1.vue"
	export default {
		components:{
			goodList
		},
		data() {
			return {
				btnList:[{
							name:'全部藏品',
							id:0
						},{
							name:'水滴',
							id:1
						},{
							name:'飞鸽',
							id:2
						},{
							name:'蜻蜓',
							id:3
						},{
							name:'蝴蝶',
							id:10
						},{
							name:'合成藏品',
							id:4
						},{
							name:'创世纪念勋章',
							id:5
						},{
							name:'陨石',
							id:6
						},{
							name:'考古俱乐部',
							id:7
						},{
							name:'通行证碎片',
							id:8
						},{
							name:'玫瑰',
							id:9
						}
				],
				tabnow : 0,
				prepare:0,//下拉列表中选中的第几个
				show:false,
				overlay_show:false
			};
		},
		
		methods:{
			changeTab(item,type){
				if(type == 1){
					this.tabnow = item.id
				}else{
					 this.prepare = item.id
				}
			},
			toshaixuan(){
				this.overlay_show = !this.overlay_show
				this.show = !this.show
			},
			finish(){
				this.tabnow = this.prepare
				this.show = false
				this.overlay_show = false
			},
			Reset(){
				this.prepare = 0
			}
		}
	}
</script>

	<style lang="scss">
		.list{
			padding:0!important;
		}
		.type_btn{
			height: 50rpx;
			line-height: 36rpx;
			margin: 0 20rpx 0 0;
			padding: 7rpx 20rpx;
			font-size: 26rpx;
			border-radius: 36rpx;
			color: #171717;
			background-color: #faf7f8;
		}
		.type_btn1{
			height: 70rpx;
			line-height: 56rpx;
			margin:5rpx;
		}
		.active{
			color: #2F77F0;
			background-color: #E9F1FE;
		}
		.list /deep/ .uni-scroll-view-content{
			display: flex;
			width:93%!important;
		}	
		/deep/ .u-transition{
			top:140rpx!important;
		}
		.shaixuan{
			position: absolute;
			top: 0;
			right: 0;
			height: 50rpx;
			padding-left: 15rpx;
			background-color: #fff;
			vertical-align: middle;
		}
		
		.classification{
			position: absolute;
			top: 48rpx;
			left: 0;
			padding: 24rpx;
			background-color: #fff;
			z-index: 999;
		}
		.finish{
			width: 492rpx;
			height: 80rpx;
			line-height: 80rpx;
			color: #fff;
			text-align: center;
			border-radius: 40rpx;
			font-size: 36rpx;
			background: linear-gradient(to right , #2b2b2b,#000000);
		}
		.Reset{
			width: 188rpx;
			height: 76rpx;
			line-height: 76rpx;
			text-align: center;
			border-radius: 40rpx;
			background-color: #ebebeb;
		}
		.main{
			
			border: 2rpx solid #d4d4d4;
			background-color: #ebebeb;
		}
</style>