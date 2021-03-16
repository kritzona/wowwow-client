import React from 'react'
import { InputContentStyled } from './InputContentStyled'

interface IProps {
  placeholder?: string
}

const InputContent = (props: IProps) => {
  return (
    <InputContentStyled placeholder={props.placeholder}></InputContentStyled>
  )
}

export default InputContent
