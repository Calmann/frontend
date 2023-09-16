
import {
  FaGripVertical,
} from 'react-icons/fa';
import profile from '../../../../assets/profile.png';
import './NavbarMenuComponent.css'
import ContainerComponent from '../../atoms/ContainerComponent/ContainerComponent';
import ImageComponent from '../../atoms/ImageComponent/ImageComponent';


export default function NavbarMenuComponent() {
  return (
    <ContainerComponent className='navbar-menu'>
      <ImageComponent src={profile} className='profile' />
      <FaGripVertical />
    </ContainerComponent>
  );
}
