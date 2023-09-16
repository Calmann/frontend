
import {
  FaGripVertical, FaSearch,
} from 'react-icons/fa';
import logo from '../../../../assets/google-logo.png';
import profile from '../../../../assets/profile.png';
import './NavbarComponent.css'
import React from 'react';
import NavbarContainerComponent from '../../atoms/NavbarContainerComponent/NavbarContainerComponent';

type NavbarComponentProps = {
  isSearch: boolean;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>
}

export default function NavbarComponent(props: NavbarComponentProps) {
  return (
      <NavbarContainerComponent>
        <div className='navbar'>
          {!props.isSearch
            ? <p><b>Agile Content</b> Frontend Test</p>
            : <div className='input-flex'>
              <img src={logo} className='logo-navbar' />
              <div className='input-box'>
                <FaSearch />
                <input className='input' value={props.search} onChange={input => props.setSearch(input.target.value)} />
              </div>
            </div>}
          <div className='navbar-menu'>
            <img src={profile} className='profile' />
            <FaGripVertical />
          </div>
        </div>
      </NavbarContainerComponent>
  );
}
