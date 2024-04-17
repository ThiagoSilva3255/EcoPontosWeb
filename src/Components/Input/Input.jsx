import React from 'react'
import '../Input/Input.css'

const Input = ({nomeInput}) => {
  return (
    <input type="text" name={nomeInput} />
  )
}

export default Input