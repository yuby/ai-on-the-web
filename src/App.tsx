import { useEffect, useState } from 'react';
import WorkerContext from '@components/workerContext';
import Llama2Worker from '@workers/llama2.worker?worker';
import { WorkerStatus } from '@app/app.type';

function App() {
  const [worker, setWorker] = useState<Worker | null>(null);

  useEffect(() => {
    const llama2Worker = new Llama2Worker();

    llama2Worker.onmessage = (event) => {
      if (event.data.status == WorkerStatus.Load) {
        llama2Worker.postMessage({
          status: WorkerStatus.Init,
        });
      } else if (event.data.status == WorkerStatus.Ready) {
        llama2Worker.postMessage({
          status: WorkerStatus.Health,
        });
        setWorker(llama2Worker);
      }
    }

    return () => {
      llama2Worker.terminate();
    };
  }, []);

  return (
    <WorkerContext.Provider value={worker}>
      <div>
        App
      </div>
    </WorkerContext.Provider>
  );
}

export default App;
