/**
 * @param {{[key: string]: boolean}} rulesCheck
 * @returns {'vulnerable' | 'weak' | 'strong'}
 */
export const getPassStrength = (rulesCheck) => {
  let strength
  const passedRulesCount = Object.values(rulesCheck).filter(Boolean).length

  if (passedRulesCount < 4) {
    strength = 'vulnerable'
  } else if (passedRulesCount === 4) {
    strength = 'weak'
  } else {
    strength = 'strong'
  }

  return strength
}
