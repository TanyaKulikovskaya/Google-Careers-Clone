<template>
  <ul>
    <li v-for="spot in spots" :key="spot.id">
      <slot :spotlight="spot"></slot>
    </li>
  </ul>
</template>

<script>
import axios from 'axios'

export default {
  name: 'SpotLights',
  data() {
    return {
      spots: [],
    }
  },
  mounted() {
    this.fetchSpots()
  },
  methods: {
    async fetchSpots() {
      const { data } = await axios.get('http://localhost:3000/spotlights')
      this.spots = data
    },
  },
}
</script>
