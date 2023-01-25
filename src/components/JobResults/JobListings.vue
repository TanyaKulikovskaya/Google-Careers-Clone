<template>
  <div class="flex-auto flex justify-center py-4">
    <ol>
      <job-listing v-for="job in jobs" :key="job.id" :job="job" />
    </ol>
  </div>
</template>

<script>
import axios from 'axios'
import JobListing from '@/components/JobResults/JobListing.vue'

export default {
  name: 'JobListings',
  components: {
    JobListing,
  },
  data() {
    return {
      jobs: [],
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    async getData() {
      const { data } = await axios.get('http://localhost:3000/jobs')
      this.jobs = data.slice(0, 5)
    },
  },
}
</script>

<style></style>
