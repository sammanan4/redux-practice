import style from "./Button.module.css";

const Button = ({ title, onClick }) => {
  return (
    <button className={style.btn} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
