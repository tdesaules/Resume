import { mount } from '@vue/test-utils'
import App from 'Vue/app.vue'

describe('App.vue', () => {
  const wrapper = mount(App);
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  })
});
