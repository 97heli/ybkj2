uni.$u.http.setConfig((config) => {
	/* config 为默认全局配置*/


	config.baseURL = `http://118.31.21.146:7749/`; // 根域名
	// 请求头
	let token = uni.getStorageSync("token")
	config.header = {
		"X-ACCESS-TOKEN": token,
		"Content-Type": "application/json",
	}
	config.method = 'GET' // 请求方法

	config.dataType = 'json'

	// #ifndef MP-ALIPAY
	config.responseType = 'text' // 响应类型
	// #endif

	// 注：如果局部custom与全局custom有同名属性，则后面的属性会覆盖前面的属性，相当于Object.assign(全局，局部)
	config.custom = {
		toast: true, // 是否有错误弹框
		catch: true, // 是否需要进入catch
	} // 全局自定义参数默认值

	// #ifdef H5 || APP-PLUS || MP-ALIPAY || MP-WEIXIN
	config.timeout = 60000
	// #endif

	// #ifdef APP-PLUS
	config.sslVerify = true
	// #endif

	// #ifdef H5
	// 跨域请求时是否携带凭证（cookies）仅H5支持（HBuilderX 2.6.15+）
	config.withCredentials = false
	// #endif

	// #ifdef APP-PLUS
	config.firstIpv4 = false // DNS解析时优先使用ipv4 仅 App-Android 支持 (HBuilderX 2.8.0+)
	// #endif



	return config
})




// 请求拦截器
uni.$u.http.interceptors.request.use((config) => { // 可使用async await 做异步操作
	config.header = {
		...config.header,
		// a: 1 // 演示拦截器header加参
	}
	// 演示custom 用处
	// if (config.custom.auth) {
	//   config.header.token = 'token'
	// }
	// if (config.custom.loading) {
	//  uni.showLoading()
	// }
	// 演示
	// if (!token) { // 如果token不存在，return Promise.reject(config) 会取消本次请求
	// 	return Promise.reject(config)
	// }
	return config
}, config => { // 可使用async await 做异步操作
	return Promise.reject(config)
})


// 响应拦截器
uni.$u.http.interceptors.response.use((response) => {
	// console.log(response)
	if (response.data.code !== 200) { // 服务端返回的状态码不等于200，则reject(),最好不要reject,因为不喜欢用 catch 去捕获异常

		if (response.config.custom.toast) { // 自定义参数的作用
			uni.$u.toast(response.data.msg)
		}

		// 需要抛出异常的时候,就抛出,不然就返回 pending 中的 promise ,就不会进入 catch 中
		if (response.config.custom.catch) {
			return Promise.reject(response) // return Promise.reject 可使promise状态进入catch
		} else {
			return new Promise(() => {})
		}
	}

	return response
}, (response) => {
	/*  对响应错误做点什么 （statusCode !== 200）*/
	// console.log(response)
	return Promise.reject(response)
})
