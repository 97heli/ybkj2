const http = uni.$u.http

// 登录
export function login(params, config = {}) {
	return http.post('auser/user/login/doLogin', params, config)
}


// 注册
export function register(params, config = {}) {
	return http.post('auser/user/login/register', params, config)
}


// 找回密码
export function forgetPwd(params, config = {}) {
	return http.post('auser/user/login/forgetPwd', params, config)
}

// 短信验证
export function sendSmsCode(params, config = {}) {
	return http.post('functional/common/sendSmsCode', params, config)
}
// // 注册
// export function register(data) {
// 	return http.get('/api/ymxqChild', data)
// }
