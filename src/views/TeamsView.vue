<template>
  <header-container>
    <template #title>
      <h1 class="text-4xl mb-4">Teams</h1>
    </template>
    <template #subtitle>
      <p>
        Together, we create access to information and build products that
        improve people's lives. Want to be a Goodler? Find your role.
      </p>
    </template>
  </header-container>
</template>

<script>
import HeaderContainer from '@/components/Shared/HeaderContainer.vue'

export default {
  name: 'TeamView',
  components: {
    HeaderContainer,
  },
}
</script>
