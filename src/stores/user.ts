import { defineStore } from 'pinia'

export interface UserState {
  isLoggedIn: boolean
}

export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    isLoggedIn: false,
  }),
  actions: {
    loginUser() {
      this.isLoggedIn = true
    },
  },
})
