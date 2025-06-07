// import React from 'react'
import PropTypes from 'prop-types'
export const Arraysample = (props) => {
  const {items}=props;
    return (
    <div><center>
        <h2>Item List</h2></center>
        <ul>
         {items.map((item) =>(
            <li key={item.id}>{item.name}</li>
         ))}
        </ul>
    </div>
  )
}
Arraysample.propTypes={
    items:PropTypes.arrayOf(
        PropTypes.shape({
        id : PropTypes.number,
        name : PropTypes.string.isRequired,
        })
    )

}