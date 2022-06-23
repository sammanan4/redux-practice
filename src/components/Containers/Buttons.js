import { useDispatch } from "react-redux"
import { counterActions } from "../../store/CounterStore"

import Button from "../UI/Button/Button"
import FlexWrapper from "../UI/FlexWrapper/FlexWrapper"



const Buttons = () => {

  const counterDispatch = useDispatch()

  const onIncrement = () => {
    counterDispatch(counterActions.increment())
  }

  const onDecrement = () => {
    counterDispatch(counterActions.decrement())
  }

  const onRaiseToPower = () => {
    counterDispatch(counterActions.raiseToPower(10))
  }

  const onReset = () => {
    counterDispatch(counterActions.reset())
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
