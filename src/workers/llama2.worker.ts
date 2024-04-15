import type { WorkerProps } from '@app/app.type';
import { WorkerStatus } from '@app/app.type';
import init from '@wasm/llama2/pkg/llama2';

let llama2: any;

init().then((i) => {
  llama2 = i;
  postMessage({
    status: WorkerStatus.Load,
  });
});

onmessage = (event) => {
  const { data } = event;
  const { status } = data as WorkerProps;

  switch (status) {
    case WorkerStatus.Init:
      llama2.init_logger();
      postMessage({
        status: WorkerStatus.Ready,
      });
      break;
    case WorkerStatus.Health:
      llama2.health_check();
      break;
    case WorkerStatus.LoadModel:
      llama2.llama2();
      break;
    default:
      break;
  }
};
