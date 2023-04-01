import { v4 as uuidv4 } from 'uuid'

class Weapon {
  constructor ({
    name,
    category,
    type,
    properties,
    damage,
    damageType,
    weight,
    cost
  }) {
    this.id = uuidv4()
    this.name = name
    this.category = category
    this.type = type
    this.properties = properties
    this.damage = damage
    this.damageType = damageType
    this.weight = weight
    this.cost = cost
  }
}

export default Weapon
