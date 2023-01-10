<template>
  <div class="flex flex-col h-screen">
    <the-navigation />
    <main class="container mx-auto px-2 flex-grow">
      <router-view />
    </main>
  </div>
</template>

<script>
import TheNavigation from '@/components/Navigation/TheNavigation.vue'

export default {
  name: 'App',
  components: { TheNavigation },
}
</script>
