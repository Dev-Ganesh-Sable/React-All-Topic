import React, { useEffect, useState } from 'react'
import useCustomHook from '../Custom-Hooks/useCustomHook'

function DoctTitleOne() {

  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   document.title = `Count : ${count}`
  // });

  // use custom hook here

  useCustomHook(count);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>incrementCount</button>
    </div>
  )
}

export default DoctTitleOne