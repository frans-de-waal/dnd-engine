import React, { createContext, useReducer } from 'react'
import { reducer, initialState } from './logReducer'

export const LogContext = createContext({
  state: initialState,
  dispatch: () => null
})

export const LogProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <LogContext.Provider value={[state, (message) => dispatch({ type: 'add', payload: message })]}>
      {children}
    </LogContext.Provider>
  )
}
