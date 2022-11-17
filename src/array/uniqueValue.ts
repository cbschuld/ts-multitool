/**
 * returns a string value unique in the array parameter by indexing the value with numerical indexing:
 * @param value value to be made unique (possibly mutated and returned)
 * @param list a list of values (string)
 * @returns a unique list of the values
 */
export const uniqueValue = (value: string, list: string[]): string => {
  let v = value // mutable value
  let i = 0
  while (list.includes(v)) {
    v = `${value}${i++}`
  }
  return v
}
