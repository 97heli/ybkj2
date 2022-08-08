<template>
	<view class="root">
		<view class="status_bar"></view>
		<view class="backPage vp24 vd-f_fd-r vai-c vjc-fs">
			<image @click="back" class="icon_fh" src="/static/login/icon_fh.png" mode=""></image>
		</view>
		<view class="stong-box vfwbold vfs60 widh-630">
			{{type==0?"新用户注册":"忘记密码"}}
		</view>

		<view class="">

			<view class="input-box widh-630 vd-f_fd-r vjc-sb vai-c">
				<view class="vfs30 label-box">手机号</view>
				<u--input type="number" placeholder="请输入手机号" border="none" v-model="form.phone"></u--input>
			</view>

			<view class="input-box widh-630 vd-f_fd-r vjc-sb vai-c">
				<view class=" vfs30 label-box">验证码</view>
				<u--input type="number" placeholder="请输入验证码" border="none" v-model="form.smsCode">
					<template slot="suffix">
						<u-code ref="uCode" @change="codeChange" :seconds="seconds" changeText="xs后重新发送"></u-code>
						<view @tap="getCode" class="vfs28 col-bul">{{tips}}</view>
					</template>
				</u--input>

				<!-- <view class=" vfs28 label-box col-bul">获取验证码</view> -->
			</view>
			<view class="input-box widh-630 vd-f_fd-r vjc-sb vai-c">
				<view class="vfs30 label-box">设置密码</view>
				<u--input :type="showPassz?'password':'text'" placeholder="请输入密码" border="none" v-model="form.password">
					<view slot="suffix">
						<image v-if="showPassz" @click="showPassz = !showPassz" class="icon_Hide"
							src="/static/login/icon_Hide.png" mode=""></image>
						<image v-else @click="showPassz = !showPassz" class="icon_Hide"
							src="/static/login/icon_Show.png" mode=""></image>
					</view>
				</u--input>
			</view>

			<view class="input-box widh-630 vd-f_fd-r vjc-sb vai-c">
				<view class=" vfs30 label-box">确认密码</view>
				<u--input :type="showPassq?'password':'text'" placeholder="请输入密码" border="none"
					v-model="form.confirmPassword">
					<view slot="suffix">
						<image v-if="showPassq" @click="showPassq = !showPassq" class="icon_Hide"
							src="/static/login/icon_Hide.png" mode=""></image>
						<image v-else @click="showPassq = !showPassq" class="icon_Hide"
							src="/static/login/icon_Show.png" mode=""></image>
					</view>
				</u--input>
			</view>
		</view>

		<view class="vd-f_fd-r vai-c widh-630 vh44px">
			<u-button class="custom-style" :disabled="disabled" :loading="disabled" @click="register">
				{{type==0?"注册":"找回密码"}}
			</u-button>
		</view>
	</view>
</template>

<script>
	import {
		sendSmsCode,
		register,
		forgetPwd
	} from "@/api/login.js"
	export default {
		data() {
			return {
				type: 0, //1忘记密码0注册
				tips: '',
				seconds: 60,
				showPassz: true,
				showPassq: true,
				disabled: false,
				form: {
					smsCode: '',
					phone: '',
					password: '',
					confirmPassword: '',

				}
			};
		},
		onLoad(opt) {
			this.type = opt.type
		},
		methods: {
			codeChange(text) {
				this.tips = text;
			},
			getCode() {
				if (this.$refs.uCode.canGetCode) {
					if (!/^[1][3,4,5,6,7,8,9][0-9]{9}$/.test(this.form.phone)) {
						uni.$u.toast('请输入正确的手机号！');
						return;
					}
					// 模拟向后端请求验证码
					uni.showLoading({
						title: '正在获取验证码'
					})
					sendSmsCode({
						request: {
							phone: this.form.phone
						}
					}).then(res => {
						uni.hideLoading();
						// 这里此提示会被this.start()方法中的提示覆盖
						uni.$u.toast('验证码已发送');
						// 通知验证码组件内部开始倒计时
						this.$refs.uCode.start();
					}).catch(err => {

					})
				} else {
					uni.$u.toast('倒计时结束后再发送');
				}
			},
			register() {
				if (!/^[1][3,4,5,6,7,8,9][0-9]{9}$/.test(this.form.phone)) {
					uni.$u.toast('请输入正确的手机号！');
					return;
				}
				if (!this.form.smsCode) {
					uni.$u.toast('验证码不能为空！');
					return;
				}
				if (!this.form.password) {
					uni.$u.toast('密码不能为空！');
					return;
				}
				if (!this.form.confirmPassword) {
					uni.$u.toast('确认密码不能为空！');
					return;
				}
				if (this.form.confirmPassword !== this.form.password) {
					uni.$u.toast('密码和确认密码不一致！');
					return;
				}

				this.disabled = true

				if (this.type == 0) {
					register({
						request: this.form
					}).then(res => {
						this.disabled = false
						uni.$u.toast("注册成功!");
						setTimeout(() => {
							uni.$u.route({
								url: 'pages/login/index'
							})
						})
					}).catch(err => {
						this.disabled = false
					})
				} else {
					forgetPwd({
						request: this.form
					}).then(res => {
						this.disabled = false
						uni.$u.toast("找回密码成功!");
						setTimeout(() => {
							uni.$u.route({
								url: 'pages/login/index'
							})
						})
					}).catch(err => {
						this.disabled = false
					})
				}
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
	// /deep/.u-button--success {
	// 	color: #013FE2;
	// 	background-color: #fff !important;
	// 	border: none;
	// }

	.icon_Hide {
		height: 36rpx;
		width: 36rpx;
	}

	.col-bul {
		color: #013FE2;
	}

	.custom-style {
		background: url(@/static/login/Button_sh.png) no-repeat;
		background-size: 100% 100%;
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
