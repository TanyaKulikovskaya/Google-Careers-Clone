<template>
  <div>
    <h1 class="font-bold text-5xl tracking-tight mb-10">
      <span class="block mb-3" :class="action.class">
        {{ action.value }}
      </span>
      <span>for everyone</span>
    </h1>
    <h2 class="text-3xl font-light">Find your next job at GooD.</h2>
  </div>
</template>

<script>
import nextItemInList from '@/helpers/nextItemInList'

export default {
  name: 'HeadLine',
  data() {
    return {
      action: {
        value: 'Build',
        class: 'text-sky-500',
      },
      interval: null,
    }
  },
  created() {
    this.changeAction()
  },
  beforeUnmount() {
    clearInterval(this.interval)
  },
  methods: {
    changeAction() {
      this.interval = setInterval(() => {
        const actions = [
          { value: 'Build', class: 'text-sky-500' },
          { value: 'Design', class: 'text-rose-600' },
          { value: 'Create', class: 'text-yellow-600' },
          { value: 'Code', class: 'text-emerald-600' },
        ]
        this.action = nextItemInList(actions, this.action.value)
      }, 5000)
    },
  },
}
</script>
