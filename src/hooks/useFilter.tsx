//Other
import { useState } from 'react'

export const useFilter = () => {
  const [filter, setFilter] = useState<string | null>('ALL')

  const setFilterALL = () => {
    setFilter('ALL')
  }

  const setFilterMR = () => {
    setFilter('MIXED REALITY')
  }

  const setFilterGD = () => {
    setFilter('GRAPHIC DESIGN')
  }

  const setFilterUX = () => {
    setFilter('UX UI DESIGN')
  }

  const setFilterVE = () => {
    setFilter('VIDEO EDITING')
  }

  const setFilter3D = () => {
    setFilter('3D')
  }

  return {
    filter,
    setFilterALL,
    setFilterMR,
    setFilterGD,
    setFilterUX,
    setFilterVE,
    setFilter3D,
    setFilter,
  }
}
