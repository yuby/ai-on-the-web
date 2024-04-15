export enum WorkerStatus {
  Load = 'load',
  Ready = 'ready',
  Init = 'init',
  Health = 'health',
  Working = 'working',
  LoadModel = 'load_model',
}

export interface WorkerProps {
  status: WorkerStatus;
  task?: string;
  payload?: any;
}
