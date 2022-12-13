import axios from 'axios';
import {
	ElMessage
} from 'element-plus';
import store from '@/store';

/*
实验
*/
// 创建一个 axios 实例
const service = axios.create({
	baseURL: 'http://127.0.0.1:4523/mock/1014620', //url = base url + request url  process.env.VUE_APP_BASE_URL https://api.imooc-admin.lgdsunday.club/api
	timeout: 5000,

})

// 添加请求拦截器
service.interceptors.request.use(
	function (config) {
		// console.log(store.state.user.token);
		// 在发送请求之前做些什么
		// if (store.state.user.token) {
		// 	config.headers.Authorization = `Bearer ${store.state.token}`
		// }
		return config
	},
	function (error) {
		// 对请求错误做些什么
		console.log(error)

		return Promise.reject(error)
	}
)

// 添加响应拦截器
service.interceptors.response.use(
	//请求成功
	function (response) {
		// console.log(response.data)
		// console.log("触发响应");
		// 2xx 范围内的状态码都会触发该函数。
		// 对响应数据做点什么
		const {
			success,
			message,
			data
		} = response.data;
		if (success) {
			//成功,返回数据
			console.log("响应成功");
			ElMessage({
				message,
				type: 'success'
			});
			return data
		} else {
			//失败，提示
			ElMessage.error(message)
			return Promise.reject(new Error(message))
		}
	},
	function (error) {
		// 超出 2xx 范围的状态码都会触发该函数。
		// 对响应错误做点什么
		console.log(error)
		ElMessage.error(error.message)
		return Promise.reject(error)
	}
)

export default service