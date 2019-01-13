import axios from 'axios'

export function getTimeline() {
  return axios.get('/api/tweets/cabaneio')
}
