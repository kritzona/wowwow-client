import React from 'react'
import { InputContentStyled } from './InputContentStyled'

interface IProps {
  placeholder?: string
  value?: string
}

const InputContent = (props: IProps) => {
  return (
    <InputContentStyled
      placeholder={props.placeholder}
      value={props.value}
    ></InputContentStyled>
  )
}

export default InputContent
