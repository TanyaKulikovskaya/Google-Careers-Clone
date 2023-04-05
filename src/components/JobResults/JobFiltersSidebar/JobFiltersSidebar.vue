<template>
  <div
    class="flex w-96 flex-col border-r border-solid border-gray-300 bg-white p-4"
  >
    <section class="pb-5">
      <div class="flex flex-row justify-between">
        <h3 class="my-4 text-base font-semibold">What do you want to do?</h3>
        <div class="flex items-center text-sm">
          <action-button
            text="Clear Filters"
            type="secondary"
            @click="clearFilters"
          />
        </div>
      </div>
      <collapsible-accordion header="Organizations">
        <job-filters-sidebar-organizations />
      </collapsible-accordion>
      <collapsible-accordion header="Job Types">
        <job-filters-sidebar-job-types />
      </collapsible-accordion>
    </section>
  </div>
</template>

<script setup>
import ActionButton from '@/components/Shared/ActionButton.vue'
import CollapsibleAccordion from '@/components/Shared/CollapsibleAccordion.vue'
import JobFiltersSidebarOrganizations from '@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarOrganizations.vue'
import JobFiltersSidebarJobTypes from '@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarJobTypes.vue'

import { useJobsStore } from '@/stores/jobs.ts'

const store = useJobsStore()

const clearFilters = () => {
  store.clearSelectedFilters()
}
</script>
