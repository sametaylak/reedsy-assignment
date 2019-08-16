import { shallowMount } from '@vue/test-utils'
import UpvoteArea from '@/components/UpvoteArea.vue'

describe('UpvoteArea.vue', () => {
  it('has a book prop', () => {
    const wrapper = shallowMount(UpvoteArea)

    expect(wrapper.props().book).toBeUndefined();
  })

  it('button text must be upvoted and has a upvoted class', () => {
    const book = {
      author: 'Samet A.',
      title: 'Odyssey',
      slug: 'odyssey',
      synopsis: 'best book ever',
      upvoted: true,
      upvotes: 101
    }

    const wrapper = shallowMount(UpvoteArea, {
      propsData: { book }
    })

    expect(wrapper.props().book).toEqual(book)
    expect(wrapper.find('button.upvoted').exists()).toBe(true)
    expect(wrapper.find('button.upvoted').text()).toEqual('Upvoted')
    expect(wrapper.find('button.upvote').exists()).toBe(false)
  })

  it('button text must be upvote and has a upvote class', () => {
    const book = {
      author: 'Samet A.',
      title: 'Odyssey',
      slug: 'odyssey',
      synopsis: 'best book ever',
      upvoted: false,
      upvotes: 101
    }

    const wrapper = shallowMount(UpvoteArea, {
      propsData: { book }
    })

    expect(wrapper.props().book).toEqual(book)
    expect(wrapper.find('button.upvote').exists()).toBe(true)
    expect(wrapper.find('button.upvote').text()).toEqual('Upvote')
    expect(wrapper.find('button.upvoted').exists()).toBe(false)
  })
})
