<template>
	<view class="root">
		<z-paging ref="paging" v-model="dataList" @query="queryList">
			<view class="status_bar"></view>
			<view class="backPage vp24 vd-f_fd-r vai-c vjc-sb">
				<u-search searchIconSize="18" searchIcon="/static/home/icon_searchL.png" placeholder="日照香炉生紫烟"
					v-model="keyword" :showAction="false" @click="clickPage"></u-search>
				<view class="">
					<image class="icon_Ranking" src="/static/home/icon_Ranking.png" mode=""></image>
				</view>
			</view>
			<view class="">
				<u-swiper height="198" :list="list6" previousMargin="20" nextMargin="20" circular :autoplay="true"
					keyName="bannerUrl" radius="5" bgColor="#ffffff">
					<view slot="indicator" class="vd-f_fd-r vai-c vjc-fe" style="width: 670rpx;">
						<view class="vd-f_fd-r vai-c indicator-num">
							<text class="indicator-num__text">{{ currentNum + 1 }}/{{ list6.length }}</text>
						</view>
					</view>
				</u-swiper>
			</view>

			<view class="mar-10">
				<u-notice-bar bgColor="#fff" color="#000" direction="column" :text="notice"></u-notice-bar>
			</view>

			<view class=" vd-f_fd-r vai-c vjc-sb mar-10">
				<view v-for="(item,index) in columnList" :key="index"  @click="todetail(item.url)">
					<image class="item-icon" :src="item.icon" mode=""></image>
					<view class="vfs28">{{item.text}}</view>
				</view>
			</view>

			<view class="vd-f_fd-r vai-c vjc-sb mar-10">
				<view>
					<image class="gonggao-box" src="/static/home/gonggao.png" mode=""></image>
				</view>
				<view>
					<image class="cpfs-box" src="/static/home/cpfs.png" mode=""></image>
				</view>
			</view>
			<view class="vd-f_fd-r vai-c vjc-sb tabs-box">
				<u-tabs @click="swpIndex" :current="current" :list="tabList" :itemStyle="itemStyle"></u-tabs>
			</view>

			<view class="vd-f_fd-r vai-c vjc-sb vp24 vfw-w" v-show="current==0">
				<view class="itemn-box vai-c vd-f_fd-r vjc-c" v-for="(item,index) in dataList" :key="index">
					<view class="">
						<image class="item-image" :src="item.image" mode=""></image>
						<view class="vfs32 vfwbold" style="text-align: center;">{{item.name}}</view>
					</view>
				</view>
			</view>

			<view class="vd-f_fd-r vai-c vjc-sb vp24 vfw-w" v-show="current==1">
				<view class="itemn-box vai-c vd-f_fd-r vjc-c" v-for="(item,index) in dataList" :key="index">
					<view class="">
						<image class="item-image" :src="item.activityImg" mode=""></image>
						<view class="vfs32 vfwbold" style="text-align: center;">{{item.activityName}}</view>
					</view>
				</view>
			</view>
		</z-paging>

	</view>
</template>

<script>
	import {
		activityCalendarList,
		bannerList,
		homePageList,
		noticeList
	} from "@/api/home.js"
	export default {

		data() {
			return {
				current: 0,
				notice: [],
				itemStyle: {
					fontSize: "36rpx",
					fontWeight: "800",
					width: "300rpx",
					height: "88rpx"

				},
				tabList: [{
					name: '全部推荐',
				}, {
					name: '发售日历',
				}],
				columnList: [{
						icon: "/static/home/icon_island.png",
						url: "/pages/homesecond/island/island",
						text: "星月岛"
					},
					{
						icon: "/static/home/icon_DAO.png",
						url: "/pages/homesecond/dm_space/dm_space",
						text: "DAO梦"
					},
					{
						icon: "/static/home/icon_brand.png",
						url: "/pages/homesecond/brand/brand",
						text: "品牌馆"
					},
					{
						icon: "/static/home/icon_free.png",
						url: "/pages/homesecond/ip/ip",
						text: "自由IP"
					},
					{
						icon: "/static/home/icon_museum.png",
						url: "/pages/homesecond/treasure/treasure",
						text: "旧藏阁"
					}

				],
				text1: 'uView UI众多组件覆盖开发过程的各个需求，组件功能丰富，多端兼容。让您快速集成，开箱即用',
				currentNum: 0,
				keyword: "",
				list6: [],
				tabIndex: 0,
				dataList: [] //推荐列表

			}
		},
		mounted() {
			this.getBanner()
			this.geNoticeList()
		},
		methods: {

			//跳转搜索页
			clickPage() {
				console.log(1111)
				uni.$u.route({
					url: '/pages/searchPage/searchPage'
				})
			},
			//跳转星月岛那一排详情
			todetail(item){
				uni.$u.route({
					url: item
				})
			},
			//切换tbs
			swpIndex(e) {
				this.current = e.index
				setTimeout(() => {
					this.$refs.paging.reload();
				}, 100);
			},

			//公告
			geNoticeList() {
				noticeList().then(res => {
					res.data.data.map(item => {
						this.notice.push(item.noticeTitle)
					})
				})
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
					activityCalendarList(params).then(res => {
						//将请求的结果数组传递给z-paging res.data.list
						this.$refs.paging.complete(res.data.data);
					}).catch(res => {
						//如果请求失败写this.$refs.paging.complete(false);
						//注意，每次都需要在catch中写这句话很麻烦，z-paging提供了方案可以全局统一处理
						//在底层的网络请求抛出异常时，写uni.$emit('z-paging-error-emit');即可
						this.$refs.paging.complete(false);
					})
				}
			},
		},
	}
</script>

<style scoped lang="scss">
	.item-image {
		border-radius: 16px;
		width: 342rpx;
		height: 342rpx;
	}

	.itemn-box {
		margin-bottom: 32rpx;
		width: 342rpx;
		height: 400rpx;
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

	.icon_Ranking {
		width: 48rpx;
		height: 48rpx;
	}

	/deep/.u-search__content {
		flex: none;
		width: 578rpx !important;
	}

	.backPage {
		// margin-bottom: 60rpx;
		height: 88rpx;
	}
</style>
