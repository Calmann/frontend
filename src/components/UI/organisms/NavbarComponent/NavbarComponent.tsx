import "./NavbarComponent.css";
import React from "react";
import NavbarContainerComponent from "../../atoms/NavbarContainerComponent/NavbarContainerComponent";
import ContainerComponent from "../../atoms/ContainerComponent/ContainerComponent";
import TextComponent from "../../atoms/TextComponent/TextComponent";
import NavbarSearchComponent from "../../molecules/NavbarSearchComponent/NavbarSearchComponent";
import NavbarMenuComponent from "../../molecules/NavbarMenuComponent/NavbarMenuComponent";

type NavbarComponentProps = {
  isSearch: boolean;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

export default function NavbarComponent(props: NavbarComponentProps) {
  return (
    <NavbarContainerComponent>
      <ContainerComponent className="navbar">
        {!props.isSearch ? (
          <TextComponent>
            <strong>Agile Content</strong> Frontend Test
          </TextComponent>
        ) : (
          <NavbarSearchComponent
            search={props.search}
            setSearch={props.setSearch}
          />
        )}
        <NavbarMenuComponent />
      </ContainerComponent>
    </NavbarContainerComponent>
  );
}
