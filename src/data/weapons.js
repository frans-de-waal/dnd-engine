import { DICE, DAMAGE_TYPES, WEAPON_PROPERTIES, WEAPON_TYPES, WEAPON_CATEGORIES } from './'

const { D12, D10, D8, D6, D4 } = DICE
const { SLASHING, BLUDGEONING, PIERCING } = DAMAGE_TYPES
const { MARTIAL, SIMPLE } = WEAPON_CATEGORIES
const { MELEE, RANGED } = WEAPON_TYPES
const { LIGHT, FINESSE, THROWN, RANGE, TWO_HANDED, VERSATILE, AMMUNITION, LOADING, HEAVY, REACH, SPECIAL } = WEAPON_PROPERTIES

const WEAPONS = {
  CLUB: {
    name: 'Club',
    category: SIMPLE,
    type: MELEE,
    properties: [LIGHT],
    damage: [D4],
    damageType: BLUDGEONING,
    weight: 2,
    cost: 10
  },
  DAGGER: {
    name: 'Dagger',
    category: SIMPLE,
    type: MELEE,
    properties: [FINESSE, LIGHT, THROWN, RANGE],
    damage: [D4],
    damageType: PIERCING,
    weight: 1,
    cost: 200,
    rangeNormal: 20,
    rangeLong: 60
  },
  GREATCLUB: {
    name: 'Greatclub',
    category: SIMPLE,
    type: MELEE,
    properties: [TWO_HANDED],
    damage: [D8],
    damageType: BLUDGEONING,
    weight: 10,
    cost: 20
  },
  HANDAXE: {
    name: 'Handaxe',
    category: SIMPLE,
    type: MELEE,
    properties: [LIGHT, THROWN, RANGE],
    damage: [D6],
    damageType: SLASHING,
    weight: 2,
    cost: 500,
    rangeNormal: 20,
    rangeLong: 60
  },
  JAVELIN: {
    name: 'Javelin',
    category: SIMPLE,
    type: MELEE,
    properties: [THROWN, RANGE],
    damage: [D6],
    damageType: PIERCING,
    weight: 2,
    cost: 50,
    rangeNormal: 30,
    rangeLong: 120
  },
  LIGHT_HAMMER: {
    name: 'Light hammer',
    category: SIMPLE,
    type: MELEE,
    properties: [LIGHT, THROWN, RANGE],
    damage: [D4],
    damageType: BLUDGEONING,
    weight: 2,
    cost: 200,
    rangeNormal: 20,
    rangeLong: 60
  },
  MACE: {
    name: 'Mace',
    category: SIMPLE,
    type: MELEE,
    properties: [],
    damage: [D6],
    damageType: BLUDGEONING,
    weight: 4,
    cost: 500
  },
  QUARTERSTAFF: {
    name: 'Quarterstaff',
    category: SIMPLE,
    type: MELEE,
    properties: [VERSATILE],
    damage: [D6],
    damageType: BLUDGEONING,
    weight: 4,
    cost: 20,
    versatileDamage: [D8]
  },
  SICKLE: {
    name: 'Sickle',
    category: SIMPLE,
    type: MELEE,
    properties: [LIGHT],
    damage: [D4],
    damageType: SLASHING,
    weight: 2,
    cost: 100
  },
  SPEAR: {
    name: 'Spear',
    category: SIMPLE,
    type: MELEE,
    properties: [THROWN, RANGE, VERSATILE],
    damage: [D6],
    damageType: PIERCING,
    weight: 3,
    cost: 100,
    rangeNormal: 20,
    rangeLong: 60,
    versatileDamage: [D8]
  },
  CROSSBOW_LIGHT: {
    name: 'Crossbow light',
    category: SIMPLE,
    type: RANGED,
    properties: [AMMUNITION, RANGE, LOADING, TWO_HANDED],
    damage: [D8],
    damageType: PIERCING,
    weight: 5,
    cost: 2500,
    rangeNormal: 80,
    rangeLong: 320
  },
  DART: {
    name: 'Dart',
    category: SIMPLE,
    type: RANGED,
    properties: [FINESSE, THROWN, RANGE],
    damage: [D4],
    damageType: PIERCING,
    weight: 0.25,
    cost: 5,
    rangeNormal: 20,
    rangeLong: 60
  },
  SHORTBOW: {
    name: 'Shortbow',
    category: SIMPLE,
    type: RANGED,
    properties: [AMMUNITION, RANGE, TWO_HANDED],
    damage: [D6],
    damageType: PIERCING,
    weight: 2,
    cost: 2500,
    rangeNormal: 80,
    rangeLong: 320
  },
  SLING: {
    name: 'Sling',
    category: SIMPLE,
    type: RANGED,
    properties: [AMMUNITION, RANGE],
    damage: [D4],
    damageType: BLUDGEONING,
    weight: 0,
    cost: 10,
    rangeNormal: 30,
    rangeLong: 120
  },
  BATTLEAXE: {
    name: 'Battleaxe',
    category: MARTIAL,
    type: MELEE,
    properties: [VERSATILE],
    damage: [D8],
    damageType: SLASHING,
    weight: 4,
    cost: 100,
    versatileDamage: [D10]
  },
  FLAIL: {
    name: 'Flail',
    category: MARTIAL,
    type: MELEE,
    properties: [],
    damage: [D8],
    damageType: BLUDGEONING,
    weight: 2,
    cost: 1000
  },
  GLAIVE: {
    name: 'Glaive',
    category: MARTIAL,
    type: MELEE,
    properties: [HEAVY, REACH, TWO_HANDED],
    damage: [D10],
    damageType: SLASHING,
    weight: 6,
    cost: 2000
  },
  GREATAXE: {
    name: 'Greataxe',
    category: MARTIAL,
    type: MELEE,
    properties: [HEAVY, TWO_HANDED],
    damage: [D12],
    damageType: SLASHING,
    weight: 7,
    cost: 3000
  },
  GREATSWORD: {
    name: 'Greatsword',
    category: MARTIAL,
    type: MELEE,
    properties: [HEAVY, TWO_HANDED],
    damage: [D6, D6],
    damageType: SLASHING,
    weight: 6,
    cost: 5000
  },
  HALBERD: {
    name: 'Halberd',
    category: MARTIAL,
    type: MELEE,
    properties: [HEAVY, REACH, TWO_HANDED],
    damage: [D10],
    damageType: SLASHING,
    weight: 6,
    cost: 2000
  },
  LANCE: {
    name: 'Lance',
    category: MARTIAL,
    type: MELEE,
    properties: [REACH, SPECIAL],
    damage: [D12],
    damageType: PIERCING,
    weight: 6,
    cost: 1000
  },
  LONGSWORD: {
    name: 'Longsword',
    category: MARTIAL,
    type: MELEE,
    properties: [VERSATILE],
    damage: [D8],
    damageType: SLASHING,
    weight: 3,
    cost: 1500,
    versatileDamage: [D10]
  },
  MAUL: {
    name: 'Maul',
    category: MARTIAL,
    type: MELEE,
    properties: [HEAVY, TWO_HANDED],
    damage: [D6, D6],
    damageType: BLUDGEONING,
    weight: 10,
    cost: 1000
  },
  MORNINGSTAR: {
    name: 'Morningstar',
    category: MARTIAL,
    type: MELEE,
    properties: [],
    damage: [D8],
    damageType: PIERCING,
    weight: 4,
    cost: 1500
  },
  PIKE: {
    name: 'Pike',
    category: MARTIAL,
    type: MELEE,
    properties: [HEAVY, REACH, TWO_HANDED],
    damage: [D10],
    damageType: PIERCING,
    weight: 18,
    cost: 500
  },
  RAPIER: {
    name: 'Rapier',
    category: MARTIAL,
    type: MELEE,
    properties: [FINESSE],
    damage: [D8],
    damageType: PIERCING,
    weight: 2,
    cost: 2500
  },
  SCIMITAR: {
    name: 'Scimitar',
    category: MARTIAL,
    type: MELEE,
    properties: [FINESSE, LIGHT],
    damage: [D6],
    damageType: SLASHING,
    weight: 3,
    cost: 2500
  },
  SHORTSWORD: {
    name: 'Shortsword',
    category: MARTIAL,
    type: MELEE,
    properties: [FINESSE, LIGHT],
    damage: [D6],
    damageType: PIERCING,
    weight: 2,
    cost: 1000
  },
  TRIDENT: {
    name: 'Trident',
    category: MARTIAL,
    type: MELEE,
    properties: [THROWN, RANGE, VERSATILE],
    damage: [D6],
    damageType: PIERCING,
    weight: 4,
    cost: 500,
    rangeNormal: 20,
    rangeLong: 60,
    versatileDamage: [D8]
  },
  WAR_PICK: {
    name: 'War pick',
    category: MARTIAL,
    type: MELEE,
    properties: [],
    damage: [D8],
    damageType: PIERCING,
    weight: 2,
    cost: 500
  },
  WARHAMMER: {
    name: 'Warhammer',
    category: MARTIAL,
    type: MELEE,
    properties: [VERSATILE],
    damage: [D8],
    damageType: BLUDGEONING,
    weight: 2,
    cost: 1500,
    versatileDamage: [D10]
  },
  WHIP: {
    name: 'Whip',
    category: MARTIAL,
    type: MELEE,
    properties: [FINESSE, RANGE],
    damage: [D4],
    damageType: SLASHING,
    weight: 3,
    cost: 200
  },
  BLOWGUN: {
    name: 'Blowgun',
    category: MARTIAL,
    type: RANGED,
    properties: [AMMUNITION, RANGE, LOADING],
    damage: [1],
    damageType: PIERCING,
    weight: 1,
    cost: 1000,
    rangeNormal: 25,
    rangeLong: 100
  },
  CROSSBOW_HAND: {
    name: 'Crossbow hand',
    category: MARTIAL,
    type: RANGED,
    properties: [AMMUNITION, RANGE, LIGHT, LOADING],
    damage: [D6],
    damageType: PIERCING,
    weight: 3,
    cost: 7500,
    rangeNormal: 30,
    rangeLong: 120
  },
  CROSSBOW_HEAVY: {
    name: 'Crossbow heavy',
    category: MARTIAL,
    type: RANGED,
    properties: [AMMUNITION, RANGE, HEAVY, LOADING, TWO_HANDED],
    damage: [D10],
    damageType: PIERCING,
    weight: 18,
    cost: 5000,
    rangeNormal: 100,
    rangeLong: 400
  },
  LONGBOW: {
    name: 'Longbow',
    category: MARTIAL,
    type: RANGED,
    properties: [AMMUNITION, RANGE, HEAVY, TWO_HANDED],
    damage: [D8],
    damageType: PIERCING,
    weight: 2,
    cost: 5000,
    rangeNormal: 150,
    rangeLong: 600
  },
  NET: {
    name: 'Net',
    category: MARTIAL,
    type: RANGED,
    properties: [SPECIAL, THROWN, RANGE],
    damage: [],
    damageType: null,
    weight: 3,
    cost: 100,
    rangeNormal: 5,
    rangeLong: 15
  }
}

export default WEAPONS
