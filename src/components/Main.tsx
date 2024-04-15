import { useContext, useEffect } from 'react';
import WorkerContext from '@components/workerContext';

export default function Main() {
  const worker = useContext(WorkerContext);

  useEffect(() => {
  });

  return (
    <div>
      Main
    </div>
  );
}
