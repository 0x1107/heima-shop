import type { XtxGuessInstance } from '@/types/components'
import { ref } from 'vue'

export const useGuessList = () => {
    const guessRef = ref<XtxGuessInstance>()
    const scrolltolower = () => {
        guessRef.value?.getMore()
    }

    return {
        guessRef,
        scrolltolower,
    }
}