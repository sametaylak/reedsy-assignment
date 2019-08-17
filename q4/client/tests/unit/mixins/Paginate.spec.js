import { createLocalVue, shallowMount } from '@vue/test-utils'
import BookList from '@/components/BookList.vue'
import Pagination from '@/components/Pagination.vue'
import paginate from '@/mixins/paginate'

describe('Paginate Entity', () => {
  const localVue = createLocalVue()
  
  it('should go next page and prev page', () => {
    const list = [
      {
        author: 'Book Author',
        title: 'Book Title',
        synopsis: 'Book Synopsis',
        slug: 'book-title'
      },
      {
        author: 'Another Author',
        title: 'Another',
        synopsis: 'Another Synopsis',
        slug: 'another'
      }
    ]

    const wrapper = shallowMount(BookList, {
      propsData: { list },
      mixins: [
        paginate({ entity: 'list', perPage: 1 })
      ],
      localVue
    })

    expect(wrapper.vm.paginatedData.length).toEqual(1)
    expect(wrapper.vm.paginatedData[0].title).toEqual('Book Title')

    const pagination = wrapper.find(Pagination)
    expect(pagination.exists()).toBeTruthy()

    pagination.vm.nextPage()

    expect(wrapper.vm.paginatedData.length).toEqual(1)
    expect(wrapper.vm.paginatedData[0].title).toEqual('Another')
    
    pagination.vm.prevPage()

    expect(wrapper.vm.paginatedData.length).toEqual(1)
    expect(wrapper.vm.paginatedData[0].title).toEqual('Book Title')
  })

  it('should reset page if pageCount changes', () => {
    const list = [
      {
        author: 'Book Author',
        title: 'Book Title',
        synopsis: 'Book Synopsis',
        slug: 'book-title'
      },
      {
        author: 'Another Author',
        title: 'Another',
        synopsis: 'Another Synopsis',
        slug: 'another'
      }
    ]

    const wrapper = shallowMount(BookList, {
      propsData: { list },
      mixins: [
        paginate({ entity: 'list', perPage: 1 })
      ],
      localVue
    })

    const pagination = wrapper.find(Pagination)
    expect(pagination.exists()).toBeTruthy()

    expect(wrapper.vm.page).toEqual(0)
    pagination.vm.nextPage()
    expect(wrapper.vm.page).toEqual(1)
    wrapper.vm.perPage = 2
    expect(wrapper.vm.page).toEqual(0)
  })
})
