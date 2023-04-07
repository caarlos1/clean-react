import { faker } from '@faker-js/faker'
import axios from 'axios'

export const mockAxios = (): jest.Mocked<typeof axios> => {
  const mockedAxios = axios as jest.Mocked<typeof axios>

  const mockedAxiosResult = {
    data: faker.science.chemicalElement(),
    status: faker.random.numeric()
  }

  mockedAxios.post.mockResolvedValue(mockedAxiosResult)

  return mockedAxios
}
