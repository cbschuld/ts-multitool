import * as path from 'path'
/**
 * Get the extension of a file.
 * @param filename filename to get extension from
 * @returns string
 */
export const getExtension = (filename: string): string => {
  return (path.extname(filename) || '').replace('.', '')
}
