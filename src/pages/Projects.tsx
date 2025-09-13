//Librairies
import React, { useEffect } from 'react'
import uuid from 'react-uuid'
import { useSearchParams } from 'react-router-dom'

//Styles
import {
  FilterContainer,
  GridContainer,
  ProjectsContainer,
  NoProject,
} from '../styles/pages/Projects.style'

//Data
import { projects } from '../data/projects'

//components
import { Button } from '../components/Button/Button'
import { Project } from '../components/Project/Project'
import { PageTransition } from '../components/PageTransition/PageTransition'

//Hooks
import { useFilter } from '../hooks/useFilter'

export const Projects = () => {
  const {
    filter,
    setFilterALL,
    setFilterMR,
    setFilterGD,
    setFilterUX,
    setFilterVE,
    setFilter3D,
  } = useFilter()

  const [searchParams] = useSearchParams()

  let filteredProjects = projects

  if (filter === 'ALL') {
    filteredProjects = projects.filter((project) => project.filter === filter)
  } else {
    filteredProjects = projects.filter(
      (project) => project.mainsTag[0] === filter
    )
  }

  useEffect(() => {
    if (searchParams.get('filter') === 'MIXED REALITY') {
      setFilterMR()
    } else if (searchParams.get('filter') === 'GD') {
      setFilterGD()
    } else if (searchParams.get('filter') === 'x') {
      setFilterUX()
    } else if (searchParams.get('filter') === 'VE') {
      setFilterVE()
    } else if (searchParams.get('filter') === '3D') {
      setFilter3D()
    } else {
      setFilterALL()
    }
  }, [])

  return (
    <PageTransition>
      <ProjectsContainer>
        <FilterContainer>
          <Button
            text={`ALL`}
            size={'s'}
            onclick={setFilterALL}
            active={filter === 'ALL' ? true : false}
          />
          <Button
            text={`MIXED REALITY`}
            size={'s'}
            onclick={setFilterMR}
            active={filter === 'MIXED REALITY' ? true : false}
          />
          <Button
            text={`Generative AI`}
            size={'s'}
            onclick={setFilterGD}
            active={filter === 'GRAPHIC DESIGN' ? true : false}
          />
          <Button
            text={`UX UI DESIGN`}
            size={'s'}
            onclick={setFilterUX}
            active={filter === 'UX UI DESIGN' ? true : false}
          />
          <Button
            text={`VIDEO EDITING`}
            size={'s'}
            onclick={setFilterVE}
            active={filter === 'VIDEO EDITING' ? true : false}
          />
          <Button
            text={`3D`}
            href={'#'}
            size={'s'}
            onclick={setFilter3D}
            active={filter === '3D' ? true : false}
          />
        </FilterContainer>
        <GridContainer>
          {filteredProjects.length === 0 ? (
            <NoProject>Pas de projets disponibles pour le moment.</NoProject>
          ) : (
            filteredProjects.map(
              ({ title, imgPath, mainsTag, secondsTags, id }) => (
                <Project
                  id={id}
                  key={uuid()}
                  title={title}
                  imgPath={imgPath}
                  mainsTag={mainsTag}
                  secondsTags={secondsTags}
                />
              )
            )
          )}
        </GridContainer>
      </ProjectsContainer>
    </PageTransition>
  )
}
