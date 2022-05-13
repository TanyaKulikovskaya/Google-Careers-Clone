<template>
  <header class="w-full">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div
        class="flex flex-nowrap h-full px-8 border-b border-solid border-b-gray-300"
      >
        <router-link class="flex items-center h-full text-xl">
          Good Careers
        </router-link>
        <nav class="h-full ml-12 text-sm">
          <ul class="flex h-full p-0 m-0 list-none">
            <li
              v-for="menuItem in menuItems"
              :key="menuItem.text"
              class="h-full ml-9 first:ml-0"
            >
              <router-link class="flex items-center h-full">
                {{ menuItem.text }}
              </router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'TheNavigation',
  data() {
    return {
      menuItems: [
        { text: 'Teams' },
        { text: 'Locations' },
        { text: 'How we hire' },
        { text: 'Students' },
        { text: 'Jobs' },
      ],
    }
  },
}
</script>

<style></style>
