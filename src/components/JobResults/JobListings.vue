<template>
  <div class="flex-auto py-4 px-8">
    <ol>
      <job-listing v-for="job in displayedJobs" :key="job.id" :job="job" />
    </ol>
    <div
      v-show="jobsCount > 0"
      class="flex flex-row flex-nowrap py-2 px-4 justify-center"
    >
      <router-link
        v-show="prevPage"
        :to="{ name: 'JobResults', query: { page: prevPage } }"
        class="mx-4 uppercase font-semibold text-sky-500 hover:text-sky-700"
      >
        Prev
      </router-link>
      <span>{{ currentPage }}</span>
      <router-link
        v-show="nextPage"
        :to="{ name: 'JobResults', query: { page: nextPage } }"
        class="mx-4 uppercase font-semibold text-sky-500 hover:text-sky-700"
      >
        Next
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'

import { useJobsStore } from '@/stores/jobs.ts'
import usePrevAndNextPages from '@/composables/usePrevAndNextPages'

import JobListing from '@/components/JobResults/JobListing.vue'

const store = useJobsStore()
const jobs = computed(() => store.showedJobs)

const route = useRoute()
const currentPage = computed(() => {
  return Number.parseInt(route.query.page || '1')
})

const jobsCount = computed(() => store.showedJobsCount)
const lastPage = computed(() => {
  return Math.ceil(jobsCount.value / 10)
})

const { prevPage, nextPage } = usePrevAndNextPages(currentPage, lastPage)

const displayedJobs = computed(() => {
  const pageNumber = currentPage.value
  const firstJobIndex = (pageNumber - 1) * 10
  const lastJobIndex = pageNumber * 10
  return jobs.value.slice(firstJobIndex, lastJobIndex)
})

const router = useRouter()
watch(
  () => jobsCount.value,
  () => {
    router.push({
      name: 'JobResults',
      query: { page: '1' },
    })
  }
)

onMounted(() => {
  store.fetchJobs()
})
</script>
