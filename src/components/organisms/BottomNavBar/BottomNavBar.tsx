import React from 'react'
import Column from '../../atoms/Column/Column'
import Row from '../../atoms/Row/Row'
import Wrapper from '../../atoms/Wrapper/Wrapper'
import { BottomNavBarStyled } from './BottomNavBarStyled'
import NavBarItem from '../../molecules/NavBarItem/NavBarItem'

import HomePrimaryIconSource from '../../../assets/icons/home-primary-icon.svg'
import HomeAccentIconSource from '../../../assets/icons/home-accent-icon.svg'
import HomeWhiteIconSource from '../../../assets/icons/home-white-icon.svg'

import HeartPrimaryIconSource from '../../../assets/icons/heart-primary-icon.svg'
import HeartAccentIconSource from '../../../assets/icons/heart-accent-icon.svg'
import HeartWhiteIconSource from '../../../assets/icons/heart-white-icon.svg'

import AddNotePrimaryIconSource from '../../../assets/icons/add-note-primary-icon.svg'
import AddNoteAccentIconSource from '../../../assets/icons/add-note-accent-icon.svg'
import AddNoteWhiteIconSource from '../../../assets/icons/add-note-white-icon.svg'

import AboutPrimaryIconSource from '../../../assets/icons/about-primary-icon.svg'
import AboutAccentIconSource from '../../../assets/icons/about-accent-icon.svg'
import AboutWhiteIconSource from '../../../assets/icons/about-white-icon.svg'

interface IProps {}

const BottomNavBar = (props: IProps) => {
  return (
    <BottomNavBarStyled>
      <Wrapper>
        <Row>
          <Column desktopSize={3}>
            <NavBarItem
              title="Главная"
              primaryIconSource={HomePrimaryIconSource}
              accentIconSource={HomeAccentIconSource}
              whiteIconSource={HomeWhiteIconSource}
            ></NavBarItem>
          </Column>
          <Column desktopSize={3}>
            <NavBarItem
              title="Избранное"
              primaryIconSource={HeartPrimaryIconSource}
              accentIconSource={HeartAccentIconSource}
              whiteIconSource={HeartWhiteIconSource}
            ></NavBarItem>
          </Column>
          <Column desktopSize={3}>
            <NavBarItem
              title="Создать"
              primaryIconSource={AddNotePrimaryIconSource}
              accentIconSource={AddNoteAccentIconSource}
              whiteIconSource={AddNoteWhiteIconSource}
            ></NavBarItem>
          </Column>
          <Column desktopSize={3}>
            <NavBarItem
              title="О нас"
              primaryIconSource={AboutPrimaryIconSource}
              accentIconSource={AboutAccentIconSource}
              whiteIconSource={AboutWhiteIconSource}
            ></NavBarItem>
          </Column>
        </Row>
      </Wrapper>
    </BottomNavBarStyled>
  )
}

export default BottomNavBar
