import "./TextComponent.css";
import React from "react";

type TextComponentProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export default function TextComponent(props: TextComponentProps) {
  return (
    <p className={props.className} onClick={props.onClick}>
      {props.children}
    </p>
  );
}
