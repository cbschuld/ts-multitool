import { commaSeparatedString } from '../src/text/commaSeparatedString'
import { capitalize } from '../src/text/capitalize'
import { truncate } from '../src/text/truncate'

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

describe('truncate', () => {
  test('explicit', () => {
    expect(truncate('1234567890', 6, false, '')).toBe('123456')
    expect(truncate('1234567890', 6, false, '...')).toBe('123456...')
    expect(truncate('1234567890', 6, false)).toBe('123456&hellip;')
    expect(truncate('1234567890', 8, false, '')).toBe('12345678')
    expect(truncate('1234567890', 8, false, '...')).toBe('12345678...')
    expect(truncate('1234567890', 8, false)).toBe('12345678&hellip;')
    expect(truncate('1234567890', 8)).toBe('12345678&hellip;')
  })
  test('too long', () => {
    expect(truncate('123456789012345678901234567890', 20, false, '')).toBe('12345678901234567890')
    expect(truncate('123456789012345678901234567890', 200, false, '')).toBe('123456789012345678901234567890')
    expect(truncate('1234567890 1234567890 1234567890', 21, false, '')).toBe('1234567890 1234567890')
    expect(truncate('1234567890 1234567890 1234567890', 200, false, '')).toBe('1234567890 1234567890 1234567890')
  })
  test('word based: explicit', () => {
    expect(truncate('The quick brown fox jumps over the lazy dog', 16, true, '')).toBe('The quick brown')
    expect(truncate('The quick brown fox jumps over the lazy dog', 17, true, '')).toBe('The quick brown')
    expect(truncate('The quick brown fox jumps over the lazy dog', 18, true, '')).toBe('The quick brown')
    expect(truncate('The quick brown fox jumps over the lazy dog', 19, true, '')).toBe('The quick brown')
    expect(truncate('The quick brown fox jumps over the lazy dog', 20, true, '')).toBe('The quick brown fox')
    expect(truncate('The quick brown fox jumps over the lazy dog', 16, true, '...')).toBe('The quick brown...')
    expect(truncate('The quick brown fox jumps over the lazy dog', 17, true, '...')).toBe('The quick brown...')
    expect(truncate('The quick brown fox jumps over the lazy dog', 18, true, '...')).toBe('The quick brown...')
    expect(truncate('The quick brown fox jumps over the lazy dog', 19, true, '...')).toBe('The quick brown...')
    expect(truncate('The quick brown fox jumps over the lazy dog', 20, true, '...')).toBe('The quick brown fox...')
  })
})
