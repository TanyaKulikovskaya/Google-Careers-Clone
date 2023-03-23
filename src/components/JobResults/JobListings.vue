<template>
  <div class="flex-auto py-4 px-8">
    <ol>
      <job-listing v-for="job in displayedJobs" :key="job.id" :job="job" />
    </ol>
    <div class="flex flex-row flex-nowrap py-2 px-4 justify-center">
      <router-link
        v-show="prevPage"
        :to="{ name: JobResults, query: { page: prevPage } }"
        class="mx-4 uppercase font-semibold text-sky-500 hover:text-sky-700"
      >
        Prev
      </router-link>
      <span>{{ currentPage }}</span>
      <router-link
        v-show="nextPage"
        :to="{ name: JobResults, query: { page: nextPage } }"
        class="mx-4 uppercase font-semibold text-sky-500 hover:text-sky-700"
      >
        Next
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import { useJobsStore } from '@/stores/jobs.js'
import JobListing from '@/components/JobResults/JobListing.vue'

export default {
  name: 'JobListings',
  components: {
    JobListing,
  },
  computed: {
    ...mapState(useJobsStore, {
      jobs: 'showedJobs',
      jobsCount: 'showedJobsCount',
    }),
    currentPage() {
      return Number.parseInt(this.$route.query.page || '1')
    },
    prevPage() {
      const prevPage = this.currentPage - 1
      return prevPage >= 1 ? prevPage : null
    },
    nextPage() {
      const nextPage = this.currentPage + 1
      const lastPage = Math.ceil(this.jobs.length / 10)
      return nextPage <= lastPage ? nextPage : null
    },
    displayedJobs() {
      const pageNumber = this.currentPage
      const firstJobIndex = (pageNumber - 1) * 10
      const lastJobIndex = pageNumber * 10
      return this.jobs.slice(firstJobIndex, lastJobIndex)
    },
  },
  watch: {
    jobsCount() {
      this.$router.push({
        name: 'JobResults',
        query: { page: '1' },
      })
    },
  },
  mounted() {
    this.fetchJobs()
  },
  methods: {
    ...mapActions(useJobsStore, ['fetchJobs']),
  },
}
</script>

<style></style>
