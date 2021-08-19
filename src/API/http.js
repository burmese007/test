import axios from 'axios'

const http=axios.create({
    // baseURL: 'https://testbsc.nekobank.com:9000',
	baseURL: 'http://192.168.1.2:9012',
	headers: {
		'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
	},
	timeout: 50000
})

http.interceptors.request.use(function (config) {
	if (sessionStorage.getItem('Token')!=null) {
		// config.headers.Authorization = sessionStorage.getItem('Token')	
		config.headers['Authorization'] = 'Bearer ' + sessionStorage.getItem('Token')
	}

	return config;
	
},)

http.interceptors.response.use(function (response) {
	return response.data;
},function (error) {
	return Promise.reject(error)
})

export default http;
