import './InputComponent.css'

type InputComponentProps = {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>
  className?: string;
}

export default function InputComponent(props: InputComponentProps) {
  return (
    <input className={props.className} value={props.value} onChange={props.onChange} />
  );
}
