<template>
  <hero-section />
  <spot-lights class="flex flex-row flex-wrap py-8">
    <template #default="{ img, title, description }">
      <router-link
        to="/job/results"
        class="m-4 flex flex-col rounded-lg bg-neutral-100 transform transition duration-300 hover:scale-105"
      >
        <img :src="img" class="h-64 rounded-tl-lg rounded-tr-lg" />
        <div class="mt-3 h-32 px-6 py-4">
          <h4 class="text-md mb-3 text-sky-500">
            {{ title }}
          </h4>
          <p>{{ description }}</p>
        </div>
      </router-link>
    </template>
  </spot-lights>
</template>

<script>
import HeroSection from '@/components/Hero/HeroSection.vue'
import SpotLights from '@/components/Hero/SpotLights.vue'

export default {
  name: 'HomeView',
  components: {
    HeroSection,
    SpotLights,
  },
}
</script>
