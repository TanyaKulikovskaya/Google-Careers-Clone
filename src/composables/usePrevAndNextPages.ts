import { type Ref, computed } from 'vue'

const usePrevAndNextPages = (
  currentPage: Ref<number>,
  lastPage: Ref<number>
) => {
  const prevPage = computed(() => {
    const prevPage = currentPage.value - 1
    return prevPage >= 1 ? prevPage : null
  })
  const nextPage = computed(() => {
    const nextPage = currentPage.value + 1
    return nextPage <= lastPage.value ? nextPage : null
  })

  return { prevPage, nextPage }
}

export default usePrevAndNextPages
