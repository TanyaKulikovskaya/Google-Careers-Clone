<template>
  <input
    :value="modelValue"
    :placeholder="placeholder"
    type="text"
    class="w-full font-normal focus:outline-none"
    @input="handleInput"
  />
</template>

<script>
export default {
  name: 'TextInput',
  props: {
    modelValue: {
      type: String,
      required: true,
      default: '',
    },
    placeholder: {
      type: String,
      required: false,
      default: '',
    },
  },
  emits: ['update:modelValue'],
  methods: {
    handleInput(e) {
      this.$emit('update:modelValue', e.target.value)
    },
  },
}
</script>
