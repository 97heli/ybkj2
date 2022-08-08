const http = uni.$u.http

// 测试添加
export function listBase(data) {
	return http.post('product/product/productList/list',data)
}



