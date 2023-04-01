import d from './d'
import { DICE_PROPERTIES, WEAPON_TYPES } from '../data'

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
    damageDieSize = 8,
    weapons = []
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
    this.weapons = weapons
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

  attack (weapon) {
    const roll = d(20)
    const mod = weapon.type === WEAPON_TYPES.MELEE ? this.modifiers.strength : this.modifiers.dexterity
    const result = roll + mod

    const message = `attack ${result} (${roll} + ${mod})`
    return { result, message }
  }

  damage (weapon) {
    const rolls = weapon.damage.map(damage => {
      if (typeof damage === 'number') {
        return damage
      }
      return d(DICE_PROPERTIES[damage].size)
    })
    const damageDie = weapon.damage.reduce((groups, damage) => {
      if (typeof damage === 'number') {
        const flatGroup = groups.find(group => group.type === 'flat')
        if (flatGroup) {
          flatGroup.values.push(damage)
          return groups
        }
        groups.push({ type: 'flat', values: [damage] })
        return groups
      }
      const dieGroup = groups.find(group => group.type === damage)
      if (dieGroup) {
        dieGroup.count++
        return groups
      }
      groups.push({ type: damage, count: 1 })
      return groups
    }, [])
    damageDie.sort((groupA, groupB) => {
      if (groupA.type === 'flat') {
        return 1
      }
      if (groupB.type === 'flat') {
        return -1
      }
      if (groupA.type > groupB.type) {
        return -1
      }
      if (groupA.type < groupB.type) {
        return 1
      }
      return 0
    })
    const description = damageDie.map(group => {
      if (group.type === 'flat') {
        const total = group.values.reduce((sum, value) => sum + value)
        return total
      }
      return `${group.count}${group.type}`
    }).join(' + ')
    const rollTotal = rolls.reduce((total, roll) => total + roll)
    const mod = weapon.type === WEAPON_TYPES.MELEE ? this.modifiers.strength : this.modifiers.dexterity
    const result = rollTotal + mod
    const message = `damage (${description})<br>${result} (${rollTotal} + ${mod})`
    return { result, message }
  }
}

export default Actor
