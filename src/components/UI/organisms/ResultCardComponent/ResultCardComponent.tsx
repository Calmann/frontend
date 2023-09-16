import ContainerComponent from "../../atoms/ContainerComponent/ContainerComponent";
import ImageComponent from "../../atoms/ImageComponent/ImageComponent";
import "./ResultCardComponent.css";
import TextComponent from "../../atoms/TextComponent/TextComponent";
import { FakeRespModel } from "../../../../models/FakeModel";

type ResultCardComponentProps = {
  selectedData: FakeRespModel;
  onClickBackground?: () => void;
};

export default function ResultCardComponent(props: ResultCardComponentProps) {
  return (
    <>
      <ContainerComponent
        className="image-background"
        onClick={props.onClickBackground}
      ></ContainerComponent>
      <ContainerComponent className="card-box">
        <ImageComponent className="card-img" src={props.selectedData.image} />
        <TextComponent className="search-result-description">
          <strong>{props.selectedData.title}</strong>
        </TextComponent>
        <TextComponent className="search-result-description">
          {props.selectedData.description}
        </TextComponent>
      </ContainerComponent>
    </>
  );
}
