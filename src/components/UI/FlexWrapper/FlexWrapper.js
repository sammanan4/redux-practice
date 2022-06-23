import style from "./FlexWrapper.module.css";

const FlexWrapper = (props) => {
  const className =
    props.flexDirection === "row"
      ? `${style.flexbox} ${style.row}`
      : `${style.flexbox} ${style.column}`;

  return <div className={className}>{props.children}</div>;
};

FlexWrapper.defaultProps = {
  flexDirection: "row",
};

export default FlexWrapper;
