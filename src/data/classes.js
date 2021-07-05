import ABILITIES from './abilities'

const { STRENGTH, DEXTERITY, CONSTITUTION, INTELLIGENCE, WISDOM, CHARISMA } = ABILITIES

const CLASSES = {
  ARTIFICER: {
    name: 'Artificer',
    hitDieSize: 8,
    saves: [CONSTITUTION, INTELLIGENCE]
  },
  BARBARIAN: {
    name: 'Barbarian',
    hitDieSize: 12,
    saves: [STRENGTH, CONSTITUTION]
  },
  BARD: {
    name: 'Bard',
    hitDieSize: 8,
    saves: [DEXTERITY, CHARISMA]
  },
  CLERIC: {
    name: 'Cleric',
    hitDieSize: 8,
    saves: [WISDOM, CHARISMA]
  },
  DRUID: {
    name: 'Druid',
    hitDieSize: 8,
    saves: [INTELLIGENCE, WISDOM]
  },
  FIGHTER: {
    name: 'Fighter',
    hitDieSize: 10,
    saves: [STRENGTH, CONSTITUTION]
  },
  MONK: {
    name: 'Monk',
    hitDieSize: 8,
    saves: [STRENGTH, DEXTERITY]
  },
  PALADIN: {
    name: 'Paladin',
    hitDieSize: 10,
    saves: [WISDOM, CHARISMA]
  },
  RANGER: {
    name: 'Ranger',
    hitDieSize: 10,
    saves: [STRENGTH, DEXTERITY]
  },
  ROGUE: {
    name: 'Rogue',
    hitDieSize: 8,
    saves: [DEXTERITY, INTELLIGENCE]
  },
  SORCERER: {
    name: 'Sorcerer',
    hitDieSize: 6,
    saves: [CONSTITUTION, CHARISMA]
  },
  WARLOCK: {
    name: 'Warlock',
    hitDieSize: 8,
    saves: [WISDOM, CHARISMA]
  },
  WIZARD: {
    name: 'Wizard',
    hitDieSize: 6,
    saves: [INTELLIGENCE, WISDOM]
  }
}

export default CLASSES
