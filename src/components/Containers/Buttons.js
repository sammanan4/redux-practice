import Button from "../UI/Button/Button"
import { useDispatch } from "react-redux"
import FlexWrapper from "../UI/FlexWrapper/FlexWrapper"


const Buttons = () => {

  const counterDispatch = useDispatch()

  const onIncrement = () => {
    counterDispatch({ type: "INCREMENT" })
  }

  const onDecrement = () => {
    counterDispatch({ type: "DECREMENT" })
  }

  const onRaiseToPower = () => {
    counterDispatch({ type: "RAISE_TO_POWER", payload: 10 })
  }

  const onReset = () => {
    counterDispatch({ type: "RESET" })
  }

  return (
    <FlexWrapper flexDirection="row">
        <Button title="Increment" onClick={onIncrement} />
        <Button title="Decrement" onClick={onDecrement} />
        <Button title="Raise To 10" onClick={onRaiseToPower} />
        <Button title="Reset" onClick={onReset} />
    </FlexWrapper>
  )
}

export default Buttons
