import { shallowMount } from '@vue/test-utils'
import vue_app from 'Vue/app.vue'

describe('app.vue', () => {
  const wrapper = shallowMount(vue_app);
  test('has vue_categories', () => {
    expect(wrapper.html()).toContain('<vue_categories-stub></vue_categories-stub>')
  })
  test('has vue_body', () => {
    expect(wrapper.html()).toContain('<vue_body-stub></vue_body-stub>')
  })
  test('has vue_footer', () => {
    expect(wrapper.html()).toContain('<vue_footer-stub></vue_footer-stub>')
  })
});
