import { faker } from '@faker-js/faker'
import { LocalStorageAdapter } from './local-storage-adapter'

import 'jest-localstorage-mock'

describe('LocalStorageAdapter', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  test('Should call localStorage with correct value', async () => {
    const sut = new LocalStorageAdapter()
    const key = faker.database.column()
    const value = faker.lorem.word()
    await sut.set(key, value)

    expect(localStorage.setItem).toHaveBeenCalledWith(key, value)
  })
})
