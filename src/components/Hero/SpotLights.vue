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

<script setup>
import axios from 'axios'
import { reactive, onMounted } from 'vue'

const spots = reactive([])
const fetchSpots = async () => {
  const { data } = await axios.get('http://localhost:3000/spotlights')
  spots.push(...data)
}
onMounted(() => {
  fetchSpots()
})
</script>
