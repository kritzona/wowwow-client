import React from 'react'
import {
  ContentStyled,
  ContentWrapperStyled,
  ContentCogriStyled,
} from './ContentStyled'
import Wrapper from '../../atoms/Wrapper/Wrapper'

interface IProps {
  children?: React.ReactNode
}

const Content = (props: IProps) => {
  return (
    <ContentStyled>
      <Wrapper paddingX={false}>
        <ContentWrapperStyled>
          {props.children}
          <ContentCogriStyled></ContentCogriStyled>
        </ContentWrapperStyled>
      </Wrapper>
    </ContentStyled>
  )
}

export default Content
