import "./ButtonComponent.css";
import React from "react";

type ButtonComponentProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export default function ButtonComponent(props: ButtonComponentProps) {
  return (
    <button className={props.className} onClick={props.onClick}>
      {props.children}
    </button>
  );
}
