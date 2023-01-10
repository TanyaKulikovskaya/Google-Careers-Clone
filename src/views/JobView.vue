<template>
  <h1 class="font-bold text-6xl tracking-tight py-10">
    Job View for job {{ currentJobId }}
  </h1>
</template>

<script>
export default {
  name: 'JobView',
  computed: {
    currentJobId() {
      return this.$route.params.id
    },
  },
}
</script>

<style></style>
