/**
 * Capitalizes the first letter of a string.  It does NOT force lowercase on the remaining letters.
 * @param string the string to capitalize
 * @returns string
 */
export const capitalize = (value: string): string => {
  const [first, ...rest] = value
  return first.toUpperCase() + rest.join('')
}
