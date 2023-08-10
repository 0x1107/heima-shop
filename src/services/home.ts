import type { BannerItem } from '@/types/home'
import { http } from '@/utils/http'

//首页广告轮播图接口
export const getHomeBannerAPI = (distributionSite = 1) => {
  return http<BannerItem[]>({
    method: 'GET',
    url: '/home/banner',
    data: {
      distributionSite,
    },
  })
}

//首页分类
export const getHomeCategoryAPI = () => {
  return http<[]>({
    method: 'GET',
    url: '/home/category/mutli'
  })
}

//首页热门推荐
export const getHomeHotAPI = () => {
  return http<[]>({
    method: 'GET',
    url: '/home/hot/mutli'
  })
}