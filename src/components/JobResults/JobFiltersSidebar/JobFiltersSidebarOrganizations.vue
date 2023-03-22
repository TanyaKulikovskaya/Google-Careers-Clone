<template>
  <collapsible-accordion header="Organizations">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-row flex-wrap">
          <li
            v-for="(organization, index) in organizations"
            :key="index"
            class="h-8 w-1/2"
          >
            <input :id="organization" type="checkbox" class="mr-2" />
            <label :for="organization">{{ organization }}</label>
          </li>
        </ul>
      </fieldset>
    </div>
  </collapsible-accordion>
</template>

<script>
import { mapState } from 'pinia'
import { useJobsStore } from '@/stores/jobs.js'

import CollapsibleAccordion from '@/components/Shared/CollapsibleAccordion.vue'

export default {
  name: 'JobFiltersSidebarOrganizations',
  components: {
    CollapsibleAccordion,
  },
  computed: {
    ...mapState(useJobsStore, {
      jobs: 'jobs',
      organizations() {
        return [
          ...new Set(
            this.jobs
              .map((job) => job.organization)
              .sort((a, b) => a.localeCompare(b))
          ),
        ]
      },
    }),
  },
}
</script>
