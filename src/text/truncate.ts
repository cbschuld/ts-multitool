/**
 * Truncate a string at the given length.
 * @param str the string to truncate
 * @param n the length of the truncated string
 * @param useWordBoundary pass true to truncate at the nearest word boundary
 * @param ellipsis the string to use as the ellipsis (eg '...')
 * @returns string truncated to n characters
 */
export const truncate = (str: string, n: number, useWordBoundary = true, ellipsis = '&hellip;') => {
  const tooLong = str.length > n

  // Edge case where someone enters a ridiculously long string.
  str = tooLong ? str.substring(0, n) : str

  const singular = str.search(/\s/) === -1
  if (!singular) {
    str = useWordBoundary && tooLong ? str.substring(0, str.lastIndexOf(' ')) : str
  }

  return tooLong ? str + ellipsis : str
}
