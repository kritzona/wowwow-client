import React from 'react'
import Text from '../../atoms/Text/Text'
import { DateLabelStyled } from './DateLabelStyled'

interface IProps {
  children?: React.ReactNode
}

const DateLabel = (props: IProps) => {
  return (
    <DateLabelStyled>
      <Text type="overline">{props.children}</Text>
    </DateLabelStyled>
  )
}

export default DateLabel
