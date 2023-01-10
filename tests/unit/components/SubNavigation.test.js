import { mount } from '@vue/test-utils'
import SubNavigation from '@/components/Navigation/SubNavigation'

describe('SubNavigation', () => {
  describe('when the user is on job page', () => {
    it('dispays job count', () => {
      const route = {
        name: 'JobResults',
      }
      const wrapper = mount(SubNavigation, {
        global: {
          mocks: {
            $route: route,
          },
          stubs: {
            FontAwesomeIcon: true,
          },
        },
      })
      const jobCount = wrapper.find('[data-test="job-count"]')
      expect(jobCount.exists()).toBe(true)
    })
  })
  describe('when the user is not on job page', () => {
    it('does not dispays job count', () => {
      const route = {
        name: 'Home',
      }
      const wrapper = mount(SubNavigation, {
        global: {
          mocks: {
            $route: route,
          },
          stubs: {
            FontAwesomeIcon: true,
          },
        },
      })
      const jobCount = wrapper.find('[data-test="job-count"]')
      expect(jobCount.exists()).toBe(false)
    })
  })
})
