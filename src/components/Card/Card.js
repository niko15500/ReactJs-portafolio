import React from 'react'

const Card = ( {title, otroComponente} ) => {
  return (
    <div>
    <strong>{title}</strong>
    {otroComponente( {name:"Luis", age:"14"} )}
    </div>
  )
}

export default Card