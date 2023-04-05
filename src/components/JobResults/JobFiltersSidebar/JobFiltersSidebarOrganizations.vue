<template>
  <div class="mt-5">
    <fieldset>
      <ul class="flex flex-row flex-wrap">
        <li
          v-for="(organization, index) in organizations"
          :key="index"
          class="h-8 w-1/2"
        >
          <input
            :id="organization"
            v-model="selectedOrganizations"
            :value="organization"
            type="checkbox"
            class="mr-2"
          />
          <label :for="organization">{{ organization }}</label>
        </li>
      </ul>
    </fieldset>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useJobsStore } from '@/stores/jobs.ts'

const store = useJobsStore()

const organizations = computed(() => store.uniqueOrganizations)
const selectedOrganizations = computed({
  get() {
    return store.selectedOrganizations
  },
  set(value) {
    store.updateSelectedOrganizations(value)
  },
})
</script>
