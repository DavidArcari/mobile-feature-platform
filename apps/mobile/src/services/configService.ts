import { api } from '../api/client'

export async function getConfig() {
  const userId = 'user123'

  const response = await api.get(`/config?userId=${userId}`)

  return response.data
}
