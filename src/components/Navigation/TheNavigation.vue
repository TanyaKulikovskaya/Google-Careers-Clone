<template>
  <header class="w-full">
    <div class="fixed top-0 left-0 w-full h-32 bg-white">
      <div
        class="flex flex-nowrap h-16 px-8 py-2 border-b border-solid border-b-gray-300"
      >
        <router-link class="flex items-center h-full mr-12 text-xl">
          Good Careers
        </router-link>
        <nav class="h-full text-sm">
          <ul class="flex h-full p-0 m-0 list-none">
            <li
              v-for="menuItem in menuItems"
              :key="menuItem.text"
              class="h-full mr-9 last:mr-0"
              data-test="menu-list-item"
            >
              <router-link class="flex items-center h-full">
                {{ menuItem.text }}
              </router-link>
            </li>
          </ul>
        </nav>
        <div class="flex items-center h-full ml-auto">
          <profile-avatar v-if="isLoggedIn" data-test="profile-avatar" />
          <action-button
            v-else
            text="Sign In"
            type="primary"
            data-test="login-button"
            @click="loginUser"
          />
        </div>
      </div>
      <sub-navigation v-if="isLoggedIn" data-test="sub-navigation" />
    </div>
  </header>
</template>

<script>
import ActionButton from '@/components/Shared/ActionButton.vue'
import ProfileAvatar from '@/components/Navigation/ProfileAvatar.vue'
import SubNavigation from '@/components/Navigation/SubNavigation.vue'

export default {
  name: 'TheNavigation',
  components: {
    ActionButton,
    ProfileAvatar,
    SubNavigation,
  },
  data() {
    return {
      menuItems: [
        { text: 'Teams' },
        { text: 'Locations' },
        { text: 'How we hire' },
        { text: 'Students' },
        { text: 'Jobs' },
      ],
      isLoggedIn: false,
    }
  },
  methods: {
    loginUser() {
      this.isLoggedIn = true
    },
  },
}
</script>

<style></style>
