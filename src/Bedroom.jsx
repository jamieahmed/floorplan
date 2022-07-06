import React from 'react'

const Bedroom = (props) => {
  return (
    <div className='bedroom' id={`bed-${props.bedNum}`}>
      bedroom{props.bedNum}
    </div>
  )
}

export default Bedroom
