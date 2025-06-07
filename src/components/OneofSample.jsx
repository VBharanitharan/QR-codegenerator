// import React from 'react'
import PropTypes from 'prop-types'
export const OneofSample = (props) => {
    const {color} =props
  return (
    <div style={{backgroundColor:color,padding:20px,color:"white"}}>
        <p>This component has a background colour of {color}.</p>
    </div>
  )
}
