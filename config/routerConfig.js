// 需要登录的页面
const whiteList = [
	"/pages/login/register",
	"/pages/login/index",
	"/pages/setting/setting",
	// "/pages/tabbar/home",
	// "/pages/tabbar/community",
	// "/pages/tabbar/notice",
	// "/pages/tabbar/user"
]

// 登录页
// const loginPage = "/pages/login/index"

// 需要拦截的api
const list = ["navigateTo", "redirectTo", "reLaunch"];

// 是否可以跳转,在白名单中或有token，直接跳转
function hasPermission(url) {
	return uni.getStorageSync('token') ? true : whiteList.includes(url)
}

// 循环list添加监听
list.forEach((item) => {
	uni.addInterceptor(item, {
		invoke(e) { // 调用前拦截
			// console.log(e, '跳转的路径')
			//获取要跳转的页面路径（url去掉"?"和"?"后的参数）
			if (!hasPermission(e.url.split('?')[0])) {
				uni.$u.toast('请登录')
				return false
			} else {
				return true
			}
		},
		fail(err) { // 失败回调拦截 
			console.log(err);
		}
	})
})
