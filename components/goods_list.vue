<template>
	<view class="flex_sb item">
		<view class="" style="width: 342rpx;background-color: #fff;border-radius:24rpx;margin-bottom: 20rpx;" v-for="(item,index) in goods_list" :key = 'index'>
			<view class="img" style="width: 342rpx;height: 342rpx;">
				<image src="/static/img.png" mode="" style="width: 100%; height: 100%;"></image>
				<view class="rignttip">
					<image src="/static/commonents/btjbq.png" mode="" style="width: 100%; height: 100%;"></image>
				</view>
			</view>
			<view class="" style="padding: 15rpx;">
				<view class="goods_title flex">
					这是商品标题
					<view class="goods_trademark">
						R
					</view>
				</view>
				<view class="goods_author">
					创作者：大大艺术家
				</view>
				<view class="flex_sb goods_foot">
					<view class="goods_status">
						售卖中
					</view>
					<view class="goods_price">
						<text style="font-size: 20rpx;">￥</text>28.00
					</view>
				</view>
			</view>
			
	</view>
	</view>
</template>

<script>
	export default{
		name:'goodsList',
		props:{
			goods_list:{
				type: Array,
				default: ()=>[1,2,3],
			}
		}
	}
</script>

<style>
	.item{
		flex-wrap: wrap;
		/* margin: 0 24rpx; */
	}
	.img{
		border-radius: 24rpx 24rpx 0 0 ;
		width: 48%;
		position: relative;
		overflow: hidden;
	}
	.rignttip{
		width: 112rpx;
		height: 40rpx;
		position: absolute;
		top: 0;
		left: 0;
	}
	.goods_title{
		width: 90%;
		color: #202020;
		font-size: 28rpx;
		margin-top: 10rpx;
		line-height: 50rpx;
		align-items: center;
	}
	.goods_author{
		font-size: 20rpx;
		color: #727272;
	}
	.goods_status{
		color: #FC3730;
		font-size: 26rpx;
		
	}
	.goods_price{
		font-size: 32rpx;
	}
	.goods_foot{
		margin-top: 25rpx;
	}
	.goods_trademark{
		width: 44rpx;
		height: 24rpx;
		font-size: 24rpx;
		line-height: 24rpx;
		background-color: #BFDAEC;
		margin-left: 15rpx;
		border-radius: 4rpx;
		text-align: center;
	}
</style>