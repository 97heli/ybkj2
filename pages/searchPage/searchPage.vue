<!-- 在这个文件对每个tab对应的列表进行渲染 -->
<template>
	<view class="content">
		<!-- 这里设置了z-paging加载时禁止自动调用reload方法，自行控制何时reload（懒加载）-->
		<!--  :enable-back-to-top="currentIndex===tabIndex" 在微信小程序上可以多加这一句，因为默认是允许点击返回顶部的，但是这个页面有多个scroll-view，会全部返回顶部，所以需要控制是当前index才允许点击返回顶部 -->
		<z-paging ref="paging" v-model="dataList" @query="queryList" :fixed="false" :auto="false">
			<!-- 如果希望其他view跟着页面滚动，可以放在z-paging标签内 -->
			<view class="list-box">
				<view class="item" v-for="(item,index) in dataList" :key="index" @click="itemClick(item)">
					<view class="item-title">{{item.title}}</view>
					<view>
						<image class="item-detail"
							:src="'https://img0.baidu.com/it/u=3798217922,3880088897&fm=253&fmt=auto&app=120&f=JPEG?w=889&h=500'"
							mode=""></image>
					</view>
					<view class="felx-start-left bottom-con">
						<view class="zding" v-if="index==0">置顶</view>
						<view class="ma-lf15">{{item.userName}}</view>
						<view class="ma-lf15">{{!item.commentNum?0:item.commentNum}}评论</view>
						<view class="ma-lf15">{{item.dateTime}}</view>
					</view>
				</view>
			</view>

		</z-paging>
	</view>
</template>

<script>
	// import {
	// 	getMenu,
	// 	meunContentList
	// } from "@/api/api.js"
	export default {
		data() {
			return {
				//v-model绑定的这个变量不要在分页请求结束中自己赋值！！！
				dataList: [],
				firstLoaded: false,
				total: 0,
			}
		},
		props: {
			// //当前组件的index，也就是当前组件是swiper中的第几个
			// tabList: {
			// 	type: Array,
			// 	default: function() {
			// 		return []
			// 	}
			// },
			// tabIndex: {
			// 	type: Number,
			// 	default: function() {
			// 		return 0
			// 	}
			// },
			// //当前swiper切换到第几个index
			// currentIndex: {
			// 	type: Number,
			// 	default: function() {
			// 		return 0
			// 	}
			// }
		},
		methods: {
			queryList(pageNo, pageSize) {
				// console.log(this.tabList[this.tabIndex])背景视频
				//组件加载时会自动触发此方法，因此默认页面加载时会自动触发，无需手动调用
				//这里的pageNo和pageSize会自动计算好，直接传给服务器即可
				//模拟请求服务器获取分页数据，请替换成自己的网络请求
				const params = {
					pageNum: pageNo,
					pageSize: pageSize,
					// dictMenuId: this.tabList[this.tabIndex].dictMenuId
				}
				// console.log(params)
				meunContentList(params).then(res => {
					//将请求的结果数组传递给z-paging
					// console.log(res)
					if (this.total == pageSize) {
						// this.total = 0
						this.$refs.paging.complete([]);
						this.$refs.paging.complete(res.rows);
					} else if (pageNo == 1) {
						this.total = res.total
						if (this.total == pageSize) {
							this.$refs.paging.complete([]);
						}
						this.$refs.paging.complete(res.rows);
					} else {
						this.$refs.paging.complete(res.rows);
					}
					// this.$refs.paging.complete(res.rows);
					this.firstLoaded = true;
				}).catch(res => {
					//如果请求失败写this.$refs.paging.complete(false);
					//注意，每次都需要在catch中写这句话很麻烦，z-paging提供了方案可以全局统一处理
					//在底层的网络请求抛出异常时，写uni.$emit('z-paging-error-emit');即可
					this.$refs.paging.complete(false);
				})
			},
			itemClick(item) {
				// console.log(item)
				this.$navPages("/pages/secondPage/newsDetail", {
					id: item.id
				})
			},
			jumpView(item) {
				this.$navPages("/pages/video/index/index", {
					id: item.id
				})
			},
			jumpYview(item) {
				this.$navPages("/pages/pay/broadcastCloud", {
					url: item.souce
				})
			}
		}
	}
</script>

<style>
	.time-box {
		margin: 0 32rpx 12rpx;
		font-size: 24rpx;
		font-weight: 400;
		color: #9A9A9A;
	}

	/* 注意:父节点需要固定高度，z-paging的height:100%才会生效 */
	.content {
		height: 100%;
	}

	.zding {
		margin-left: 32rpx;
		color: #D34940;
		font-size: 24rpx;
	}

	.ma-lf15 {
		margin-left: 15rpx;
		color: #888888;
		font-size: 24rpx;
	}

	.bottom-con {
		height: 74rpx;
	}

	.item-detail {
		width: 100%;
		height: 368rpx;
	}

	.item-title {
		padding-top: 24rpx;
		font-size: 32rpx;
		font-weight: 400;
		color: #000000;
		margin: 0 32rpx 12rpx;
	}

	.item {
		margin-top: 24rpx;
		background-color: #fff;
		width: 100%;
	}

	.list-box {
		// background-color: #F7F7F7;
		width: 100%;
		padding-bottom: 150rpx;
	}
</style>
