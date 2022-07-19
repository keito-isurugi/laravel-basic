import { memo, useEffect, useState } from "react"

export const CountUp = memo(() => {
  console.log('countup')
  const [num, setNum] = useState(0);

  // useEffect(() => {
    const CountUp = () => {
      setNum(num + 1)  
    }
  // }, num)
  return (
    <>
      <p>{num}</p>
      <button onClick={CountUp}>count up</button>
    </>
  )  
})