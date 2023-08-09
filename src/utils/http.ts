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