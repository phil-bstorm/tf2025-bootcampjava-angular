import {Component, computed, effect, Input, input, model, output, signal} from '@angular/core';

export interface IPagination {
  page: number,
  startIndex: number,
  endIndex: number
}

@Component({
  selector: 'm-pagination',
  imports: [],
  templateUrl: './m-pagination.component.html',
  styleUrl: './m-pagination.component.scss'
})
export class MPaginationComponent {
  total = input.required<number>()
  changePageEvent = output<IPagination>({ alias: 'changePage'})

  currentPage = signal(1)
  pageSize = signal(5)

  nbPages = computed(() => {
    const total = this.total()
    const pageSize = this.pageSize()

    return Math.ceil(total / pageSize)
  })

  pages = computed(() => {
    const nbPages = this.nbPages()

    const pages = []

    for(let page = 1; page <= nbPages; page++) {
      pages.push(page)
    }

    return pages
  })

  startIndex = computed(() => {
    const current = this.currentPage()
    const pageSize = this.pageSize()

    return (current - 1) * pageSize
  })

  endIndex = computed(() => {
    const start = this.startIndex()
    const pageSize = this.pageSize()

    return start + pageSize
  })

  currentPageEffect = effect(() => {
    const page = this.currentPage()
    const startIndex = this.startIndex()
    const endIndex = this.endIndex()

    this.changePageEvent.emit({page, startIndex, endIndex})
  })

  handlePreviousPage() {
    const current = this.currentPage()

    if (current > 1) {
      this.currentPage.update((old) => --old)
    }
  }

  handlePage(page: number) {
    this.currentPage.set(page)
  }

  handleNextPage() {
    const current = this.currentPage()
    const nbPage = this.nbPages()

    if (current < nbPage) {
      this.currentPage.update(old => ++old)
    }
  }

  handlePageSize(value: number) {
    this.pageSize.set(value)
  }
}
