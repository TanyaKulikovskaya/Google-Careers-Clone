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

<script>
import { mapState } from 'pinia'
import { useJobsStore } from '@/stores/jobs.js'

export default {
  name: 'SubNavigation',
  computed: {
    ...mapState(useJobsStore, {
      matchedJobsCount: 'showedJobsCount',
    }),
    onJobPage() {
      return this.$route.name === 'JobResults'
    },
  },
}
</script>

<style></style>
