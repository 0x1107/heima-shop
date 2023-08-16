import type { PageParams } from "@/types/global"
import { http } from "@/utils/http"

type HotParam = PageParams & { subType?: string }

export const getHotRecommendAPI = (url: string, data?: HotParam) => {
    return http({
        method: 'GET',
        url,
        data
    })
}