<template>
  <button
    :class="type"
    class="disabled:opacity-70"
    :disabled="disabled"
    @click.prevent="handleClick"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'ActionButton',
  props: {
    text: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: false,
      default: 'primary',
      validator(value) {
        return ['primary', 'secondary'].includes(value)
      },
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
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
  @apply px-4 py-2 text-sm;
}

.primary {
  @apply text-white rounded bg-blue-500 hover:bg-blue-400 hover:shadow-lg hover:shadow-blue-400/60;
}

.secondary {
  @apply text-blue-500 bg-transparent hover:bg-blue-400 hover:shadow-md hover:shadow-blue-400/40 hover:text-white;
}
</style>
