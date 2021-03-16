import React from 'react'
import { InputTitleStyled } from './InputTitleStyled'

interface IProps {
  placeholder?: string
  value?: string
  onChange?: (value: string) => void
}

const InputTitle = (props: IProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    props.onChange ? props.onChange(event.target.value) : null

  return (
    <InputTitleStyled
      placeholder={props.placeholder}
      value={props.value}
      onChange={handleChange}
    ></InputTitleStyled>
  )
}

export default InputTitle
