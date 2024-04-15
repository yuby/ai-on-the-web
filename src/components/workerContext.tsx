import { createContext } from 'react';

const WorkerContext = createContext<Worker | null>(null);

export default WorkerContext;
