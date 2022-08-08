<template>
	<view class="root">
		<z-paging ref="paging" v-model="dataList" @query="queryList">
			<view class="">
				<u-swiper height="100" :list="list6" previousMargin="20" nextMargin="20" circular :autoplay="true"
					keyName="bannerUrl" radius="5" bgColor="#ffffff">
					<view slot="indicator" class="vd-f_fd-r vai-c vjc-fe" style="width: 670rpx;">
						<view class="vd-f_fd-r vai-c indicator-num">
							<text class="indicator-num__text">{{ currentNum + 1 }}/{{ list6.length }}</text>
						</view>
					</view>
				</u-swiper>
			</view>

			<view class="">
				<u-tabs :list="tabList" :itemStyle="itemStyle" :lineColor="`url(${lineBg}) 100% 100%`" lineWidth="36rpx"
					lineHeight="12rpx" @change="swpIndex"></u-tabs>
			</view>

			<view v-show="current==0">
				<view class="" v-for="(item,index) in dataList" :key="index">
					<view class="itemn-box vai-c vd-f_fd-r vjc-sb">
						<view style="max-width:360rpx ;">
							<view class="vfs30 vfw400" style="line-height: 22px;height: 86rpx;">
								{{item.name}}
							</view>
							<view class="vfs24" style="color: #979797;">{{item.createTime}}</view>
						</view>
						<view>
							<image class="item-image" :src="item.image" mode=""></image>
						</view>
					</view>
				</view>
			</view>

			<!-- <view class="vd-f_fd-r vai-c vjc-sb vp24 vfw-w" v-show="current==1">
				<view class="itemn-box vai-c vd-f_fd-r vjc-c" v-for="(item,index) in dataList" :key="index">
					<view class="">
						<image class="item-image" :src="item.activityImg" mode=""></image>
						<view class="vfs32 vfwbold" style="text-align: center;">{{item.activityName}}</view>
					</view>
				</view>
			</view> -->
		</z-paging>

	</view>
</template>

<script>
	import {
		bannerList,
		homePageList,
	} from "@/api/notice.js"
	export default {

		data() {
			return {
				current: 0,
				notice: [],
				tabList: [{
					name: '公告',
				}, {
					name: '新品',
				}, {
					name: '赋能',
				}, {
					name: '合成',
				}],
				itemStyle: {
					fontSize: "36rpx",
					fontWeight: "800",
					width: "187rpx",
					height: "88rpx"
				},
				lineBg: '/static/tabbar/user/Select.png',

				currentNum: 0,
				keyword: "",
				list6: [],
				tabIndex: 0,
				dataList: [] //推荐列表

			}
		},
		mounted() {
			this.getBanner()

		},
		methods: {
			//切换tbs
			swpIndex(e) {
				this.current = e.index
				setTimeout(() => {
					this.$refs.paging.reload();
				}, 100);
			},

			//轮播图
			getBanner() {
				bannerList().then(res => {
					this.list6 = res.data.data
				})
			},
			//推荐和发售列表数据
			queryList(pageNo, pageSize) {
				//组件加载时会自动触发此方法，因此默认页面加载时会自动触发，无需手动调用
				//这里的pageNo和pageSize会自动计算好，直接传给服务器即可
				//模拟请求服务器获取分页数据，请替换成自己的网络请求
				const params = {
					pageNo: pageNo,
					pageSize: pageSize,
				}
				if (this.current == 0) {
					homePageList(params).then(res => {
						//将请求的结果数组传递给z-paging res.data.list
						this.$refs.paging.complete(res.data.data);
					}).catch(res => {
						//如果请求失败写this.$refs.paging.complete(false);
						//注意，每次都需要在catch中写这句话很麻烦，z-paging提供了方案可以全局统一处理
						//在底层的网络请求抛出异常时，写uni.$emit('z-paging-error-emit');即可
						this.$refs.paging.complete(false);
					})
				} else {
					// activityCalendarList(params).then(res => {
					// 	//将请求的结果数组传递给z-paging res.data.list
					// 	this.$refs.paging.complete(res.data.data);
					// }).catch(res => {
					// 	//如果请求失败写this.$refs.paging.complete(false);
					// 	//注意，每次都需要在catch中写这句话很麻烦，z-paging提供了方案可以全局统一处理
					// 	//在底层的网络请求抛出异常时，写uni.$emit('z-paging-error-emit');即可
					// 	this.$refs.paging.complete(false);
					// })
				}
			},
		},
	}
</script>

<style scoped lang="scss">
	.item-image {
		border-radius: 24rpx;
		width: 256rpx;
		height: 144rpx;
	}

	.itemn-box {
		margin: 0 auto;
		width: 702rpx;
		height: 200rpx;
		border-bottom: 1px solid #F2F2F2;
	}

	.gonggao-box {
		width: 354rpx;
		height: 174rpx;
	}

	.cpfs-box {
		padding-top: 30rpx;
		width: 366rpx;
		height: 200rpx;
	}

	.item-icon {
		width: 76rpx;
		height: 76rpx;
	}


	.tabs-box {
		width: 686rpx;
		margin: 0rpx auto;
	}

	.mar-10 {
		width: 686rpx;
		margin: 20rpx auto 0;
		// margin-top: 20rpx;
	}

	.indicator-num {
		padding: 2px 0;
		background-color: rgba(0, 0, 0, 0.35);
		border-radius: 100px;
		width: 60rpx;
		@include flex;
		justify-content: center;

		&__text {
			color: #FFFFFF;
			font-size: 12px;
		}
	}

	.backPage {
		// margin-bottom: 60rpx;
		height: 88rpx;
	}
</style>
