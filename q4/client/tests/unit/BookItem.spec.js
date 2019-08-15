import { createLocalVue, shallowMount } from '@vue/test-utils'
import VueRouter from 'vue-router'
import router from '@/router'

import BookItem from '@/components/BookItem.vue'
import truncate from '@/filters/truncate'

describe('BookItem.vue', () => {
  const localVue = createLocalVue()
  localVue.use(VueRouter)
  localVue.filter('truncate', truncate)

  it('has a order and book props', () => {
    const wrapper = shallowMount(BookItem, {
      localVue
    })
    expect(wrapper.props().order).toBeUndefined()
    expect(wrapper.props().book).toBeUndefined()
  })

  it('renders BookItem when props.book passed', () => {
    const book = {
      author: 'Samet A.',
      title: 'Odyssey',
      slug: 'odyssey',
      cover: 'odyssey.jpg',
      synopsis: 'best book ever',
      upvoted: true,
      upvotes: 101
    }

    const wrapper = shallowMount(BookItem, {
      propsData: { order: 0, book },
      localVue
    })

    expect(wrapper.props().book).toEqual(book)
    expect(wrapper.text()).toContain(book.title)
    expect(wrapper.text()).toContain(book.author)
    expect(wrapper.text()).toContain(book.synopsis)
  })

  it('should call goToDetail when cover or title clicked', () => {
    const book = {
      author: 'Samet A.',
      title: 'Odyssey',
      slug: 'odyssey',
      cover: 'odyssey.jpg',
      synopsis: 'best book ever',
      upvoted: true,
      upvotes: 101
    }

    const wrapper = shallowMount(BookItem, {
      propsData: { order: 0, book },
      localVue
    })

    const goToDetailMock = jest.fn()
    wrapper.setMethods({
      goToDetail: goToDetailMock
    })
    
    wrapper.find('.title').trigger('click')
    expect(goToDetailMock.mock.calls.length).toEqual(1)

    wrapper.find('.book-cover').trigger('click')
    expect(goToDetailMock.mock.calls.length).toEqual(2)
  })

  it('should change route to goToDetail when cover or title clicked', () => {
    const book = {
      author: 'Samet A.',
      title: 'Odyssey',
      slug: 'odyssey',
      cover: 'odyssey.jpg',
      synopsis: 'best book ever',
      upvoted: true,
      upvotes: 101
    }

    const wrapper = shallowMount(BookItem, {
      propsData: { order: 0, book },
      localVue,
      router
    })
    
    wrapper.find('.title').trigger('click')
    expect(wrapper.vm.$route.name).toEqual('BookDetail')
  })
})
