<script setup lang="ts">

import { getHomeBannerAPI } from '@/services/home'
import { getHomeCategoryAPI } from '@/services/home'
import { getHomeHotAPI } from '@/services/home'
import { onLoad } from '@dcloudio/uni-app'
import CustomNavbar from './components/CustomNavbar.vue'
import CategoryPanel from './components/CategoryPanel.vue'
import HotPannel from './components/HotPannel.vue'
import { ref } from 'vue'
import type { BannerItem, HotItem } from '@/types/home'
import type { CategoryItem } from '@/types/home'
import type { XtxGuessInstance } from '@/types/components'
import PageSkeleton from '@/pages/index/components/PageSkeleton.vue'

const bannerList = ref<BannerItem[]>([])
const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()
  bannerList.value = res.result
}

const categoryList = ref<CategoryItem[]>([])
const getHomeCategoryData = async () => {
  const res = await getHomeCategoryAPI()
  categoryList.value = res.result
}

const hotList = ref<HotItem[]>([])
const getHomeHotData = async () => {
  const res = await getHomeHotAPI()
  hotList.value = res.result
}

onLoad(async () => {
  isLoading.value = true
  await Promise.all([getHomeBannerData(), getHomeCategoryData(), getHomeHotData()])
  isLoading.value = false
})

const guessRef = ref<XtxGuessInstance>()
const scrolltolower = () => {
  guessRef.value?.getMore()
}

const isLoading = ref(false)

const isTriggered = ref(false)
//下拉刷新
const refresherrefresh = async () => {
  isTriggered.value = true
  guessRef.value?.resetData()
  await Promise.all([getHomeBannerData(), getHomeCategoryData(), getHomeHotData(), guessRef.value?.getMore])
  isTriggered.value = false
}

</script>

<template>
  <CustomNavbar />
  <scroll-view refresher-enabled="true" @refresherrefresh="refresherrefresh" :refresher-triggered="isTriggered"
    @scrolltolower='scrolltolower' class="scroll-view" scroll-y>
    <PageSkeleton v-if="isLoading" />
    <template v-else>
      <XtxSwiper :list="bannerList" />
      <CategoryPanel :list="categoryList" />
      <HotPannel :list="hotList" />
      <XtxGuess ref='guessRef' />
    </template>
  </scroll-view>
</template>

<style lang="scss">
//
page {
  background-color: #F7F7F7;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.scroll-view {
  flex: 1;
}
</style>
