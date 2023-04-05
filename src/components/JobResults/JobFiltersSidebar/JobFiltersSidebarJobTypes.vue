<template>
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
          />
          <label :for="type">{{ type }}</label>
        </li>
      </ul>
    </fieldset>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useJobsStore } from '@/stores/jobs.ts'

const store = useJobsStore()

const jobTypes = computed(() => store.uniqueJobTypes)
const selectedJobTypes = computed({
  get() {
    return store.selectedJobTypes
  },
  set(value) {
    store.updateSelectedJobTypes(value)
  },
})
</script>
