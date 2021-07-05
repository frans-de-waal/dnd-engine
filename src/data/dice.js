const DICE = {
  D20: 'd20',
  D12: 'd12',
  D10: 'd10',
  D8: 'd8',
  D6: 'd6',
  D4: 'd4'
}

export default DICE

export const PROPERTIES = {}

PROPERTIES[DICE.D20] = {
  name: 'D20',
  size: 20
}
PROPERTIES[DICE.D12] = {
  name: 'D12',
  size: 12
}
PROPERTIES[DICE.D10] = {
  name: 'D10',
  size: 10
}
PROPERTIES[DICE.D8] = {
  name: 'D8',
  size: 8
}
PROPERTIES[DICE.D6] = {
  name: 'D6',
  size: 6
}
PROPERTIES[DICE.D4] = {
  name: 'D4',
  size: 4
}
