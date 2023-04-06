import { defineStore } from 'pinia'
import getJobs from '@/api/getJobs'

import { Job } from '@/api/types'

export interface SearchTerm {
  role: string
  location: string
}
export interface JobsState {
  jobs: Job[]
  selectedOrganizations: string[]
  selectedJobTypes: string[]
  searchTerm: SearchTerm
}

export const useJobsStore = defineStore('jobs', {
  state: (): JobsState => ({
    jobs: [],
    selectedOrganizations: [],
    selectedJobTypes: [],
    searchTerm: {
      role: '',
      location: '',
    },
  }),
  getters: {
    uniqueOrganizations(): string[] {
      return [
        ...new Set(
          this.jobs
            .map((job) => job.organization)
            .sort((a, b) => a.localeCompare(b))
        ),
      ]
    },
    uniqueJobTypes(): string[] {
      return [...new Set(this.jobs.map((job) => job.jobType))]
    },
    includeJobByOrganization: (state) => (job: Job) => {
      if (state.selectedOrganizations.length === 0) return true
      return state.selectedOrganizations.includes(job.organization)
    },
    includeJobByJobType: (state) => (job: Job) => {
      if (state.selectedJobTypes.length === 0) return true
      return state.selectedJobTypes.includes(job.jobType)
    },
    includeJobBySearchTerm: (state) => (job: Job) => {
      if (state.searchTerm.role === '' && state.searchTerm.location === '')
        return true
      else if (
        state.searchTerm.role !== '' &&
        state.searchTerm.location === ''
      ) {
        return job.title
          .toLowerCase()
          .includes(state.searchTerm.role.toLowerCase())
      }
      return (
        job.title.toLowerCase().includes(state.searchTerm.role.toLowerCase()) &&
        job.locations
          .map((location) => location.toLowerCase())
          .includes(state.searchTerm.location.toLowerCase())
      )
    },
    showedJobs(): Job[] {
      return this.jobs
        .filter((item) => this.includeJobByOrganization(item))
        .filter((item) => this.includeJobByJobType(item))
        .filter((item) => this.includeJobBySearchTerm(item))
    },
    showedJobsCount(): number {
      return this.showedJobs.length
    },
  },
  actions: {
    async fetchJobs() {
      const data = await getJobs()
      this.jobs = data
    },
    updateSelectedOrganizations(payload: string[]) {
      this.selectedOrganizations = payload
    },
    updateSelectedJobTypes(payload: string[]) {
      this.selectedJobTypes = payload
    },
    clearSelectedFilters() {
      const store = useJobsStore()
      store.updateSelectedOrganizations([])
      store.updateSelectedJobTypes([])
      store.updateSearchTerm({
        role: '',
        location: '',
      })
    },
    updateSearchTerm(payload: SearchTerm) {
      this.searchTerm = payload
    },
    updateSearchRole(payload: string) {
      this.searchTerm.role = payload
    },
  },
})
