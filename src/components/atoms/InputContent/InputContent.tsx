import React from 'react'
import { InputContentStyled } from './InputContentStyled'

interface IProps {
  placeholder?: string
  value?: string
  onChange?: (value: string) => void
}

const InputContent = (props: IProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) =>
    props.onChange ? props.onChange(event.target.value) : null

  return (
    <InputContentStyled
      placeholder={props.placeholder}
      value={props.value}
      onChange={handleChange}
    ></InputContentStyled>
  )
}

export default InputContent
