export type ExperimentExposureEvent = {
  event: 'experiment_exposure'
  experiment: string
  variant: string
}

export type ConversionEvent = {
  event: 'conversion'
  name: string
}

export type AnalyticsEvent = ExperimentExposureEvent | ConversionEvent
