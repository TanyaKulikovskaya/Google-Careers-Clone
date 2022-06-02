<template>
  <section class="py-4 md:grid md:grid-cols-12">
    <div class="md:col-span-1"></div>
    <div class="pt-6 md:col-span-5">
      <head-line />
    </div>
    <div class="md:col-span-1"></div>
    <div class="md:col-span-4"></div>
    <div class="md:col-span-1"></div>
  </section>
</template>

<script>
import HeadLine from '@/components/Hero/HeadLine.vue'
export default {
  name: 'HeroSection',
  components: { HeadLine },
}
</script>

<style></style>
