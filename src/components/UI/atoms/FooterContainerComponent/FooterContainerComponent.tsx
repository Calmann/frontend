import "./FooterContainerComponent.css";

type FooterContainerComponentProps = {
  children: React.ReactNode;
};

export default function FooterContainerComponent(
  props: FooterContainerComponentProps,
) {
  return (
    <>
      <div className="footer-box">{props.children}</div>
      <div className="footer-padding"></div>
    </>
  );
}
