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
