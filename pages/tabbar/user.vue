<template>
	<view class="root">
	<z-paging ref="paging" v-model="dataList" @query="queryList">
		<view class="flex_fe" style="text-align: right;margin-right: 24rpx;">
			<image src="/static/tabbar/user/setup.png" mode="" style="width: 48rpx;height: 48rpx;margin-right: 60rpx;" @click="tosetting"></image>
			<image src="/static/tabbar/user/kefu.png" mode="" style="width: 48rpx;height: 48rpx;" @click="kefu_show = true"></image>
		</view>
		<view class="pd30 flex" style="position: relative;">
			<u-avatar src="#" size="146rpx"></u-avatar>
			<view class="edit">
				<image src="/static/tabbar/user/edit.png" mode="" style="width: 48rpx;height: 48rpx;"></image>
			</view>
			<view class="" style="margin-left: 24rpx;">
				<view class="phone flex_sb">
					132****3113
					<view class="">
						<button class="phone_btn">我的联盟 ></button>
					</view>
				</view>
				<view class="flex">
					<view class="flex" style="width: 290rpx;font-size: 22rpx;color: #bbbbbb;">
						钱包地址：
						<view class="hiddenOne" style="width: 160rpx;font-size: 24rpx;">
							sadasfsddsffsadasdasd
						</view>
					</view>
					<view class="" style="width: 40rpx;" @click="copy('sadasfsddsffsadasdasd')">
						<image src="/static/homesecond/copy.png" mode="" style="width: 24rpx;height: 24rpx;"></image>
					</view>
				</view>
				<view class="flex_sb" style="width: 450rpx;font-size: 24rpx;">
					<view class="">
						点赞&nbsp;{{selectUserGive.giveNumber}}
					</view>
					<view class="">
						关注&nbsp;{{selectUserGive.followNumber}}
					</view>
					<view class="">
						粉丝&nbsp;{{selectUserGive.fansNumber}}
					</view>
				</view>
			</view>
		</view>
		
		<view class=" equitycard">
			<view class="">
				<image src="/static/tabbar/user/equit.png" mode="" style="width: 40rpx;height: 36rpx;margin-right: 15rpx;"></image>
				<image src="/static/tabbar/user/qykp.png" mode=""  style="width: 156rpx;height: 36rpx;"></image>
			</view>
			<view class="equitycard_btn">
				<image src="/static/tabbar/user/Viewbutton.png" mode=""  style="width: 128rpx;height: 52rpx;"></image>
			</view>
		</view>
		<view class="list flex_sb">
			<block v-for="(item,index) in list " :key="index">
				<view class="" style="width: 20%; text-align: center;">
					<image :src="item.icon" mode="" style="width: 40rpx;height: 36rpx"></image>
					<view class="">
						{{item.name}}
					</view>
				</view>
			</block>
		</view>
		<view class="">
			<image src="/static/tabbar/user/entrance.png" mode="" style="width: 702rpx;height: 108rpx;margin-left: 24rpx;"></image>
		</view>
		
		<view class="">
			<u-tabs 
			:list="tabList" 
			:itemStyle="itemStyle"
			:lineColor="`url(${lineBg}) 100% 100%`"
			lineWidth="36rpx"
			lineHeight="12rpx"
			@change="tabchange"
			></u-tabs>
		</view>
		<view class="flex_sb"  style="margin: 24rpx 24rpx; 0" v-if="current == 0">
			<view class="flex">
				<view class="" v-for="(item,index) in btnList" :key= 'index' @click="changeTab(item)">
					<view class="type_btn" :class="tabnow == item.id ? 'active':''">{{item.name}}</view>
				</view>
			</view>
			<view class="">
				<image src="/static/tabbar/user/search.png" mode="" style="width: 36rpx;height: 36rpx;"></image>
			</view>
		</view>
		
		<view class="" style="margin: 0 24rpx;" v-if="current == 0">
			<goodsList></goodsList>
		</view>
		<view class="" v-else>
			
		</view>
	</z-paging>
		<!-- 客服弹窗 -->
		<u-popup :show="kefu_show" @close="kefu_show = false" @open="kefu_show = true" mode="center" bgColor="transparent">
			<view style="width: 560rpx; height: 828rpx;border-radius:20rpx;overflow: hidden;">
				<image src="/static/tabbar/user/kf.png" mode="" style="width: 100% ; height: 100%;"></image>
			</view>
			<view class="" style="margin: 30rpx auto;" @click="kefu_show = false">
				<image src="/static/tabbar/user/close.png" mode="" style="width: 50rpx;height: 50rpx;"></image>
			</view>
		</u-popup>
	
	
	</view>
</template>

<script>
	import goodsList from "@/components/goods_list.vue"
	import {
		selectUserGive,
		collectionList,
		worksList
	} from "@/api/user.js"
	export default {
		components:{
			goodsList
		},

		data() {
			return {
				list:[
					{
						name:'订单',
						icon:'/static/tabbar/user/order.png'
					},{
						name:'钱包',
						icon:'/static/tabbar/user/wallet.png'
					},{
						name:'合成',
						icon:'/static/tabbar/user/synthesis.png'
					},{
						name:'礼品',
						icon:'/static/tabbar/user/gift.png'
					},{
						name:'邀请',
						icon:'/static/tabbar/user/invitation.png'
					},
				],
				tabList: [{
					name: '藏品',
				}, {
					name: '作品',
				}],
				itemStyle: {
					fontSize: "36rpx",
					fontWeight: "800",
					width: "350rpx",
					height: "88rpx"
				},
				lineBg:'/static/tabbar/user/Select.png',
				dataList:[],
				btnList:[{
							name:'全部',
							id:0
						},{
							name:'上架',
							id:1
						},{
							name:'下架',
							id:2
						},{
							name:'交易中',
							id:3
						},{
							name:'锁单',
							id:4
						},
				],
				tabnow:0,//藏品状态所在的index
				current:0,//藏品还是作品
				selectUserGive:{},//关注粉丝数
				kefu_show:false
			}
		},
		created() {
			this.getselectUserGive()
		},
		watch: {
			current(newValue, oldValue) {
				console.log(newValue)
				this.$refs.paging.reload();
			}
		},
		methods: {
			//关注粉丝数
			getselectUserGive(){
				selectUserGive().then(res=>{
					this.selectUserGive = res.data.data
				})
			},
			
			//藏品列表
		
			queryList(pageNum, pageSize) {
				const params = {
						pageNum: pageNum,
						pageSize: pageSize,
				}
				if(this.current == 0){
					params.ownerUserCode=1
					collectionList(params).then(res=>{
						console.log(res,1)
					})
				}else if(this.current == 1) {
					params.createUserCode = 1
					worksList(params).then(res=>{
						console.log(res,2)
					})
				}
				
				this.$refs.paging.complete([])
				// homePageList(params).then(res => {
					// this.$refs.paging.complete(res.data.list);
				// }).catch(res => {
				// 	this.$refs.paging.complete(false);
				// })
			},
			
			tosetting(){
				uni.navigateTo({
					url:'/pages/setting/setting'
				})
			},
			changeTab(item){
				this.tabnow = item.id
			},
			
			copy(data){
				uni.setClipboardData({
					data:data,
					success:function(){
						uni.showToast({
							title:"复制成功",
							icon:"none"
						})
					},
					fail:function(err){
						uni.showToast({
							title:"复制失败",
							icon:"none"
						})
					}
				})
			},
			tabchange(e){
				this.current = e.index
			}
		},
	}
</script>

<style scoped lang="scss">
	.root{
		background: linear-gradient(to bottom , #fff  0,#F7F7F7 40% , #fff 100%);
	}
	.pd30{
		padding: 30rpx;
	}
	.equitycard{
		margin-left: 24rpx;
		width: 702rpx;
		padding: 40rpx;
		height: 200rpx;
		background: url(@/static/tabbar/user/equitycard.png) 100% top /100% no-repeat ;
		display: flex;
		justify-content: space-between;
	}
	
	.list{
		margin-top: -90rpx;
		background-color: #fff;
		width: 750rpx;
		height: 214rpx;
		border-radius: 32rpx 32rpx 0 0 ;
		padding: 40rpx;
		align-items: center;
	}
	.phone{
		width: 500rpx;
		font-size: 44rpx;
	}
	.phone_btn{
		margin: 0;
		width: 168rpx;
		height: 60rpx;
		padding: 0 ;
		font-size: 28rpx;
		border-radius: 60rpx;
		background-color: transparent;
		border:2rpx solid #707070;
		line-height: 60rpx!important;
		
	}
	.edit{
		position: absolute;
		top: 130rpx;
		left: 130rpx;
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
	.active{
		color: #2F77F0;
		background-color: #E9F1FE;
	}
</style>
