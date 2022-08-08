const http = uni.$u.http

// 获取藏品列表
export function collectionList(data) {
	return http.get('auser/user/userCenter/collectionList', data)
}

// 获取作品列表
export function worksList(data) {
	return http.get('auser/user/userCenter/worksList', data)
}

// 获取订单列表
export function userOrderList(data) {
	return http.get('auser/user/userCenter/userOrderList', data)
}


//获取点赞粉丝数
export function selectUserGive(data) {
	return http.get('auser/user/userCenter/selectUserGive', data)
}