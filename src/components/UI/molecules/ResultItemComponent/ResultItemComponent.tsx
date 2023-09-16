import ContainerComponent from "../../atoms/ContainerComponent/ContainerComponent";
import "./ResultItemComponent.css";
import TextComponent from "../../atoms/TextComponent/TextComponent";
import { FakeRespModel } from "../../../../models/FakeModel";

type ResultItemComponentProps = {
  item: FakeRespModel;
  setSelectedData: React.Dispatch<
    React.SetStateAction<FakeRespModel | undefined>
  >;
};

export default function ResultItemComponent(props: ResultItemComponentProps) {
  return (
    <ContainerComponent className="search-result-box">
      <TextComponent className="search-result-url">
        {props.item.url}
      </TextComponent>
      <TextComponent
        className="search-result-title"
        onClick={() => props.setSelectedData(props.item)}
      >
        {props.item.title}
      </TextComponent>
      <TextComponent className="search-result-description">
        {props.item.description}
      </TextComponent>
    </ContainerComponent>
  );
}
