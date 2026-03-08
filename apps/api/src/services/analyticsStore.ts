type Exposure = {
  experiment: string
  variant: string
}

type Conversion = {
  name: string
}

export const exposures: Exposure[] = []
export const conversions: Conversion[] = []

export function addExposure(experiment: string, variant: string) {
  exposures.push({ experiment, variant })
}

export function addConversion(name: string) {
  conversions.push({ name })
}
