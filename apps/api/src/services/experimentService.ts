import crypto from 'crypto'

export function getExperimentVariant(
  userId: string,
  variants: string[],
  distribution: number[]
) {
  const hash = crypto.createHash('sha256').update(userId).digest('hex')

  const hashNumber = parseInt(hash.substring(0, 8), 16)

  const normalized = (hashNumber % 100) / 100

  let cumulative = 0

  for (let i = 0; i < variants.length; i++) {
    cumulative += distribution[i]

    if (normalized < cumulative) {
      return variants[i]
    }
  }

  return variants[0]
}
