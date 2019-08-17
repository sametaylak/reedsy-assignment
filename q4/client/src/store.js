import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const BASE_URL = 'http://localhost:3000'

export default new Vuex.Store({
  state: {
    books: {
      data: [],
      meta: {}
    },
  },
  getters: {
    books: state => state.books.data,
    meta: state => state.books.meta,
    getBookBySlug: (state) => (slug) => state.books.data.find(book => book.slug === slug)
  },
  mutations: {
    setBooks (state, { books, meta }) {
      state.books.data = books
      state.books.meta = meta
    }
  },
  actions: {
    async fetchBooks ({ commit }) {
      const booksResponse = await fetch(`${BASE_URL}/books`)
      const booksJson = await booksResponse.json()
      commit('setBooks', {
        books: booksJson.books,
        meta: booksJson.meta
      })
    },
    async fetchBook (_, slug) {
      const booksResponse = await fetch(`${BASE_URL}/books/${slug}`)
      const booksJson = await booksResponse.json()
      return booksJson
    }
  }
})
