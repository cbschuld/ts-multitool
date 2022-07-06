import { getExtension } from '../src/files/getExtension'

describe('getExtension', () => {
  test('extensions', () => {
    expect(getExtension('some.file.jpg')).toBe('jpg')
    expect(getExtension('some.jpg')).toBe('jpg')
    expect(getExtension('.jpg')).toBe('')
    expect(getExtension('')).toBe('')
    expect(getExtension('example.pdf')).toBe('pdf')
    expect(getExtension('/a/path/example.pdf')).toBe('pdf')
    expect(getExtension('//another/path/example.pdf')).toBe('pdf')
    expect(getExtension('\\path\\okay\\example.pdf')).toBe('pdf')
  })
})
