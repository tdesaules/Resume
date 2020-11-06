import { shallowMount } from '@vue/test-utils'
import app from 'Vue/app.vue'

describe('app.vue', () => {
  const wrapper = shallowMount(app);
  test('has VueCategories', () => {
    expect(wrapper.html()).toContain('<vuecategories-stub></vuecategories-stub>')
  })
  test('has VueBody', () => {
    expect(wrapper.html()).toContain('<vuebody-stub></vuebody-stub>')
  })
  test('has VueFooter', () => {
    expect(wrapper.html()).toContain('<vuefooter-stub></vuefooter-stub>')
  })
});
