import { FaSearch } from "react-icons/fa";
import ContainerComponent from "../../atoms/ContainerComponent/ContainerComponent";
import ImageComponent from "../../atoms/ImageComponent/ImageComponent";
import "./SearchComponent.css";
import logo from "../../../../assets/google-logo.png";
import InputComponent from "../../atoms/InputComponent/InputComponent";
import ButtonComponent from "../../atoms/ButtonComponent/ButtonComponent";

type SearchComponentProps = {
  search: string;
  onChange: (value: string) => void;
  onClick?: () => void;
};

export default function SearchComponent(props: SearchComponentProps) {
  return (
    <>
      <ImageComponent src={logo} className="logo-search" />
      <ContainerComponent className="input-box">
        <FaSearch />
        <InputComponent
          className="input"
          value={props.search}
          onChange={(input) => props.onChange(input.target.value)}
        />
      </ContainerComponent>
      <ButtonComponent className="search-button" onClick={props.onClick}>
        Buscar
      </ButtonComponent>
    </>
  );
}
