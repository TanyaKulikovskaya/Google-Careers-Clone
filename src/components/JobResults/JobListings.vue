<template>
  <div class="flex-auto flex justify-center py-4">
    <ol>
      <job-listing />
    </ol>
  </div>
</template>

<script>
import JobListing from '@/components/JobResults/JobListing.vue'

export default {
  name: 'JobListings',
  components: {
    JobListing,
  },
}
</script>

<style></style>
