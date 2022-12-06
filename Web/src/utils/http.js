import axios from 'axios'
import qs from 'qs'
import router from '../router'
import { message } from 'ant-design-vue'

let axiosIns = axios.create({});

if (process.env.NODE_ENV == 'development') {
    axiosIns.defaults.baseURL = 'https://localhost:7263/'
} else if (process.env.NODE_ENV == 'debug') {
    axiosIns.defaults.baseURL = '***';
} else if (process.env.NODE_ENV == 'production') {
    axiosIns.defaults.baseURL = window.Server.url;
}

axiosIns.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest';
axiosIns.defaults.headers.get['X-Requested-With'] = 'XMLHttpRequest';
axiosIns.defaults.responseType = 'json';
axiosIns.defaults.timeout = 15000;

// axiosIns.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axiosIns.defaults.headers.post['Content-Type'] = 'application/json';
//数据序列化
// axiosIns.defaults.transformRequest = [function (data) {  
//   return qs.stringify(data);
// }];

axiosIns.defaults.validateStatus = function () {
    return true;
};

/**
 * 请求拦截
 */
axiosIns.interceptors.request.use(
    config => {
        //配置config
        config.headers.Accept = '*/*';
        if (config.ContentType === "form") {

            config.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

            config.data = qs.stringify(config.data);

        }
        if (window.sessionStorage.getItem('token')) {

            let token = window.sessionStorage.getItem('token');

            let accessToken = JSON.parse(token).accessToken;

            config.headers.accessToken = accessToken;

        }
        config.headers.projectId = "ROBOT_v1";

        return config;

    },
    error => {
        return Promise.error(error);
    });
/**
 * 响应拦截
 */
axiosIns.interceptors.response.use(
    response => {
        let data = response.data;
        let status = response.status;
        if (status === 200 || status === 201 || status === 202) {
            if (data.code == 500) {
                return message.error(data.message);
            }
            return Promise.resolve(data);
        }
        if (status === 501) {
            message.error(response.data.Message);
        }
        else {
            return Promise.reject(response);
        }
    },
    // 服务器状态码不是2开头的的情况
    // 然后根据返回的状态码进行一些操作，例如登录过期提示，错误提示等等
    error => {
        var msg;
        if (!error.response) {
            message.error('网络异常请检查');
        } else {
            if (error.response.status) {
                switch (error.response.status) {
                    case 400:
                        msg = '错误请求！'
                        break;
                    case 401:
                        msg = '未登录,请登录1'
                        break;
                    case 403:
                        msg = '登录过期，请重新登录！'
                        break;
                    // 404请求不存在
                    case 404:
                        msg = '网络请求不存在！'
                        break;
                    // 其他错误，直接抛出错误提示
                    default:
                        console.log(msg)
                }
                return Promise.reject(error.response);


            } else {
                // Message.error({
                //   message: '连接服务器失败！'
                // });
            }
        }

    }
);

let ajaxMethod = ['get', 'post', 'delete', "put"];
let http = {};

ajaxMethod.forEach((method) => {

    //数组取值的两种方式
    http[method] = function (uri, data, config) {

        return new Promise(function (resolve, reject) {

            axiosIns[method](uri, data, config).then((response) => {

                // console.log(response)
                /*根据后台数据进行处理
                 *1 code===200   正常数据+错误数据     code!==200   网络异常等
                 *2 code===200   正常数据     code!==200   错误数据+网络异常等
                 * 这里使用的是第一种方式
                 */
                // console.log(response)
                if (response.status === 201 || response.status === 202) resolve(response);

                if (response.code === 11030110 || response.code === 11030113 || response.code === 11030111 || response.code === 11030112) {

                    // Message.warning({
                    //   content: 'token失效,需要重新登录!',
                    //   duration: 3
                    // })

                    router.push({
                        name: 'login'
                    });

                } else {

                    resolve(response);

                }

            }).catch((response) => {
                reject(response)
            })
        })
    }
});

http['GetServiceUrl'] = axiosIns.defaults.baseURL;

export default http;