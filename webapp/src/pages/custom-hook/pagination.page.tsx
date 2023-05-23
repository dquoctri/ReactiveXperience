import React, { Fragment } from "react"
import PageTitle from "components/common/page-title"
import PageProps from "pages/page.type"
import { usePagination } from "hooks"

const PaginationPage = ({ title }: PageProps) => {
  const sampleData = Array.from({ length: 20 }, (_, index) => `Item ${index + 1}`)
  const pageSize = 5

  const { paginatedData, currentPage, totalPages, goToPage, nextPage, prevPage } = usePagination({
    data: sampleData,
    pageSize,
  })

  return (
    <Fragment>
      <PageTitle title={title ? title : "Local Storage Page"} />

      <div>Pagination content</div>
      <div>
        <h2>Paginated Data</h2>
        <ul>
          {paginatedData.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div>
          <button onClick={() => prevPage()}>Previous Page</button>
          <button onClick={() => nextPage()}>Next Page</button>
        </div>
        <p>
          Page {currentPage} of {totalPages}
        </p>
        <div>
          Go to page:
          {Array.from({ length: totalPages }, (_, index) => (
            <button key={index + 1} onClick={() => goToPage(index + 1)}>
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </Fragment>
  )
}

export default PaginationPage
