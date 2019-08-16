import { shallowMount } from '@vue/test-utils'
import BookList from '@/components/BookList.vue'
import BookItem from '@/components/BookItem.vue'

describe('BookList.vue', () => {
  it('has a list prop', () => {
    const wrapper = shallowMount(BookList)

    expect(wrapper.props().list).toEqual([]);
  })

  it('renders BookItem when props.list passed', () => {
    const list = [
      {
        author: 'Samet A.',
        title: 'Odyssey',
        slug: 'odyssey',
        synopsis: 'best book ever',
        upvoted: true,
        upvotes: 101
      }
    ]

    const wrapper = shallowMount(BookList, {
      propsData: { list }
    })

    expect(wrapper.props().list).toEqual(list)
    expect(wrapper.find(BookItem).exists()).toBe(true)
    expect(wrapper.findAll(BookItem).length).toEqual(1)
  })
})
