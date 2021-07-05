import React from 'react'
import Actor from '../Actor/Actor'
import './ActorList.css'

export default function ActorList ({ actors }) {
  return (
    <div className='actor-list'>
      {actors.map(actor => <Actor key={actor.name} actor={actor} />)}
    </div>
  )
}
