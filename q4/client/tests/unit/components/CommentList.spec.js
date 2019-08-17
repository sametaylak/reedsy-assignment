import { shallowMount } from '@vue/test-utils'
import CommentList from '@/components/CommentList.vue'
import CommentItem from '@/components/CommentItem.vue'

describe('CommentList.vue', () => {
  it('has a comments prop', () => {
    const wrapper = shallowMount(CommentList)

    expect(wrapper.props().comments).toBeUndefined();
  })

  it('should render CommentItem.vue', () => {
    const comments = [
      { message: 'This is awesome!' },
      { message: 'This is awesome!' }
    ]

    const wrapper = shallowMount(CommentList, {
      propsData: { comments }
    })

    expect(wrapper.props().comments).toEqual(comments)
    expect(wrapper.find(CommentItem).exists()).toBe(true)
    expect(wrapper.findAll(CommentItem).length).toEqual(2)
  })
})
