import React, { useContext, useEffect, useRef } from 'react'
import { LogContext } from '../../stores'
import './Log.css'

export default function Log () {
  const [log] = useContext(LogContext)

  const logEndRef = useRef(null)

  useEffect(() => {
    // scroll to bottom
    logEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [log.entries])

  return (
    <div className='log'>
      {log.entries.reverse().map((entry, index) => (
        <span
          className='entry'
          key={index}
          dangerouslySetInnerHTML={{ __html: entry }}
        />
      ))}
      <div ref={logEndRef} />
    </div>
  )
}
