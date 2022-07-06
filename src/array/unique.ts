// special thanks to all of the voices
// https://stackoverflow.com/questions/1960473/get-all-unique-values-in-a-javascript-array-remove-duplicates
//
// there is a lot of "noise" about the best way to create a unique array list
// conducted speed tests in Chrome/Firefox: determined the ES6 Set method is fastest
// https://jsbench.me/fkl5a88bo7/1

/**
 * returns a list of unique values from the given array
 * @param list a list of values (number, string)
 * @returns a unique list of the values
 */
export const unique = <T extends string | number>(list: T[]): T[] => {
  return Array.from(new Set<T>(list))
}
