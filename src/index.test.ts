import * as mod from '.'

describe('sanity', () => {
  it('should exist', () => {
    expect(0).toBe(1)
  })

  it('should print', () => {
    expect(mod.print('🤔')).toBe(undefined)
  })
})
