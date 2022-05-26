import { mount } from '@vue/test-utils'
import ActionButton from '@/components/Shared/ActionButton'

describe('ActionButton', () => {
  it('displays text', () => {
    const wrapper = mount(ActionButton, {
      props: {
        text: 'Click me',
        type: 'primary',
      },
    })
    expect(wrapper.text()).toMatch('Click me')
  })
  it('applies one of several classes to button', () => {
    const wrapper = mount(ActionButton, {
      props: {
        text: 'Click me',
        type: 'primary',
      },
    })
    const button = wrapper.find('button')
    expect(button.classes('primary')).toBe(true)
  })
})
