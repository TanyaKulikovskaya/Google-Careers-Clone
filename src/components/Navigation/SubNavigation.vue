<template>
  <div class="h-16 px-8 py-2 border-b border-solid border-b-gray-300">
    <div class="flex items-center h-full">
      <div v-if="onJobPage" data-test="job-count">
        <font-awesome-icon :icon="['fas', 'search']" class="mr-3" />
        <span>
          <span class="text-emerald-700">
            {{ matchedJobsCount }}
          </span>
          jobs matched
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useJobsStore } from '@/stores/jobs.ts'

const store = useJobsStore()
const matchedJobsCount = computed(() => store.showedJobsCount)

const route = useRoute()
const onJobPage = computed(() => {
  return route.name === 'JobResults'
})
</script>

<style></style>
