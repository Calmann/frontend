import './NavbarContainerComponent.css'
import React from 'react';

type NavbarContainerComponentProps = {
  children: React.ReactNode;
}

export default function NavbarContainerComponent(props: NavbarContainerComponentProps) {
  return (
    <>
      <nav className='navbar-box'>
        {props.children}
      </nav>
      <div className='navbar-padding'></div>
    </>
  );
}
