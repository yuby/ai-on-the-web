export enum WorkerStatus {
  Load = 'load',
  Ready = 'ready',
  Init = 'init',
  Health = 'health',
  Working = 'working',
}

export interface WorkerProps {
  status: WorkerStatus;
  task?: string;
  payload?: any;
}
