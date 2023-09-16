import './TextComponent.css'
import React from 'react';

type TextComponentProps = {
  children: React.ReactNode;
  className?: string;
}

export default function TextComponent(props: TextComponentProps) {
  return (
    <p className={props.className}>{props.children}</p>
  );
}
