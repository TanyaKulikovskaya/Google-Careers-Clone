<template>
  <header-container>
    <template #title>
      <h1 class="text-4xl mb-4">Our locations</h1>
    </template>
    <template #subtitle>
      <p>
        Large or small, each one of our offices is designed to inspire
        innovation, big ideas, and community.
      </p>
    </template>
  </header-container>
</template>

<script>
import HeaderContainer from '@/components/Shared/HeaderContainer.vue'

export default {
  name: 'LocationsView',
  components: {
    HeaderContainer,
  },
}
</script>
