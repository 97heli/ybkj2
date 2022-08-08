<template>
	<view>
			<u-cell-group>
				<block v-for="(item,index) in set_list" :ket = 'index'>
					<u-cell :icon="item.icon" :title="item.name" :isLink = 'true' :border="false"></u-cell>
				</block>
			</u-cell-group>
			<view class="" style="text-decoration: underline;text-align: center" @click="loginout" v-if="token == 'true'">
				退出登录
			</view>
			<view class="" style="text-decoration: underline;text-align: center" @click="loginin" v-else>
				登录
			</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				set_list:[
					{name:'账号与安全',icon:'/static/tabbar/user/setting/1.png' ,url:'#'},
					{name:'隐私设置',icon:'/static/tabbar/user/setting/2.png'},
					{name:'银行卡管理',icon:'/static/tabbar/user/setting/3.png'},
					{name:'我的优惠券',icon:'/static/tabbar/user/setting/4.png'},
					{name:'兑换通道',icon:'/static/tabbar/user/setting/5.png'},
					{name:'铸造藏品',icon:'/static/tabbar/user/setting/6.png'},
					{name:'我的燃料',icon:'/static/tabbar/user/setting/7.png'},
					{name:'检查更新',icon:'/static/tabbar/user/setting/8.png'},
					{name:'关于我们',icon:'/static/tabbar/user/setting/9.png'},
				],
				token:uni.getStorageSync('token')? 'true' :'false'
			};
		},
		methods:{
			loginout(){
				uni.clearStorageSync()
				uni.redirectTo({
					url:'/pages/login/index'
				})
			},
			loginin(){
				uni.reLaunch({
					url:'/pages/login/index'
				})
			}
		}
	}
</script>

<style lang="scss">
	/deep/ .u-cell__body{
		height: 124rpx;
		
	}
</style>
