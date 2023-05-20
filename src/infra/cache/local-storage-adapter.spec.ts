import { faker } from '@faker-js/faker'
import { LocalStorageAdapter } from './local-storage-adapter'

import 'jest-localstorage-mock'

const makeSut = (): LocalStorageAdapter => new LocalStorageAdapter()

describe('LocalStorageAdapter', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  test('Should call localStorage with correct value', async () => {
    const sut = makeSut()
    const key = faker.database.column()
    const value = faker.lorem.word()

    await sut.set(key, value)
    expect(localStorage.setItem).toHaveBeenCalledWith(key, value)
  })
})
