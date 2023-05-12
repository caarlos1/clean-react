import { faker } from '@faker-js/faker'
import axios from 'axios'

type MockHttpResponse = {
  data: object
  status: string
}

export const mockHttpResponse = (): MockHttpResponse => ({
  data: faker.science.chemicalElement(),
  status: faker.random.numeric()
})

export const mockAxios = (): jest.Mocked<typeof axios> => {
  const mockedAxios = axios as jest.Mocked<typeof axios>

  mockedAxios.post.mockResolvedValue(mockHttpResponse)

  return mockedAxios
}
