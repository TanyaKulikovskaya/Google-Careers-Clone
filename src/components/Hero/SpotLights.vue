<template>
  <ul>
    <li v-for="spot in spots" :key="spot.id">
      <slot
        :img="spot.img"
        :title="spot.title"
        :description="spot.description"
      ></slot>
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
