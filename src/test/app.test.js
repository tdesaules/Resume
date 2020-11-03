import { mount } from '@vue/test-utils'
import vue_app from 'Vue/app.vue'

describe('app.vue', () => {
  const wrapper = mount(vue_app);
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  })
});
