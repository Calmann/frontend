
import ContainerComponent from '../../atoms/ContainerComponent/ContainerComponent';
import FooterContainerComponent from '../../atoms/FooterContainerComponent/FooterContainerComponent'
import TextComponent from '../../atoms/TextComponent/TextComponent';
import './FooterComponent.css'

export default function FooterComponent() {
  return (
    <FooterContainerComponent>
      <ContainerComponent className='footer'>
        <TextComponent>© Google 2023</TextComponent>
        <TextComponent>version: 0.1.0</TextComponent>
      </ContainerComponent>
    </FooterContainerComponent>
  );
}
