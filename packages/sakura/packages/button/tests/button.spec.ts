import { mount } from '@vue/test-utils'
import Button from '../src/button.vue'
import ButtonGroup from '../src/button-group.vue'

test('test button display content', () => {
  const wrapper = mount(Button, {
    slots: {
      default: `Button`
    }
  })

  expect(wrapper.text()).toContain('Button')
})

describe('test button type prop', () => {
  test('default', async () => {
    const wrapper = await mount(Button)

    expect(wrapper.classes('sr-button')).toBe(true)
  })

  const types = [
    'primary',
    'success',
    'info',
    'warning',
    'danger',
    'text',
  ]

  types.forEach(buttonType => {
    test(buttonType, async () => {
      const wrapper = await mount(Button, {
        props: {
          type: buttonType
        }
      })

      expect(wrapper.classes(`sr-button--${buttonType}`)).toBe(true)
    })
  })
})

describe('test button size prop', () => {
  const sizes = [
    'medium',
    'small',
    'mini',
  ]

  sizes.forEach(buttonSize => {
    test(buttonSize, async () => {
      const wrapper = await mount(Button, {
        props: {
          size: buttonSize
        }
      })

      expect(wrapper.classes(`sr-button--${buttonSize}`)).toBe(true)
    })
  })
})

test('test button plain prop', async () => {
  const wrapper = await mount(Button, {
    props: {
      plain: true
    }
  })

  expect(wrapper.classes(`is-plain`)).toBe(true)
})

test('test button round prop', async () => {
  const wrapper = await mount(Button, {
    props: {
      round: true
    }
  })

  expect(wrapper.classes(`is-round`)).toBe(true)
})

test('test button circle prop', async () => {
  const wrapper = await mount(Button, {
    props: {
      circle: true
    }
  })

  expect(wrapper.classes(`is-circle`)).toBe(true)
})

test('test button loading prop', async () => {
  const wrapper = await mount(Button, {
    props: {
      loading: true
    }
  })

  expect(wrapper.classes(`is-loading`)).toBe(true)
  expect(wrapper.find('.el-icon-loading').exists()).toBe(true)
  await wrapper.trigger('click')
  expect(wrapper.emitted('click')).toBeUndefined()
})

test('test button disabled prop', async () => {
  const wrapper = await mount(Button, {
    props: {
      disabled: true
    }
  })

  expect(wrapper.classes(`is-disabled`)).toBe(true)
  await wrapper.trigger('click')
  expect(wrapper.emitted('click')).toBeUndefined()
})

test('test button icon prop', async () => {
  const icon = 'el-icon-edit'
  const wrapper = await mount(Button, {
    props: {
      icon
    }
  })

  expect(wrapper.find(`.${icon}`).exists()).toBe(true)
})

describe('test button nativeType prop', () => {
  test('default', async () => {
    const wrapper = mount(Button)

    expect(wrapper.attributes('type')).toBe('button')
  })

  const nativeTypes = [
    'button',
    'submit',
    'reset',
  ]

  nativeTypes.forEach(nativeType => {
    test(nativeType, async () => {

      const wrapper = await mount(Button, {
        props: {
          nativeType
        }
      })

      expect(wrapper.attributes('type')).toBe(nativeType)
    })
  })
})

test('test button group display content', async () => {
  const wrapper = mount({
    components: {
      Button,
      ButtonGroup,
    },
    template: `
      <ButtonGroup>
        <Button>Button1</Button>
        <Button>Button2</Button>
      </ButtonGroup>
    `
  })

  expect(wrapper.findAllComponents(Button).length).toBe(2)
})

