import React from 'react'
import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  LargeText,
  MediumText,
  NormalText,
  SmallText,
  Subtitle1,
  Subtitle2,
  Caption,
  Body1,
  Body2,
  ButtonText,
  Overline,
} from './TextStyled'

type THeadingType =
  | 'heading-1'
  | 'heading-2'
  | 'heading-3'
  | 'heading-4'
  | 'heading-5'
  | 'heading-6'
type TTextType = 'large-text' | 'medium-text' | 'normal-text' | 'small-text'
type TSubtitleType = 'subtitle-1' | 'subtitle-2'
type TCaptionType = 'caption'
type TBodyType = 'body-1' | 'body-2'
type TButtonTextType = 'button-text'
type TOverlineType = 'overline'

interface IProps {
  type:
    | THeadingType
    | TTextType
    | TSubtitleType
    | TCaptionType
    | TBodyType
    | TButtonTextType
    | TOverlineType
  weight?: 'regular' | 'medium' | 'bold'
  children?: React.ReactNode
}

const Text = (props: IProps) => {
  return (
    <React.Fragment>
      {props.type === 'heading-1' && <Heading1>{props.children}</Heading1>}
      {props.type === 'heading-2' && <Heading2>{props.children}</Heading2>}
      {props.type === 'heading-3' && <Heading3>{props.children}</Heading3>}
      {props.type === 'heading-4' && <Heading4>{props.children}</Heading4>}
      {props.type === 'heading-5' && <Heading5>{props.children}</Heading5>}
      {props.type === 'heading-6' && <Heading6>{props.children}</Heading6>}

      {props.type === 'large-text' && (
        <LargeText weight={props.weight}>{props.children}</LargeText>
      )}
      {props.type === 'medium-text' && (
        <MediumText weight={props.weight}>{props.children}</MediumText>
      )}
      {props.type === 'normal-text' && (
        <NormalText weight={props.weight}>{props.children}</NormalText>
      )}
      {props.type === 'small-text' && (
        <SmallText weight={props.weight}>{props.children}</SmallText>
      )}

      {props.type === 'subtitle-1' && <Subtitle1>{props.children}</Subtitle1>}
      {props.type === 'subtitle-2' && <Subtitle2>{props.children}</Subtitle2>}

      {props.type === 'caption' && <Caption>{props.children}</Caption>}

      {props.type === 'body-1' && <Body1>{props.children}</Body1>}
      {props.type === 'body-2' && <Body2>{props.children}</Body2>}

      {props.type === 'button-text' && (
        <ButtonText>{props.children}</ButtonText>
      )}

      {props.type === 'overline' && <Overline>{props.children}</Overline>}
    </React.Fragment>
  )
}

export default Text
