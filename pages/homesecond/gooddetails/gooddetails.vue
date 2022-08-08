<template>
	<view class="wrap">
		<view class="" style="height: 1rpx;"></view>
		<view class="posi">
			<view class="flex_sb" style="padding-left: 24rpx;">
				<u-icon name="arrow-left" @click="backNav" size="40rpx" color="#000"></u-icon>
				<view class="">
					<view class="flex">
						<!-- <u-icon name="heart" size="40rpx"></u-icon> -->
						<u-icon name="heart-fill" color="#fb5b4d" size="40rpx"></u-icon>
						<text style="margin-right: 30rpx;"></text>
						<u-icon name="share-fill" color="#000" size="40rpx"></u-icon>
					</view>
				</view>
			</view>
			
			<view class="flex_sb" style="margin-top: 36rpx;">
				<view class="" style="width: 220rpx;height: 56rpx;">
					<image src="/static/homesecond/gfbqp.png" mode="" style="width: 100%;height: 100%;"></image>
				</view>
				<view class="" style="width: 72rpx;height: 84rpx;">
					<image src="/static/homesecond/bq.png" mode="" style="width: 100%;height: 100%;"></image>
				</view>
			</view>
		</view>
		<view class="good_img">
			<image src="@/static/homesecond/img_bg.png" mode="" style="width: 96%;height: 96%;margin: 2%;"></image>
		</view>
		
		<view class="good_title">
			<view class="flex_sb">
				<view class="">
					<text class="title">双鹤唐剑</text>
					<view class="weight w1">
						<view class="l mbgcolor">
							限量
						</view>
						<view class="r maimcolor">
							1000份
						</view>
					</view>
				</view>
				<view class="version_btn" @click="edition_show = !edition_show">
					<button v-if="banhao == false">选择版本号</button>
					<view class="" style="text-align: right;" v-else>
						版号
						<view class="">
							1002/1000
						</view>
					</view>
				</view>
			</view>
			<view class="flex_fs">
				<view class="flex mr60">
					<view class="">
						<u-avatar src="#" size="30"></u-avatar>
					</view>
					<view class="" style="line-height: 60rpx;margin-left: 15rpx;">
						创作者的名字
					</view>
				</view>
				<view class="flex">
					<view class="">
						<u-avatar src="#"  size="30"></u-avatar>
					</view>
					<view class=""  style="line-height: 60rpx;margin-left: 15rpx;">
						拥有者的名字
					</view>
				</view>
			</view>
		</view>
		
		<view class="good_detail">
			<text class="detail_title">作品地址</text>
			<view class="">
				<view class="flex_sb" style="width: 100%;">
					<view class="lh80" style="width: 140rpx;">
						令牌ID：
					</view>
					<view class="hiddenOne" style="width: 400rpx;">
						566156153153486
					</view>
					<view class="lh80" style="width: 40rpx;"  @click="copy('1d')">
						<image src="/static/homesecond/copy.png" mode="" style="width: 30rpx;height: 30rpx;"></image>
					</view>
				</view>
				
				<view class="flex_sb" style="width: 100%;">
					<view class="lh80" style="width: 140rpx;">
						数据地址：
					</view>
					<view class=" hiddenOne" style="width: 400rpx;">
						https://lanhuapp.com/web/#/item/project/detailDetach?pid=5ed9c0af-0b2b-4a47-bee6-4e9ab0cc1a72&image_id=a7b8e9b3-e280-425c-81fe-8a7afcef0463&tid=0c4021fa-c70f-4a09-becc-5bcbfed63aa2&project_id=5ed9c0af-0b2b-4a47-bee6-4e9ab0cc1a72&fromEditor=true&type=image
					</view>
					<view class="lh80" style="width: 40rpx;"  @click="copy('2')">
						<image src="/static/homesecond/copy.png" mode="" style="width: 30rpx;height: 30rpx;"></image>
					</view>
				</view>
				
				<view class="flex_sb" style="width: 100%;">
					<view class="lh80 " style="width: 140rpx;">
						合约地址：
					</view>
					<view class=" hiddenOne" style="width: 400rpx;">
						https://lanhuapp.com/web/#/item/project/detailDetach?pid=5ed9c0af-0b2b-4a47-bee6-4e9ab0cc1a72&image_id=a7b8e9b3-e280-425c-81fe-8a7afcef0463&tid=0c4021fa-c70f-4a09-becc-5bcbfed63aa2&project_id=5ed9c0af-0b2b-4a47-bee6-4e9ab0cc1a72&fromEditor=true&type=image
					</view>
					<view class="lh80" style="width: 40rpx;"  @click="copy('3')">
						<image src="/static/homesecond/copy.png" mode="" style="width: 30rpx;height: 30rpx;"></image>
					</view>
				</view>
			</view>
			
			
			<view class="" style="margin:20rpx 0 38rpx;">
				<text class="detail_title">作品介绍</text>
				<view class="">
					<u-read-more :toggle="true" showHeight="60" closeText="展开">
							<rich-text :nodes="content"></rich-text>
					</u-read-more>
				</view>
			</view>
			<view class="" style="margin:20rpx 0 38rpx;">
				<text class="detail_title">创作者介绍</text>
				<view class="">
					<u-read-more :toggle="true" showHeight="60" closeText="展开">
							<rich-text :nodes="content"></rich-text>
					</u-read-more>
				</view>
			</view>
		</view>
		
		<view class="more_recommend">
			<text class="detail_title">更多相关作品</text>
			<view class="" style="margin-top: 24rpx;">
				<goodsList></goodsList>
			</view>
		</view>
		
		<view class="" style="height:150rpx;">
			
		</view>
		<view class="foot flex_sb">
			<view class="">
				￥28.00
			</view>
			<view class="foot_btn" @click="topay">
				<button>购买</button>
			</view>
		</view>
		<!-- 选择版号弹窗 -->
		<u-popup :show="edition_show" @close="close" @open="open" mode="bottom" round="32rpx" closeable closeOnClickOverlay>
			<view class="popup ">
				<view class="" style="margin-bottom: 24rpx;">
					飞鹤这是藏品名字
				</view>
				
				<scroll-view scroll-y="true" style="max-height: 60vh;">
					<view class="flex_sb" style="margin-bottom: 60rpx;">
						<view class="">
							<text style="font-weight: 800;font-size: 32rpx;">￥599.00</text>
							<view class="flex" style="align-items: center;">
								<text style="margin-right: 15rpx; font-size: 28rpx;line-height:60rpx;">双核唐建</text>
								<image src="@/static/homesecond/yhq.png" mode="" style="width: 24rpx;height: 20rpx;"></image>
							</view>
							版号：100/10000
						</view>
						<view class="">
							<button class="popup_btn" @click="tobuy">购买</button>
						</view>
					</view>
				</scroll-view>
			</view>
		</u-popup>
		
		<!-- 购买弹窗 -->
		<u-popup :show="buy_show" @close="buy_show = false" @open="open" mode="bottom" round="32rpx" closeable closeOnClickOverlay>
			<view class="popup ">
				<view class="" style="margin-bottom: 24rpx;">
					飞鹤这是藏品名字
				</view>
				
				<scroll-view scroll-y="true" style="max-height: 60vh;">
					<view class="flex_sb" style="margin-bottom: 60rpx;">
						<view class="">
							<text style="font-weight: 800;font-size: 32rpx;">￥599.00</text>
							<view class="flex" style="align-items: center;">
								<text style="margin-right: 15rpx; font-size: 28rpx;line-height:60rpx;">双核唐建</text>
								<image src="@/static/homesecond/yhq.png" mode="" style="width: 24rpx;height: 20rpx;"></image>
							</view>
							版号：100/10000
						</view>
						<view class="">
							<button class="popup_btn" @click="tobuy">购买</button>
						</view>
					</view>
				</scroll-view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	import goodsList from "@/components/goods_list.vue"
	export default {
		components:{
			goodsList
		},
		data() {
			return {
				banhao:false,
				content:`这是很长一段话这是很长一段话这是很长一段话这是很长一段话这是很长一段话这是很长一段话这是很长一段话
							这是很长一段话这是很长一段话这是很长一段话这是很长一段话这是很长一段话这是很长一段话
							这是很长一段话这是很长一段话这是很长一段话这是很长一段话这是很长一段话这是很长一段话
							这是很长一段话这是很长一段话这是很长一段话这是很长一段话这是很长一段话这是很长一段话
							这是很长一段话这是很长一段话这是很长一段话这是很长一段话这是很长一段话这是很长一段话`,
				edition_show:false,
				buy_show:false
				
			};
		},
		methods:{
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
			
			
			backNav(){
				uni.navigateBack({
					delta: 1
				});
			},
			
			close(){ this.edition_show = false},
			open(){},
			tobuy(){
				this.banhao = true
				this.edition_show = false
			},
			topay(){
				this.buy_show = true
			}
		}
	}
</script>

<style lang="scss" scoped>
	.wrap{
		background:#f8f6f9 url(@/static/homesecond/good_bg.png) 100% top/100% no-repeat;
		// height: 100vh;
		font-family: 'PingFang SC';
	}
	
	.posi{
		width: 724rpx;
		// height: 77vh;
		position: absolute;
		top: 40rpx;
		left: 0;
		z-index: 1;
	}
	
	.good_img{
		margin: 158rpx auto 320rpx;
		width: 594rpx;
		height: 594rpx;
		border-radius: 50%;
		background: url(@/static/homesecond/img_bg.png) 100%/100% no-repeat;
		z-index: 10;
	}
	
	.weight{
		display: flex;
		height: 50rpx;
		line-height: 50rpx;
		margin: 20rpx 0;
		font-size: 20rpx;
		text-align: center;
		justify-content: flex-start;
		.l{
			color: #000;
			padding: 0 10rpx;
			border-radius: 8rpx 0 0 8rpx;
			background:linear-gradient(to right ,#f1c69a ,#fbe0c5);
		}
		.r{
			color: #000;
			padding: 0 10rpx;
			line-height: 49rpx;
			// border: 1rpx solid #C7C7C7;
			border-radius: 0 8rpx 8rpx 0;
			background-color: #fdf6ef;
		}
	}
	
	.good_detail,
	.good_title{
		width: 702rpx;
		background-color: #fff;
		border-radius: 32rpx;
		padding: 20rpx;
		margin-bottom: 38rpx;
	}
	.version_btn button{
		margin: 0;
		width: 188rpx;
		height: 72rpx;
		color: #202020;
		font-size: 28rpx;
		border-radius: 36rpx;
		line-height: 72rpx!important;
		background-color: transparent;
		border: 2rpx solid #727272;
	}
	.lh80{
		line-height: 80rpx;
		font-size: 28rpx;
	}
	.detail_title{
		font-size: 30rpx;
		color: #202020;
		font-weight: bold;
	}
	
	.foot{
		background-color: #fff;
		padding: 38rpx;
		position: fixed;
		bottom: 0;
		left: 0;
		width: 750rpx;
	}
	
	.foot_btn button{
			margin: 0;
			width: 406rpx;
			height: 84rpx;
			color: #ffffff;
			font-size: 32rpx;
			border-radius: 44rpx;
			line-height: 84rpx!important;
			background-color: #202020;
		}
	.more_recommend{
		width: 750rpx;
		padding: 24rpx;
		margin-left: -24rpx;
		background-color: #fff;
		border-radius: 32rpx;
	}
	.popup{
		margin: 38rpx 24rpx 0;
	}
	.popup_btn{
		width: 136rpx;
		height: 64rpx;
		line-height: 64rpx!important;
		margin: 0;
		border-radius: 32rpx;
		background-color: #000;
		color: #fff;
	}
</style>
