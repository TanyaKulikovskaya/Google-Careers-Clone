<template>
  <section class="py-4 md:grid md:grid-cols-12">
    <div class="pt-6 md:col-span-6">
      <head-line />
      <job-search-form />
    </div>
    <div class="md:col-span-1"></div>
    <div class="md:col-span-5 flex h-full w-full items-center justify-center">
      <img :src="imageLink" class="h-80 w-80 object-contain" />
    </div>
  </section>
</template>

<script>
import HeadLine from '@/components/Hero/HeadLine.vue'
import JobSearchForm from '@/components/Hero/JobSearchForm.vue'
export default {
  name: 'HeroSection',
  components: { HeadLine, JobSearchForm },
  data() {
    return {
      imageLink:
        'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
    }
  },
}
</script>

<style></style>
