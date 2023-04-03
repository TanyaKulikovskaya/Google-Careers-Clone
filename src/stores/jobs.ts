import { defineStore } from 'pinia'
import getJobs from '@/api/getJobs'

import { Job } from '@/api/types'

export interface JobsState {
  jobs: Job[]
  selectedOrganizations: string[]
  selectedJobTypes: string[]
}

export const useJobsStore = defineStore('jobs', {
  state: (): JobsState => ({
    jobs: [],
    selectedOrganizations: [],
    selectedJobTypes: [],
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
    showedJobs(): Job[] {
      return this.jobs
        .filter((item) => this.includeJobByOrganization(item))
        .filter((item) => this.includeJobByJobType(item))
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
  },
})
