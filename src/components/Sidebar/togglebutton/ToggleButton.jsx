import React from 'react'
import './ToggleButton.scss'

const ToggleButton = ({open}) => {
  return (
    <button onClick={()=>open((prev)=>!prev)}>
        button
    </button>
  )
}

export default ToggleButton