<template>
  <div class="flex flex-col h-screen">
    <the-navigation />
    <main class="container mx-auto px-2 flex-grow">
      <hero-section />
    </main>
  </div>
</template>

<script>
import TheNavigation from '@/components/Navigation/TheNavigation.vue'
import HeroSection from '@/components/Hero/HeroSection'

export default {
  name: 'App',
  components: { TheNavigation, HeroSection },
}
</script>
