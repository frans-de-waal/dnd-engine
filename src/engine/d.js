export const MODIFIERS = {
  ADVANTAGE: 1,
  DISADVANTAGE: -1
}

export default function d (size, magnitude = 1, modifier = MODIFIERS.ADVANTAGE) {
  const rand = () => Math.ceil(Math.random() * size)

  const results = new Array(magnitude)
    .fill(null)
    .map(rand)
    .sort((a, b) => (b - a) * modifier)

  return results[0]
}

export function adv (size) {
  return d(size, 2)
}

export function sadv (size) {
  return d(size, 3)
}

export function dis (size) {
  return d(size, 2, MODIFIERS.DISADVANTAGE)
}

export function sdis (size) {
  return d(size, 3, MODIFIERS.DISADVANTAGE)
}
