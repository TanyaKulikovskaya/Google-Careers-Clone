import axios from 'axios'
import { defineStore } from 'pinia'

export const useJobsStore = defineStore('jobs', {
  state: () => ({
    jobs: [],
  }),
  actions: {
    async fetchJobs() {
      const { data } = await axios.get('http://localhost:3000/jobs')
      this.jobs = data
    },
  },
})
