import crypto from 'crypto'

export function isFeatureEnabled(
  userId: string,
  rolloutPercentage: number
): boolean {
  const hash = crypto.createHash('sha256').update(userId).digest('hex')

  const hashNumber = parseInt(hash.substring(0, 8), 16)

  const normalized = hashNumber % 100

  return normalized < rolloutPercentage * 100
}
