//添加拦截器

import { useMemberStore } from "@/stores/modules/member"

const baseURL = 'https://pcapi-xiaotuxian-front-devtest.itheima.net'

const httpInterceptor = {
    invoke(options: UniApp.RequestOptions) {
        //拼接地址
        if (!options.url.startsWith('http')) {
            options.url = baseURL + options.url
        }
        //超时时间
        options.timeout = 10000
        //请求头
        options.header = {
            ...options.header,
            'source-client': 'miniapp',
        }
        //Token
        const memberStore = useMemberStore()
        const token = memberStore.profile?.token
        if (token) {
            options.header.Authorization = token
        }
        console.log(options)
    }
}

uni.addInterceptor('request', httpInterceptor)
uni.addInterceptor('uploadFile', httpInterceptor)

interface Data<T> {
    code: string
    msg: string
    result: T
}

//泛型
export const http = <T>(option: UniApp.RequestOptions) => {
    return new Promise<Data<T>>((resolve, reject) => {
        uni.request({
            ...option,
            //请求成功
            success(res) {
                if (res.statusCode >= 200 && res.statusCode < 300) {
                    resolve(res.data as Data<T>)
                } else if (res.statusCode == 401) {
                    //清理用户信息，去登录
                    const memberStore = useMemberStore()
                    memberStore.clearProfile()
                    uni.navigateTo({
                        url: '/pages/login/login'
                    })
                    reject(res)
                } else {
                    uni.showToast({
                        title: (res.data as Data<T>).msg || '请求错误',
                        icon: 'none'
                    })
                    reject(res)
                }

            },
            fail(err) {
                uni.showToast({
                    title: '网络错误，换个网络试试',
                    icon: 'none'
                })
                reject(err)
            }
        })
    })
}