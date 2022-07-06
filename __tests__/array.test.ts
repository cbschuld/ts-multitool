import { unique } from '../src/array/unique'

describe('unique', () => {
  test('numbers', () => {
    expect(unique([1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1])).toStrictEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9
    ])
    expect(unique([1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9])).toStrictEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9
    ])
    expect(unique([1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9])).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
    expect(unique([1, 1, 1, 1, 1, 1])).toStrictEqual([1])
    expect(unique([])).toStrictEqual([])
  })
  test('strings', () => {
    expect(unique(['alpha', 'bravo', 'charlie', 'delta', 'delta', 'delta'])).toStrictEqual([
      'alpha',
      'bravo',
      'charlie',
      'delta'
    ])
    expect(unique(['alpha', 'alpha', 'alpha', 'alpha'])).toStrictEqual(['alpha'])
  })
  test('empty', () => {
    expect(unique([])).toStrictEqual([])
  })
})
