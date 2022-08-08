const http = uni.$u.http

// banner图
export function bannerList(data) {
	return http.get('auser/user/homePage/bannerList', data)
}

// 推荐
export function homePageList(data) {
	return http.get('auser/user/homePage/homePageList', data)
}
