import axios from 'axios'
import { defineStore } from 'pinia'

export const useJobsStore = defineStore('jobs', {
  state: () => ({
    jobs: [],
    selectedOrganizations: [],
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
    filteredByOraganizationJobs() {
      return this.jobs.filter((item) =>
        this.selectedOrganizations.includes(item.organization)
      )
    },
    showedJobs() {
      return this.selectedOrganizations.length > 0
        ? this.filteredByOraganizationJobs
        : this.jobs
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
  },
})
