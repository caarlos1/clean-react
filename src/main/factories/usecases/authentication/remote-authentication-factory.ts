import type { Authentication } from '@/domain/usecases'
import { RemoteAuthentication } from '@/data/usecases/authentication'
import { makeAxiosHttpClient, makeApiUrl } from '@/main/factories/http'

export const makeRemoteAuthentication = (): Authentication => {
  return new RemoteAuthentication(makeApiUrl(), makeAxiosHttpClient())
}
