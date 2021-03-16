import React from 'react'
import { InputTitleStyled } from './InputTitleStyled'

interface IProps {
  placeholder?: string
}

const InputTitle = (props: IProps) => {
  return <InputTitleStyled placeholder={props.placeholder}></InputTitleStyled>
}

export default InputTitle
