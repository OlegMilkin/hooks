import React, {useRef} from 'react'
import useHover from "../hooks/useHover";

const Hover = () => {
  const ref = useRef()
  const isHovering = useHover(ref)

  const refNew = useRef()
  const isHoveringNew = useHover(refNew)

  return (
    <div>
      <div ref={ref} style={{width: 300, height: 300, background: isHovering ? 'grey': 'red'}}>
        <button onClick={() => console.log(ref.current)}>Click</button>
      </div>
      <br/>
      <div ref={refNew} style={{width: 300, height: 300, background: isHoveringNew ? 'yellow': 'blue'}}>
        <button onClick={() => console.log(ref.current)}>Click</button>
      </div>
    </div>
  )
}

export default Hover