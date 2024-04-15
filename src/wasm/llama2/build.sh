rm -rf target
cargo build --target wasm32-unknown-unknown --release
wasm-bindgen ./target/wasm32-unknown-unknown/release/llama2.wasm --out-dir pkg --target web