<template>
	<view class="root">
		<view class="status_bar"></view>
		<view class="backPage vp24 vd-f_fd-r vai-c vjc-fs">
			<image @click="back" class="icon_fh" src="/static/login/icon_fh.png" mode=""></image>
		</view>
		<view class="stong-box vfwbold vfs60 widh-630">
			登录获得更多精彩
		</view>

		<view class="">
			<view class="input-box widh-630 vd-f_fd-r vjc-sb vai-c">
				<view class="vfs30 label-box">手机号</view>
				<u--input type="number" placeholder="请输入手机号" border="none" v-model="form.memberPhone"></u--input>
			</view>

			<view v-show="form.loginType == 1" class="input-box widh-630 vd-f_fd-r vjc-sb vai-c">
				<view class=" vfs30 label-box">密码</view>
				<u--input type="password" placeholder="请输入密码" border="none" v-model="form.password"></u--input>
			</view>


			<view v-show="form.loginType == 2" class="input-box widh-630 vd-f_fd-r vjc-sb vai-c">
				<view class=" vfs30 label-box">验证码</view>
				<u--input type="number" placeholder="请输入验证码" border="none" v-model="form.smsCode">
					<template slot="suffix">
						<u-code ref="uCode" @change="codeChange" :seconds="seconds" changeText="xs后重新发送"></u-code>
						<view @tap="getCode" class="vfs28 col-bul">{{tips}}</view>
					</template>
				</u--input>

				<!-- <view class=" vfs28 label-box col-bul">获取验证码</view> -->
			</view>
		</view>

		<view class="vd-f_fd-r vai-c widh-630" style="margin-top: 56rpx;">
			<image v-if="select == false" @click=" select = !select" class="icon_noSelect"
				src="/static/login/icon_noSelect.png" mode=""></image>
			<image v-else @click=" select = !select" class="icon_noSelect" src="/static/login/icon_Select.png" mode="">
			</image>
			<view class="vfs26" style="margin-left: 15rpx;">
				我已阅读并同意<text class="col-bul" @click="show = true">《元本空间用户服务协议》</text>
			</view>
		</view>

		<view class="vd-f_fd-r vai-c widh-630 vh44px">
			<u-button class="custom-style" :disabled="disabled" :loading="disabled" text="登录" @click="login"></u-button>
		</view>

		<view class="vd-f_fd-r vjc-sb widh-630 vh44px">
			<view class="col-bul vfs30" @click="navReg(0)">
				免费注册
			</view>
			<view v-show="form.loginType == 1" class="vfs30" @click="form.loginType = 2">
				验证码登录
			</view>
			<view v-show="form.loginType == 2" class="vfs30" @click="form.loginType = 1">
				密码登录
			</view>
		</view>
		<view class="po-frd">
			<view class="vd-f_fd-r vjc-c vh44px vfs30" style="width: 750rpx;" @click="navReg(1)">
				忘记密码
			</view>
		</view>

		<view>
			<u-modal @confirm="confirm" :show="show" confirmText="同意" :title="'用户协议'">
				<view class="slot-content">
					<p>1)根据该协议条款使用该软件;</p>
					<p>(2)复制和备份;</p>
					<p>(3)不对文档作任何增加或修改以文档下
						载的最初形式将此软件拷贝给他人;</p>
					<p> (4)在网址上通过email或者其他任何物理
						媒体分发该软件。</p>
					<p>你不可以：</p>
					<p>(1)对本系统进行逆向工程、反汇编、解体
						拆卸或任何试图发现该软件工作程序获源
						代码的行为;</p>
					<p>(2)未经_________有限公司的书面许可出
						售租赁该程序;</p>
					<p>(3)创造派生性产品包括含有该系统的更大
						的系统或另外的程序和包裹;</p>
				</view>
			</u-modal>
		</view>
	</view>
</template>

<script>
	import {
		sendSmsCode,
		login
	} from "@/api/login.js"
	export default {
		data() {
			return {
				show: false, //协议弹层
				tips: '',
				seconds: 60,
				select: false, //是否勾选服务
				disabled: false, //点击后禁用
				form: {
					smsCode: "",
					loginType: 1, //1密码2验证码
					memberPhone: '',
					password: '',

				}
			};
		},
		methods: {
			confirm() {
				this.show = false
			},
			codeChange(text) {
				this.tips = text;
			},
			getCode() {
				if (this.$refs.uCode.canGetCode) {
					if (!/^[1][3,4,5,6,7,8,9][0-9]{9}$/.test(this.form.memberPhone)) {
						uni.$u.toast('请输入正确的手机号！');
						return;
					}
					// 模拟向后端请求验证码
					uni.showLoading({
						title: '正在获取验证码'
					})
					let data = {
						request: {
							phone: this.form.memberPhone
						}
					}

					sendSmsCode(data).then(res => {
						uni.hideLoading();
						// 这里此提示会被this.start()方法中的提示覆盖
						uni.$u.toast('验证码已发送');
						// 通知验证码组件内部开始倒计时
						this.$refs.uCode.start();
					}).catch(err => {
						console.log(data)
					})
				} else {
					uni.$u.toast('倒计时结束后再发送');
				}
			},

			//登录
			login() {
				if (!this.select) {
					uni.$u.toast('请先勾选服务协议！');
					return;
				}

				if (!/^[1][3,4,5,6,7,8,9][0-9]{9}$/.test(this.form.memberPhone)) {
					uni.$u.toast('请输入正确的手机号！');
					return;
				}

				if (this.form.loginType == 1) {
					this.form.smsCode = undefined
					if (!this.form.password) {
						uni.$u.toast('密码不能为空！');
						return;
					}
				} else {
					this.form.password = undefined
					if (!this.form.smsCode) {
						uni.$u.toast('验证码不能为空！');
						return;
					}
				}

				this.disabled = true
				login({
					request: this.form
				}).then(res => {
					this.disabled = false
					let token = uni.setStorageSync("token", res.data.data.access_token)
					// console.log(res.data.data.access_token)
					uni.$u.route({
						type: "tab",
						url: 'pages/tabbar/home'
					})
				}).catch(err => {
					// console.log(err)
					this.disabled = false
				})
			},
			navReg(type) {
				uni.$u.route({
					url: 'pages/login/register',
					params: {
						type
					}
				})
			},
			back() {
				uni.$u.route({
					type: "back",
					// url: 'pages/login/register'
				})
			}
		}
	}
</script>

<style lang="less">
	.po-frd {
		position: fixed;
		bottom: 148rpx;
	}

	.custom-style {
		background: url(@/static/login/Button_sh.png) no-repeat;
		background-size: 100% 100%;
	}

	.col-bul {
		color: #013FE2;
	}

	.widh-630 {
		width: 630rpx;
		margin: 0 auto 24rpx;
	}

	.icon_noSelect {
		width: 26rpx;
		height: 26rpx;
	}

	.label-box {
		width: 180rpx;
	}

	/deep/.custom-style {
		height: 88rpx !important;

		width: 614rpx !important;
		border-radius: 48rpx !important;
		color: #fff !important;
	}

	.input-box {
		height: 104rpx;
		border-bottom: #f7f7f7 2rpx solid;
	}

	.stong-box {
		// margin-left: 60rpx;
		height: 84rpx;
		margin-bottom: 120rpx !important;
	}

	.icon_fh {
		height: 32rpx;
		width: 32rpx;
	}

	.backPage {
		margin-bottom: 60rpx;
		height: 88rpx;
	}
</style>
