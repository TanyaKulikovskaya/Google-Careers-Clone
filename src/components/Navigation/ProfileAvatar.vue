<template>
  <img
    :src="imageLink"
    class="w-9 h-9 rounded-full object-cover"
    alt="user image"
  />
</template>

<script>
export default {
  name: 'ProfleAvatar',
  data() {
    return {
      imageLink:
        'https://images.unsplash.com/photo-1606214174585-fe31582dc6ee?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687',
    }
  },
}
</script>

<style></style>
