import React from 'react'
import { HomeViewStyled } from './HomeViewStyled'
import NotesContainer from '../../containers/NotesContainer/NotesContainer'

interface IProps {}

const HomeView = (props: IProps) => {
  return (
    <HomeViewStyled>
      <NotesContainer title="Все заметки" visible="all"></NotesContainer>
    </HomeViewStyled>
  )
}

export default HomeView
