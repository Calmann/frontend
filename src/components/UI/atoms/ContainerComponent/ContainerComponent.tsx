import "./ContainerComponent.css";
import React from "react";

type ContainerComponentProps = {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export default function ContainerComponent(props: ContainerComponentProps) {
  return (
    <div className={props.className} onClick={props.onClick}>
      {props.children}
    </div>
  );
}
