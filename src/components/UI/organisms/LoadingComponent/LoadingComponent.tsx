import ContainerComponent from "../../atoms/ContainerComponent/ContainerComponent";
import React from "react";
import Skeleton from "react-loading-skeleton";
import "./LoadingComponent.css";
import "react-loading-skeleton/dist/skeleton.css";

type LoadingComponentProps = {
  children: React.ReactNode;
  isLoading: boolean;
};

export default function LoadingComponent(props: LoadingComponentProps) {
  return (
    <>
      {props.isLoading
        ? [...new Array(100)].map((item, i) => (
            <ContainerComponent key={i} className="search-result-box">
              <Skeleton height={15} width={300} />
              <Skeleton height={30} width={200} />
              <Skeleton height={50} width={600} />
            </ContainerComponent>
          ))
        : props.children}
    </>
  );
}
