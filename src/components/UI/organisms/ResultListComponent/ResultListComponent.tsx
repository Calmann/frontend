import ContainerComponent from "../../atoms/ContainerComponent/ContainerComponent";
import "./ResultListComponent.css";
import TextComponent from "../../atoms/TextComponent/TextComponent";
import { FakeRespModel } from "../../../../models/FakeModel";
import React from "react";
import ResultItemComponent from "../../molecules/ResultItemComponent/ResultItemComponent";

type ResultListComponentProps = {
  data: FakeRespModel[];
  delayedSearch: string;
  setSelectedData: React.Dispatch<
    React.SetStateAction<FakeRespModel | undefined>
  >;
};

export default function ResultListComponent(props: ResultListComponentProps) {
  return (
    <>
      {props.data.length > 0 ? (
        props.data.map((item, i) => (
          <ResultItemComponent
            key={i}
            item={item}
            setSelectedData={props.setSelectedData}
          />
        ))
      ) : (
        <ContainerComponent className="search-result-box">
          {props.delayedSearch && (
            <TextComponent className="search-result-description">
              No results found for: '<strong>{props.delayedSearch}</strong>'
            </TextComponent>
          )}
          <TextComponent className="search-result-description">
            Try looking for:{" "}
            <strong>
              insect, fish, horse, crocodilia, bear, cetacean, cow, lion,
              rabbit, cat, snake, dog, bird.
            </strong>
          </TextComponent>
        </ContainerComponent>
      )}
    </>
  );
}
