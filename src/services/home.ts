import type { BannerItem, guessItem, GuessItem } from '@/types/home'
import { http } from '@/utils/http'
import type { PageParams, PageResult } from '@/types/global'

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
    url: '/home/category/mutli',
  })
}

//首页热门推荐
export const getHomeHotAPI = () => {
  return http<PageResult<GuessItem>>({
    method: 'GET',
    url: '/home/hot/mutli',
  })
}

//首页热门推荐
export const getHomeGuessAPI = (data?: PageParams) => {
  return http<PageResult<GuessItem>>({
    method: 'GET',
    url: '/home/goods/guessLike',
    data: data
  })
}
