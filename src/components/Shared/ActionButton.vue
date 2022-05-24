<template>
  <button :class="type" @click="handleClick">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'ActionButton',
  props: {
    text: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'primary',
    },
  },
  emits: ['click'],
  methods: {
    handleClick() {
      this.$emit('click')
    },
  },
}
</script>

<style scoped>
button {
  @apply px-6 py-2 text-medium border-0 rounded;
}

.primary {
  @apply text-white bg-blue-500 hover:bg-blue-400 hover:shadow-lg hover:shadow-blue-400/60;
}
</style>
