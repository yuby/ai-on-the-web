use wasm_bindgen::prelude::*;
use candle_core::{Device, Tensor};

#[wasm_bindgen]
pub fn llama2() ->  Result<JsValue, JsValue> {
  let device = Device::Cpu;
  let a = Tensor::randn(0f32, 1., &[2, 3], &device)
        .map_err(|e| JsValue::from_str(&format!("Error creating tensor 'a': {}", e)))?;
  let b = Tensor::randn(0f32, 1., &[3, 4], &device)
      .map_err(|e| JsValue::from_str(&format!("Error creating tensor 'b': {}", e)))?;
  let c = a.matmul(&b)
    .map_err(|e| JsValue::from_str(&format!("Error during matrix multiplication: {}", e)))?;

  log::info!("c: {:?}", c.shape());
  Ok(JsValue::from_str("llama2 done!"))
}