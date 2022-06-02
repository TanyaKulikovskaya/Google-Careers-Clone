<template>
  <header class="w-full" :class="isLoggedIn ? 'h-32' : 'h-16'">
    <div class="fixed top-0 left-0 w-full bg-white">
      <nav
        class="flex items-center flex-nowrap h-16 px-8 py-2 border-b border-solid border-b-gray-300"
      >
        <div class="flex items-center md:hidden mr-4" @click="toggleMenu">
          <button
            type="button"
            class="text-gray-800 hover:text-gray-500 focus:outline-none focus:text-gray-500"
            aria-label="toggle menu"
          >
            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
              <path
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              ></path>
            </svg>
          </button>
        </div>
        <router-link
          class="flex items-center h-full text-xl md:mr-12 flex-grow md:flex-grow-0"
        >
          <span class="text-sky-500">G</span>
          <span class="text-rose-600">o</span>
          <span class="text-yellow-600">o</span>
          <span class="text-emerald-600 mr-1">D</span>
          <span class="text-gray-600">Careers</span>
        </router-link>
        <ul
          :class="
            showMenu
              ? 'absolute w-full top-16 left-0 z-10 bg-gray-100'
              : 'hidden'
          "
          class="text-sm md:flex md:items-center md:flex-grow md:space-x-6"
        >
          <li
            v-for="menuItem in menuItems"
            :key="menuItem.text"
            :class="showMenu ? 'p-3' : 'pt-1'"
            data-test="menu-list-item"
          >
            <router-link
              class="flex items-center h-full text-gray-800 hover:text-gray-500"
              @click="closeMenu"
            >
              {{ menuItem.text }}
            </router-link>
          </li>
        </ul>
        <div class="flex items-center h-full">
          <profile-avatar v-if="isLoggedIn" data-test="profile-avatar" />
          <action-button
            v-else
            text="Sign In"
            type="primary"
            data-test="login-button"
            @click="loginUser"
          />
        </div>
      </nav>
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
      showMenu: false,
    }
  },
  methods: {
    loginUser() {
      this.isLoggedIn = true
    },
    toggleMenu() {
      this.showMenu = !this.showMenu
    },
    closeMenu() {
      if (this.showMenu) {
        this.showMenu = false
      }
    },
  },
}
</script>

<style></style>
