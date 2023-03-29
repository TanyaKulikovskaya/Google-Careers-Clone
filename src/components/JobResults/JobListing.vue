<template>
  <li class="mb-7">
    <router-link
      :to="`/job/results/${jobPageLink}`"
      class="mx-auto block rounded border border-solid border-gray-300 bg-white"
    >
      <div class="mx-8 border-b border-solid border-gray-300 pt-5 pb-2">
        <h2 class="mb-2 text-2xl text-sky-500">
          {{ job.title }}
        </h2>

        <div class="flex flex-row align-middle justify-between">
          <span>{{ job.organization }}</span>

          <ul>
            <li
              v-for="(location, index) in job.locations"
              :key="index"
              class="px-2 inline-block text-sm"
            >
              {{ location }}
            </li>
          </ul>
        </div>
      </div>

      <div class="px-8 py-4">
        <h3>{{ job.jobType }}</h3>
        <div>
          <h3 class="mt-1 mb-2">Qualifications:</h3>
          <div>
            <ul class="list-disc pl-8">
              <li
                v-for="(qualification, index) in job.minimumQualifications"
                :key="index"
                class="text-sm"
              >
                {{ qualification }}
              </li>
            </ul>
          </div>
        </div>

        <div class="mt-2 text-center">
          <router-link :to="`/job/results/${jobPageLink}`" class="text-blue-400"
            >Expand</router-link
          >
        </div>
      </div>
    </router-link>
  </li>
</template>

<script setup>
import { computed, defineProps } from 'vue'

const props = defineProps({
  job: {
    type: Object,
    default: () => {},
  },
})

const jobPageLink = computed(() => props.job.id)
</script>
