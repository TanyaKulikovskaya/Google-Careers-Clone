import { mount } from '@vue/test-utils'
import TheNavigation from '@/components/Navigation/TheNavigation.vue'

describe('TheNavigation', () => {
  it('displays company name', () => {
    const wrapper = mount(TheNavigation)
    expect(wrapper.text()).toMatch('Good Careers')
  })
  it('displays menu items', () => {
    const wrapper = mount(TheNavigation)
    const menuItems = wrapper.findAll('[data-test="menu-list-item"]')
    const menuItemsText = menuItems.map((item) => item.text())
    expect(menuItemsText).toEqual([
      'Teams',
      'Locations',
      'How we hire',
      'Students',
      'Jobs',
    ])
  })
  describe('when user logs in', () => {
    it('displays profile avatar', async () => {
      const wrapper = mount(TheNavigation)
      let profileAvatar = wrapper.find('[data-test="profile-avatar"]')
      expect(profileAvatar.exists()).toBe(false)

      let loginButton = wrapper.find('[data-test="login-button"]')
      await loginButton.trigger('click')

      profileAvatar = wrapper.find('[data-test="profile-avatar"]')
      expect(profileAvatar.exists()).toBe(true)

      loginButton = wrapper.find('[data-test="login-button"]')
      expect(loginButton.exists()).toBe(false)
    })
  })
})
