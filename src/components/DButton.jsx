import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { d, MODIFIERS } from '../engine'
import { LogContext } from '../stores'

export const onClick = (e, size) => {
  const magnitude = e.shiftKey || e.ctrlKey ? 2 : 1
  const modifier = e.ctrlKey ? MODIFIERS.DISADVANTAGE : MODIFIERS.ADVANTAGE

  const result = d(size, magnitude, modifier)
  const message = `D${size}${magnitude > 1 ? `(${(modifier === MODIFIERS.ADVANTAGE ? 'adv' : 'dis')})` : ''}: ${result}`

  return { result, message }
}

export default function DButton ({ children, size }) {
  const [state, log] = useContext(LogContext)

  return (
    <button onClick={(e) => {
      const { message } = onClick(e, size)
      log(message)
    }}
    >{children || size}
    </button>
  )
}

DButton.propTypes = {
  children: PropTypes.node,
  size: PropTypes.number.isRequired
}
