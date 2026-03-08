import { api } from '../api/client'

export async function fetchConfig(userId: string) {
  const response = await api.get('/config', {
    params: { userId }
  })

  return response.data
}
