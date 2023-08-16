import type { PageParams } from "@/types/global"
import type { HotResult } from "@/types/hot"
import { http } from "@/utils/http"

type HotParam = PageParams & { subType?: string }

export const getHotRecommendAPI = (url: string, data?: HotParam) => {
    return http<HotResult>({
        method: 'GET',
        url,
        data
    })
}