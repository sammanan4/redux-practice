import style from "./Counter.module.css";
import { useSelector } from "react-redux";

const Counter = () => {
  const counter = useSelector((state) => state.counter.counterValue);

  return <main className={style.card}>{counter}</main>;
};

export default Counter;
