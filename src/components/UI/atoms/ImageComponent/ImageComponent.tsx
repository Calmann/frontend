import './ImageComponent.css'

type ImageComponentProps = {
  src: string;
  className?: string;
}

export default function ImageComponent(props: ImageComponentProps) {
  return (
    <img src={props.src} className={props.className}/>
  );
}
