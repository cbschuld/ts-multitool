// Thanks to Jug & Rafael Tavares
// https://stackoverflow.com/questions/53879088/join-an-array-by-commas-and-and
// notes: edited for typescript (cbs,2022-07-05)

/**
 * take a list of strings and create a comma separated string
 * @param list an array of strings
 * @param useOxfordComma when creating the comma-separated string, use the Oxford comma (,) or not
 * @returns string
 */
export const commaSeparatedString = (list: string[], useOxfordComma = false): string => {
  const start = list.slice(0, -1).join(', ')
  const end = list.slice(-1)
  const conjunction = list.length <= 1 ? '' : useOxfordComma && list.length > 2 ? ', and ' : ' and '
  return [start, end].join(conjunction)
}
