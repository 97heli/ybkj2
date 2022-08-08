const http = uni.$u.http

// 测试添加
export function ceshipost(params, config = {}) {
	return http.post('/api/ymxqChild', params, config)
}

// banner图
export function bannerList(data) {
	return http.get('auser/user/homePage/bannerList', data)
}

// 推荐
export function homePageList(data) {
	return http.get('auser/user/homePage/homePageList', data)
}

// 公告
export function noticeList(data) {
	return http.get('auser/user/homePage/noticeList', data)
}


//发售日历
export function activityCalendarList(data) {
	return http.get('auser/user/homePage/activityCalendarList', data)
}
