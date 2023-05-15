import type { AccountModel } from '@/domain/model'
import type { AuthenticationParams } from '@/domain/usecases'

import { faker } from '@faker-js/faker'

export const mockAuthentication = (): AuthenticationParams => ({
  email: faker.internet.email(),
  password: faker.internet.password()
})

export const mockAccount = (): AccountModel => ({
  accessToken: faker.string.uuid()
})
