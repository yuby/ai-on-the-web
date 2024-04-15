import { useContext, useEffect } from 'react';
import WorkerContext from '@components/workerContext';
import { WorkerStatus } from '@app/app.type';

export default function Llama2() {
  const worker = useContext(WorkerContext);

  useEffect(() => {
    if (worker === null) return;
    worker.postMessage({
      status: WorkerStatus.LoadModel,
    });
  }, [worker]);

  return (
    <div>LLAMA2</div>
  )

}