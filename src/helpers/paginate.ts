export default function collapseRange(page: number, pages: number) {
  const pagesArr = Array.from({ length: pages }, (_, i) => i + 1).map(
    (pageNumber) => pageNumber,
  )

  const total = pagesArr.length // total number of pages
  const max = 5 // max pages to display

  // only display ellipsis if we have more pages6 than can be displayed
  const needEllipsis = total > max

  const hasStartEllipsis = needEllipsis && page > max - 2
  const hasEndEllipsis = needEllipsis && page < total - 2

  if (!needEllipsis) {
    return pagesArr
  }

  let collapsedRange = []

  // when we have a START ellipsis, we want to add the first page
  if (hasStartEllipsis) {
    collapsedRange.push(1, '...')
  }

  // when we don't have a START ellipsis and the current page is not the first page, we want to add the first page
  if (!hasStartEllipsis && page !== 1) {
    collapsedRange.push(1)
  }

  // when we don't have an END ellipsis and the current page is the last page, we want to add the last page - 2
  if (!hasEndEllipsis && page == total) {
    collapsedRange.push(page - 2)
  }

  // when the page is more than the first page, we want to add the previous page
  if (page > 1) {
    collapsedRange.push(page - 1)
  }

  // add the current page
  collapsedRange.push(page)

  // when the page is less than the last page, we want to add the next page
  if (page < total && page + 1 !== total) {
    collapsedRange.push(page + 1)
  }

  // when we don't have a START ellipsis and the current page is the first page, we want to add the first page + 2
  if (!hasStartEllipsis && page == 1) {
    collapsedRange.push(page + 2)
  }

  // when we don't have an END ellipsis and the current page is not the last page, we want to add the last page
  if (!hasEndEllipsis && page !== total) {
    collapsedRange.push(total)
  }

  // when we have an END ellipsis, we want to add the last page
  if (hasEndEllipsis) {
    collapsedRange.push('...', total)
  }

  return collapsedRange
}
