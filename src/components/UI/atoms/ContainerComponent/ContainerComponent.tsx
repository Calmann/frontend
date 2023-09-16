
import './ContainerComponent.css'
import React from 'react';

type ContainerComponentProps = {
  children: React.ReactNode;
  className?: string;
}

export default function ContainerComponent(props: ContainerComponentProps) {
  return (
        <div className={props.className}>
          {props.children}
        </div>
  );
}
