import { shallowMount } from '@vue/test-utils'
import Vue from 'vue'
import Vuex from 'vuex'

import BookDetail from '@/views/BookDetail.vue'

Vue.use(Vuex)

describe('BookDetail.vue', () => {
  let wrapper
  let state
  let getters
  let actions
  let store

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
      books: jest.fn(() => state.books.data),
      getBookBySlug: jest.fn(() => slug => state.books.data.find(book => book.slug === slug))
    }
    actions = {
      fetchBooks: jest.fn(() => {
        state.books.data.push({
          author: 'Samet Aylak',
          slug: 'samet-aylak'
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
    wrapper = shallowMount(BookDetail, {
      mocks: {
        $route: {
          params: {
            slug: 'samet-aylak'
          }
        }
      },
      store
    })

    expect(actions.fetchBooks.mock.calls.length).toEqual(1)
  })

  it('shouldt fetch books if there are', () => {
    state.books.data.push({
      author: 'Samet Aylak',
      slug: 'samet-aylak'
    })
    state.books.meta.count += 1

    wrapper = shallowMount(BookDetail, {
      mocks: {
        $route: {
          params: {
            slug: 'samet-aylak'
          }
        }
      },
      store
    })

    expect(actions.fetchBooks.mock.calls.length).toEqual(0)
  })

  it('should get book by slug', () => {
    state.books.data.push({
      author: 'Samet Aylak',
      slug: 'samet-aylak'
    })
    state.books.meta.count += 1

    wrapper = shallowMount(BookDetail, {
      mocks: {
        $route: {
          params: {
            slug: 'samet-aylak'
          }
        }
      },
      store
    })

    expect(getters.getBookBySlug.mock.calls.length).toEqual(1)
  })
})
