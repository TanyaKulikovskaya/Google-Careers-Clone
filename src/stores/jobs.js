import axios from 'axios'
import { defineStore } from 'pinia'

export const useJobsStore = defineStore('jobs', {
  state: () => ({
    jobs: [],
    selectedOrganizations: [],
    selectedJobTypes: [],
  }),
  getters: {
    uniqueOrganizations() {
      return [
        ...new Set(
          this.jobs
            .map((job) => job.organization)
            .sort((a, b) => a.localeCompare(b))
        ),
      ]
    },
    uniqueJobTypes() {
      return [...new Set(this.jobs.map((job) => job.jobType))]
    },
    includeJobByOrganization: (state) => (job) => {
      if (state.selectedOrganizations.length === 0) return true
      return state.selectedOrganizations.includes(job.organization)
    },
    includeJobByJobType: (state) => (job) => {
      if (state.selectedJobTypes.length === 0) return true
      return state.selectedJobTypes.includes(job.jobType)
    },
    showedJobs() {
      return this.jobs
        .filter((item) => this.includeJobByOrganization(item))
        .filter((item) => this.includeJobByJobType(item))
    },
    showedJobsCount() {
      return this.showedJobs.length
    },
  },
  actions: {
    async fetchJobs() {
      const { data } = await axios.get('http://localhost:3000/jobs')
      this.jobs = data
    },
    addSelectedOrganizations(payload) {
      this.selectedOrganizations = payload
    },
    addSelectedJobTypes(payload) {
      this.selectedJobTypes = payload
    },
  },
})
