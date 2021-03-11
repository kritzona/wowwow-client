import React from 'react'
import HeaderStyled, {
  HeaderLogoStyled,
  HeaderTitleWithLogoStyled,
  HeaderTopStyled,
  HeaderBottomStyled,
} from './HeaderStyled'
import Wrapper from '../../atoms/Wrapper/Wrapper'
import Row from '../../atoms/Row/Row'
import Column from '../../atoms/Column/Column'
import Button from '../../atoms/Button/Button'
import Text from '../../atoms/Text/Text'

interface IProps {}

const Header = (props: IProps) => {
  return (
    <HeaderStyled>
      <Wrapper paddingY={false}>
        <HeaderTopStyled>
          <Row gutter={true}>
            <Column size={12}>
              <HeaderTitleWithLogoStyled>
                <HeaderLogoStyled></HeaderLogoStyled>
                <Text type="heading-1">WowWow</Text>
              </HeaderTitleWithLogoStyled>
            </Column>
          </Row>
        </HeaderTopStyled>
        <HeaderBottomStyled>
          <Row gutter={true}>
            <Column size={12}>
              <Text type="subtitle-1">Приложение для создания заметок</Text>
            </Column>
          </Row>
          <Row gutter={true}>
            <Column size={12}>
              <Text type="caption">GitHub: @kritzona</Text>
            </Column>
          </Row>
        </HeaderBottomStyled>
      </Wrapper>
    </HeaderStyled>
  )
}

export default Header
