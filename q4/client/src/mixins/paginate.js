export default (options = { entity: '', perPage: 5 }) => {
  return {
    data () {
      return {
        page: 0,
        perPage: options.perPage 
      }
    },
    computed: {
      onFirstPage () {
        return this.page === 0
      },
      onLastPage () {
        return this.page === this.pageCount - 1
      },
      pageCount () {
        return Math.ceil(this[options.entity].length / this.perPage)
      },
      paginatedData () {
        const first = this.page * this.perPage
        const last = first + this.perPage

        return this[options.entity].slice(first, last)
      }
    },
    methods: {
      nextPage () {
        this.page++
      },
      prevPage () {
        this.page--
      }
    }
  }
}
