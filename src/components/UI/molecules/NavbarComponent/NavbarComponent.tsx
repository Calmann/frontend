
import {
  FaGripVertical, FaSearch,
} from 'react-icons/fa';
import logo from '../../../../assets/google-logo.png';
import profile from '../../../../assets/profile.png';
import './NavbarComponent.css'
import React from 'react';
import NavbarContainerComponent from '../../atoms/NavbarContainerComponent/NavbarContainerComponent';
import ContainerComponent from '../../atoms/ContainerComponent/ContainerComponent';
import TextComponent from '../../atoms/TextComponent/TextComponent';
import ImageComponent from '../../atoms/ImageComponent/ImageComponent';
import InputComponent from '../../atoms/InputComponent/InputComponent';

type NavbarComponentProps = {
  isSearch: boolean;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>
}

export default function NavbarComponent(props: NavbarComponentProps) {
  return (
    <NavbarContainerComponent>
      <ContainerComponent className='navbar'>
        {!props.isSearch
          ? <TextComponent><strong>Agile Content</strong> Frontend Test</TextComponent>
          : <ContainerComponent className='input-flex'>
            <ImageComponent src={logo} className='logo-navbar' />
            <ContainerComponent className='input-box'>
              <FaSearch />
              <InputComponent className='input' value={props.search} onChange={input => props.setSearch(input.target.value)} />
            </ContainerComponent>
          </ContainerComponent>}
        <ContainerComponent className='navbar-menu'>
          <ImageComponent src={profile} className='profile' />
          <FaGripVertical />
        </ContainerComponent>
      </ContainerComponent>
    </NavbarContainerComponent>
  );
}
