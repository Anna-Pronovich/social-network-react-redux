export type PaginatorType = {
  totalItemsCount: number,
  itemsPerPage: number,
  currentPage: number,
  onPageChanged: (pageNumber: number) => void,
  portionSize?: number,
}