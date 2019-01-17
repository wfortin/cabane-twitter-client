import axios, { AxiosPromise } from 'axios'

import { Tweet } from './types'

export function getTimeline(): AxiosPromise<Tweet[]> {
  return axios.get('/api/tweets/cabaneio')
}
