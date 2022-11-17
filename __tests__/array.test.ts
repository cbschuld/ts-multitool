import { unique } from '../src/array/unique'
import { uniqueValue } from '../src/array/uniqueValue'

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

describe('uniqueValue', () => {
  test('no mutation', () => {
    expect(uniqueValue('e', ['a', 'b', 'c', 'd'])).toStrictEqual('e')
    expect(uniqueValue('a', ['b', 'c', 'd'])).toStrictEqual('a')
    expect(uniqueValue('a', [])).toStrictEqual('a')
  })
  test('mutation', () => {
    expect(uniqueValue('a', ['a', 'b', 'c', 'd'])).toStrictEqual('a0')
    expect(uniqueValue('a', ['a'])).toStrictEqual('a0')
    expect(uniqueValue('a', ['a', 'a0', 'b', 'c', 'd'])).toStrictEqual('a1')
    expect(uniqueValue('a', ['a', 'a0', 'a1', 'a2', 'a03'])).toStrictEqual('a3')
  })
  test('empty', () => {
    expect(uniqueValue('', [])).toStrictEqual('')
    expect(uniqueValue('a', [])).toStrictEqual('a')
  })
})
