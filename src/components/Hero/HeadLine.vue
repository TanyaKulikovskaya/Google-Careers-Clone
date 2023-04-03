<template>
  <div>
    <h1 class="font-bold text-6xl tracking-tight mb-10">
      <span class="block mb-3" :class="action.class">
        {{ action.value }}
      </span>
      <span>for everyone</span>
    </h1>
    <h2 class="text-3xl font-light mb-12">Find your next job at GooD.</h2>
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
        const nextAction = nextItemInList(
          actions.map((action) => action.value),
          this.action.value
        )
        this.action = actions.filter((action) => action.value === nextAction)[0]
      }, 5000)
    },
  },
}
</script>
