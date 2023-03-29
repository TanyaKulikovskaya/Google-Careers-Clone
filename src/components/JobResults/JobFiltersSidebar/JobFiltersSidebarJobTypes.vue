<template>
  <collapsible-accordion header="Job Types">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-row flex-wrap">
          <li v-for="(type, index) in jobTypes" :key="index" class="h-8 w-1/2">
            <input
              :id="type"
              v-model="selectedJobTypes"
              :value="type"
              type="checkbox"
              class="mr-2"
              @change="selectJobTypes"
            />
            <label :for="type">{{ type }}</label>
          </li>
        </ul>
      </fieldset>
    </div>
  </collapsible-accordion>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useJobsStore } from '@/stores/jobs.js'
import CollapsibleAccordion from '@/components/Shared/CollapsibleAccordion.vue'

const selectedJobTypes = ref([])

const store = useJobsStore()

const jobTypes = computed(() => store.uniqueJobTypes)

const selectJobTypes = () => {
  store.updateSelectedJobTypes(selectedJobTypes.value)
}
</script>
