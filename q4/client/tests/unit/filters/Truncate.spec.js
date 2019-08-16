import truncate from '@/filters/truncate'

describe('Truncate Synopsis', () => {
   it('exists', () => {
      expect(truncate).toBeDefined()
   })

   it('truncate with 5', () => {
       expect(truncate('1234567', 5, '...')).toEqual('12345...')
   })
})
