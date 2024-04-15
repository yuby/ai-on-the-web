use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn init_logger() {
  wasm_logger::init(wasm_logger::Config::default());
}

#[wasm_bindgen]
pub fn health_check() {
  log::info!("Health check");
}



