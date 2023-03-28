<template>
  <form
    class="flex items-center h-12 w-full rounded-3xl border border-solid border-gray-300"
  >
    <font-awesome-icon :icon="['fas', 'search']" class="px-2" />
    <div class="flex flex-1 flex-nowrap h-full text-base font-light">
      <div class="flex items-center flex-1 h-full relative mx-2">
        <label for="role" class="absolute left-0 -top-7">Role</label>
        <text-input
          id="role"
          :value="form.role"
          placeholder="Developer"
          @input="updateRole"
        />
      </div>
      <span
        class="flex items-center h-full border-l border-r border-gray-300 bg-gray-100 px-3"
      >
        in
      </span>
      <div class="flex items-center flex-1 h-full relative mx-2">
        <label for="location" class="absolute left-0 -top-7">Where?</label>
        <text-input
          id="location"
          :value="form.location"
          placeholder="Bangkok"
          @input="updateLocation"
        />
      </div>
      <action-button
        text="Search"
        type="secondary"
        class="rounded-r-3xl"
        @click="searchJob"
      />
    </div>
  </form>
</template>

<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

import TextInput from '@/components/Shared/TextInput.vue'
import ActionButton from '@/components/Shared/ActionButton.vue'

const form = reactive({
  role: '',
  location: '',
})

const updateRole = (value) => {
  form.role = value
}
const updateLocation = (value) => {
  form.location = value
}

const router = useRouter()
const searchJob = () => {
  router.push({
    name: 'JobResults',
    query: { role: form.role, location: form.location },
  })
}
</script>
