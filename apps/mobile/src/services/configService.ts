import { api } from '../api/client'

export async function getConfig(userId: string) {
  const response = await api.get(`/config?userId=${userId}`)

  return response.data
}
