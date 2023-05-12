import type { HttpPostParams, HttpResponse, HttpPostClient } from '@/data/protocols/http'

import axios from 'axios'

export class AxiosHttpClient implements HttpPostClient<any, any> {
  async post(params: HttpPostParams<any>): Promise<HttpResponse<any>> {
    try {
      const httpResult = await axios.post(params.url, params.body)

      return {
        statusCode: httpResult.status,
        body: httpResult.data
      }
    } catch (error) {
      return {
        statusCode: error.response.status,
        body: error.response.data
      }
    }
  }
}
