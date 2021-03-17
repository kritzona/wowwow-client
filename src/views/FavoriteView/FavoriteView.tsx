import React from 'react'
import { FavoriteViewStyled } from './FavoriteViewStyled'
import NotesContainer from '../../containers/NotesContainer/NotesContainer'

interface IProps {}

const FavoriteView = (props: IProps) => {
  return (
    <FavoriteViewStyled>
      <NotesContainer
        title="Избранное"
        visible="only-favorite"
      ></NotesContainer>
    </FavoriteViewStyled>
  )
}

export default FavoriteView
