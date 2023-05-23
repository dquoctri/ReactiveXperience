import { useState } from "react"

interface PaginationOptions<T> {
  data: T[]
  pageSize: number
}

interface PaginationResult<T> {
  paginatedData: T[]
  currentPage: number
  totalPages: number
  goToPage: (page: number) => void
  nextPage: () => void
  prevPage: () => void
}

export const usePagination = <T>({ data, pageSize }: PaginationOptions<T>): PaginationResult<T> => {
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(data.length / pageSize)
  const startIndex = (currentPage - 1) * pageSize
  const endIndex = startIndex + pageSize
  const paginatedData = data.slice(startIndex, endIndex)

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page)
    }
  }

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prevPage => prevPage + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1)
    }
  }

  return { paginatedData, currentPage, totalPages, goToPage, nextPage, prevPage }
}
