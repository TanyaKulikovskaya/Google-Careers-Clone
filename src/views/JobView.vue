<template>
  <section class="py-6">
    <h1 class="mb-2 text-4xl text-gray-600">
      {{ currentJob.title }}
    </h1>

    <ul class="border-b border-solid border-gray-100">
      <li
        v-for="(location, index) in currentJob.locations"
        :key="index"
        class="pr-2 inline-block"
      >
        {{ location }}
      </li>
    </ul>

    <h2 class="my-4 text-lg uppercase text-gray-600">
      Minimum qualifications:
    </h2>
    <ul class="list-disc pl-8">
      <li
        v-for="(qualification, index) in currentJob.minimumQualifications"
        :key="index"
        class="text-sm"
      >
        {{ qualification }}
      </li>
    </ul>
    <h2 class="my-4 text-lg uppercase text-gray-600">
      Preferred qualifications:
    </h2>
    <ul class="list-disc pl-8">
      <li
        v-for="(qualification, index) in currentJob.preferredQualifications"
        :key="index"
        class="text-sm"
      >
        {{ qualification }}
      </li>
    </ul>
    <h2 class="my-4 text-lg uppercase text-gray-600">About the job</h2>
    <p
      v-for="(description, index) in currentJob.description"
      :key="index"
      class="text-sm"
    >
      {{ description }}
    </p>
  </section>
</template>

<script>
import { mapState } from 'pinia'
import { useJobsStore } from '@/stores/jobs.ts'

export default {
  name: 'JobView',
  computed: {
    ...mapState(useJobsStore, {
      jobs: 'jobs',
      currentJob() {
        return this.jobs?.filter((job) => job.id == this.currentJobId)[0]
      },
    }),
    currentJobId() {
      return this.$route.params.id
    },
  },
}
</script>
