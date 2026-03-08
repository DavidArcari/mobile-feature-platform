export type ExperimentExposureEvent = {
  event: 'experiment_exposure'
  experiment: string
  variant: string
}

export type AnalyticsEvent = ExperimentExposureEvent
