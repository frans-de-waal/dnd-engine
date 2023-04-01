import React, { useContext } from 'react'
import { signedNumber } from '../../utils'
import './Actor.css'
import { LogContext } from '../../stores'
import { ABILITIES } from '../../data'

export default function Actor ({
  actor
}) {
  const [state, log] = useContext(LogContext)

  const renderAbility = (ability) => (
    <div className='abilityRow' key={ability}>
      <span className='abilityName'>{ability}:</span>
      <span className='abilityScore'>{actor.abilities[ability]}</span>
      <span className='abilityModifier'>{signedNumber(actor.modifiers[ability])}</span>
    </div>
  )

  return (
    <div className='actor' key={actor.name}>
      <h2>{actor.name} (lv {actor.lvl})</h2>
      <span>HP: {actor.currentHp}/{actor.maxHp}</span>
      <div className='abilities'>
        {Object.values(ABILITIES).map(renderAbility)}
      </div>
      {actor.weapons.map(weapon => (
        <div className='buttonRow' key={weapon.id}>
          <h4 className='weaponName'>{weapon.name}</h4>
          <button onClick={() => {
            const { message } = actor.attack(weapon)
            log(`<strong>${actor.name} (${weapon.name})</strong><br>${message}`)
          }}
          >Attack
          </button>
          <button onClick={() => {
            const { message } = actor.damage(weapon)
            log(`<strong>${actor.name} (${weapon.name})</strong><br>${message}`)
          }}
          >Damage
          </button>
        </div>
      ))}
    </div>
  )
}
