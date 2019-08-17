import { shallowMount } from '@vue/test-utils'
import CommentArea from '@/components/CommentArea.vue'
import CommentList from '@/components/CommentList.vue'

describe('CommentArea.vue', () => {
  it('has a comments prop', () => {
    const wrapper = shallowMount(CommentArea)

    expect(wrapper.props().comments).toBeUndefined();
  })

  it('should render CommentList.vue', () => {
    const comments = [
      { message: 'This is awesome!' }
    ]

    const wrapper = shallowMount(CommentArea, {
      propsData: { comments }
    })

    expect(wrapper.props().comments).toEqual(comments)
    expect(wrapper.find(CommentList).exists()).toBe(true)
  })
})
