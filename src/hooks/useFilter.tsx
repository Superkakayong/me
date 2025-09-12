//Other
import { useState } from 'react'

export const useFilter = () => {
  const [filter, setFilter] = useState<string | null>('ALL')

  const setFilterALL = () => {
    setFilter('ALL')
  }

  const setFilterMO = () => {
    setFilter('MOTION DESIGN')
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
    setFilterMO,
    setFilterGD,
    setFilterUX,
    setFilterVE,
    setFilter3D,
    setFilter,
  }
}
