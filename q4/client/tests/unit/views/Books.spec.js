import { createLocalVue, shallowMount } from '@vue/test-utils'
import Vuex from 'vuex'

import Books from '@/views/Books.vue'

describe('Books.vue', () => {
  let wrapper
  let state
  let getters
  let actions
  let store

  const localVue = createLocalVue()
  localVue.use(Vuex)

  beforeEach(() => {
    state = {
      books: {
        data: [],
        meta: {
          count: 0
        }
      }
    }
    getters = {
      books: jest.fn(state => state.books.data),
    }
    actions = {
      fetchBooks: jest.fn(() => {
        state.books.data.push({
          author: 'Book Author',
          title: 'Book Title',
          synopsis: 'Book Synopsis',
          slug: 'book-title'
        })
        state.books.meta.count += 1
      }) 
    }
    store = new Vuex.Store({
      state,
      actions,
      getters
    })
  })

  it('should fetch books if there arent', () => {
    wrapper = shallowMount(Books, {
      store,
      localVue
    })

    expect(actions.fetchBooks.mock.calls.length).toEqual(1)
  })

  it('shouldt fetch books if there are', () => {
    state.books.data.push({
      author: 'Book Author',
      title: 'Book Title',
      synopsis: 'Book Synopsis',
      slug: 'book-title'
    })
    state.books.meta.count += 1

    wrapper = shallowMount(Books, {
      store,
      localVue
    })

    expect(actions.fetchBooks.mock.calls.length).toEqual(0)
  })

  it('should search books with title and synopsis', () => {
    state.books.data.push({
      author: 'Book Author',
      title: 'Book Title',
      synopsis: 'Book Synopsis',
      slug: 'book-title'
    })
    state.books.data.push({
      author: 'Another Author',
      title: 'Another',
      synopsis: 'Another Synopsis',
      slug: 'another'
    })
    state.books.meta.count += 2

    wrapper = shallowMount(Books, {
      store,
      localVue
    })

    wrapper.find('.search input').setValue('Another')
    expect(wrapper.vm.filteredBooks.length).toEqual(1)
    expect(wrapper.vm.filteredBooks[0].title).toEqual('Another')

    wrapper.find('.search input').setValue('Book Synopsis')
    expect(wrapper.vm.filteredBooks.length).toEqual(1)
    expect(wrapper.vm.filteredBooks[0].title).toEqual('Book Title')
  })
})
