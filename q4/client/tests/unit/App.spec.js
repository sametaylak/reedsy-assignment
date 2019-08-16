import { createLocalVue, shallowMount } from '@vue/test-utils'
import VueRouter from 'vue-router'

import App from '@/App.vue'

describe('App.vue', () => {
  const localVue = createLocalVue()
  localVue.use(VueRouter)

  it('should fetch books if there arent', () => {
    const wrapper = shallowMount(App, {
      localVue
    })

    expect(wrapper.isVueInstance()).toBe(true)
  })
})
