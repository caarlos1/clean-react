import type { AccountModel } from '@/domain/model'
import type { Authentication, AuthenticationParams } from '@/domain/usecases'
import { mockAccount } from '@/domain/test'

export class AuthenticationSpy implements Authentication {
  account: AccountModel = mockAccount()
  params: AuthenticationParams

  async auth(params: AuthenticationParams): Promise<AccountModel> {
    this.params = params
    return Promise.resolve(this.account)
  }
}
