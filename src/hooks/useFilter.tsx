//Other
import { useState } from 'react'

export const useFilter = () => {
  const [filter, setFilter] = useState<string | null>('ALL')

  const setFilterALL = () => {
    setFilter('ALL')
  }

  const setFilterMR = () => {
    setFilter('HCI')
  }

  const setFilterGD = () => {
    setFilter('3D Modeling')
  }

  const setFilterUX = () => {
    setFilter('Publications')
  }

  const setFilterVE = () => {
    setFilter('Social Media')
  }

  // const setFilter3D = () => {
  //   setFilter('3D')
  // }

  return {
    filter,
    setFilterALL,
    setFilterMR,
    setFilterGD,
    setFilterUX,
    setFilterVE,
    // setFilter3D,
    setFilter,
  }
}
