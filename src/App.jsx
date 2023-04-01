import React from 'react'
import './App.css'
import { ActorList, DButton, Log } from './components'
import { Actor, Weapon } from './engine'
import { CLASSES, WEAPONS } from './data'
import { LogProvider } from './stores'

const { FIGHTER, SORCERER, BARBARIAN, RANGER } = CLASSES

const actors = [
  new Actor({
    name: 'Jannie',
    levels: [FIGHTER, FIGHTER, FIGHTER],
    abilities: {
      strength: 17,
      constitution: 14,
      dexterity: 13,
      intelligence: 9,
      wisdom: 10,
      charisma: 14
    },
    weapons: [new Weapon(WEAPONS.MAUL), new Weapon(WEAPONS.LONGBOW)]
  }),
  new Actor({
    name: 'Sannie',
    levels: [SORCERER, SORCERER],
    abilities: {
      intelligence: 16,
      constitution: 12
    }
  }),
  new Actor({
    name: 'Knoll',
    levels: [BARBARIAN]
  }),
  new Actor({
    name: 'Kobolt',
    levels: [RANGER]
  })
]

const dice = [20, 12, 10, 8, 6, 4, 2]

function App () {
  return (
    <LogProvider>
      <div className='app'>
        <header className='header'>
          <h1 className='light'>D&D Engine</h1>
        </header>
        <div className='body'>
          <ActorList actors={actors} />
          <Log />
        </div>
        <footer className='footer'>
          {dice.map((size) => (
            <DButton key={size} size={size} />
          ))}
        </footer>
      </div>
    </LogProvider>
  )
}

export default App
