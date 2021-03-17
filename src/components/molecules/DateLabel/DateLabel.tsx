import React from 'react'
import Text from '../../atoms/Text/Text'
import { DateLabelStyled } from './DateLabelStyled'
import { formatDate } from '../../../utils/date'

interface IProps {
  date: Date
}

const DateLabel = (props: IProps) => {
  return (
    <DateLabelStyled>
      <Text type="overline">{formatDate(props.date)}</Text>
    </DateLabelStyled>
  )
}

export default DateLabel
