import { createLocalVue, shallowMount } from '@vue/test-utils'
import Vuex from 'vuex'

import BookDetail from '@/views/BookDetail.vue'

describe('BookDetail.vue', () => {
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
      books: jest.fn(() => state.books.data),
      getBookBySlug: jest.fn(() => slug => state.books.data.find(book => book.slug === slug))
    }
    actions = {
      fetchBook: jest.fn(() => {
        return {
          author: 'Samet Aylak',
          slug: 'samet-aylak'
        }
      }) 
    }
    store = new Vuex.Store({
      state,
      actions,
      getters
    })
  })

  it('should fetch book if there arent', () => {
    wrapper = shallowMount(BookDetail, {
      mocks: {
        $route: {
          params: {
            slug: 'samet-aylak'
          }
        }
      },
      store,
      localVue
    })

    expect(actions.fetchBook.mock.calls.length).toEqual(1)
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
      store,
      localVue
    })

    expect(actions.fetchBook.mock.calls.length).toEqual(0)
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
      store,
      localVue
    })

    expect(getters.getBookBySlug.mock.calls.length).toEqual(1)
  })
})
