import React from 'react'
import { InputTitleStyled } from './InputTitleStyled'

interface IProps {
  placeholder?: string
  value?: string
}

const InputTitle = (props: IProps) => {
  return (
    <InputTitleStyled
      placeholder={props.placeholder}
      value={props.value}
    ></InputTitleStyled>
  )
}

export default InputTitle
