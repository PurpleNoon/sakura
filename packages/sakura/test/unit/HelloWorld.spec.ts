import { mount } from '@vue/test-utils'
import HelloWorld from '../../src/components/HelloWorld.vue'

test('displays message', async () => {
  const wrapper = await mount(HelloWorld, {
    props: {
      msg: 'Hello Vue 3 + TypeScript + Vite'
    }
  })

  // Assert the rendered text of the component
  expect(wrapper.find('button').text()).toBe('count is: 0')
  await wrapper.find('button').trigger('click')
  expect(wrapper.find('button').text()).toBe('count is: 1')
})
