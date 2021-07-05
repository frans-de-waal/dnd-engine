import d from './d'
import { signedNumber } from '../utils'

function modifier (stat) {
  return Math.floor(stat / 2 - 5)
}

function generateAbilityScore () {
  const randomScore = new Array(4).fill(null).map(() => d(6)).sort((a, b) => b - a)
  randomScore.pop()
  return randomScore.reduce((sum, score) => sum + score, 0)
}

class Actor {
  constructor ({
    name,
    levels,
    abilities: {
      strength = generateAbilityScore(),
      dexterity = generateAbilityScore(),
      constitution = generateAbilityScore(),
      intelligence = generateAbilityScore(),
      wisdom = generateAbilityScore(),
      charisma = generateAbilityScore()
    } = {},
    lvl = 1,
    hitDieSize = 8,
    damageDieSize = 8
  }) {
    this.name = name
    this.levels = levels
    this.abilities = {
      strength,
      dexterity,
      constitution,
      intelligence,
      wisdom,
      charisma
    }
    this.hitDieSize = hitDieSize
    const [firstLevel, ...otherLevels] = this.levels
    const hp1stLvl = firstLevel.hitDieSize + this.modifiers.constitution
    const hpHigherLvls = otherLevels
      .map((level) => d(level.hitDieSize) + this.modifiers.constitution)
      .reduce((total, hp) => total + hp, 0)
    this.maxHp = hp1stLvl + hpHigherLvls
    this.currentHp = this.maxHp
    this.damageDieSize = damageDieSize
  }

  get modifiers () {
    return {
      strength: modifier(this.abilities.strength),
      dexterity: modifier(this.abilities.dexterity),
      constitution: modifier(this.abilities.constitution),
      intelligence: modifier(this.abilities.intelligence),
      wisdom: modifier(this.abilities.wisdom),
      charisma: modifier(this.abilities.charisma)
    }
  }

  get lvl () {
    return this.levels.length
  }

  attack () {
    const roll = d(20)
    const mod = this.modifiers.strength
    const result = roll + mod

    const message = `attack ${result} (${roll} + ${mod})`
    return { result, message }
  }

  damage () {
    const roll = d(this.damageDieSize)
    const mod = this.modifiers.strength
    const result = roll + mod
    const message = `damage ${result} (${roll} + ${mod})`
    return { result, message }
  }

  toString () {
    return `${this.name} (lv ${this.lvl})
HP: ${this.currentHp}/${this.maxHp}
---
Strength: ${this.abilities.strength} [${signedNumber(this.modifiers.strength)}]
Dexterity: ${this.abilities.dexterity} [${signedNumber(this.modifiers.dexterity)}]
Constitution: ${this.abilities.constitution} [${signedNumber(this.modifiers.constitution)}]
Intelligence: ${this.abilities.intelligence} [${signedNumber(this.modifiers.intelligence)}]
Wisdom: ${this.abilities.wisdom} [${signedNumber(this.modifiers.wisdom)}]
Charisma: ${this.abilities.charisma} [${signedNumber(this.modifiers.charisma)}]
---`
  }
}

export default Actor
