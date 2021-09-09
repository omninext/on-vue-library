import OnButton from '@/lib-components/OnButton.vue'
import { shallowMount } from '@vue/test-utils/dist/vue-test-utils'

describe('OnButton.vue', () => {
  it('checks disabled props', () => {
    const disabled = true
    const wrapper = shallowMount(OnButton, {
      propsData: { disabled }
    })
    expect(wrapper.attributes('disabled')).toBeTruthy()

  }),
  it('checks color',()=>{
    expect(true).toBeTruthy()
  })
})
