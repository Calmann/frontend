
import {
  FaSearch,
} from 'react-icons/fa';
import logo from '../../../../assets/google-logo.png';
import './NavbarSearchComponent.css'
import React from 'react';
import ContainerComponent from '../../atoms/ContainerComponent/ContainerComponent';
import ImageComponent from '../../atoms/ImageComponent/ImageComponent';
import InputComponent from '../../atoms/InputComponent/InputComponent';

type NavbarSearchComponentProps = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>
}

export default function NavbarSearchComponent(props: NavbarSearchComponentProps) {
  return (
    <ContainerComponent className='input-flex'>
      <ImageComponent src={logo} className='logo-navbar' />
      <ContainerComponent className='input-box'>
        <FaSearch />
        <InputComponent className='input' value={props.search} onChange={input => props.setSearch(input.target.value)} />
      </ContainerComponent>
    </ContainerComponent>
  );
}
