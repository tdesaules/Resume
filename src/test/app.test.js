import { mount } from '@vue/test-utils'
import app from 'Vue/app.vue'

describe('app.vue', () => {
  const wrapper = mount(app);
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  })
});
