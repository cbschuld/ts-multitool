import { commaSeparatedString } from '../src/text/commaSeparatedString'
import { capitalize } from '../src/text/capitalize'

describe('commaSeparatedString', () => {
  test('4 items', () => {
    expect(commaSeparatedString(['one', 'two', 'three', 'four'])).toBe('one, two, three and four')
    expect(commaSeparatedString(['one', 'two', 'three', 'four'], true)).toBe('one, two, three, and four')
  })
  test('3 items', () => {
    expect(commaSeparatedString(['one', 'two', 'three'])).toBe('one, two and three')
    expect(commaSeparatedString(['one', 'two', 'three'], true)).toBe('one, two, and three')
  })
  test('2 items', () => {
    expect(commaSeparatedString(['one', 'two'])).toBe('one and two')
  })
  test('1 items', () => {
    expect(commaSeparatedString(['one'])).toBe('one')
  })
  test('0 items', () => {
    expect(commaSeparatedString([])).toBe('')
  })
})

describe('capitalize', () => {
  test('single words', () => {
    expect(capitalize('MONKEY')).toBe('MONKEY')
    expect(capitalize('monkey')).toBe('Monkey')
    expect(capitalize('MoNkEY')).toBe('MoNkEY')
    expect(capitalize('moNkEY')).toBe('MoNkEY')
  })
})
