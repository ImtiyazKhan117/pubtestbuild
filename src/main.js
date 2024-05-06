const { invoke } = window.__TAURI__.core;
import { Store } from '@tauri-apps/plugin-store';


let greetInputEl;
let greetMsgEl;

async function greet() {
  // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
  greetMsgEl.textContent = await invoke("greet", { name: greetInputEl.value });
}

window.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#greet-form").addEventListener("submit", async (e) => {
    e.preventDefault();
      // Store will be loaded automatically when used in JavaScript binding.
      // const store = new Store('store.bin');

      // Set a value.
      // await store.set('some-key', { value: 5 });

      // Get a value.
      // const val = await store.get('some-key');
      // console.log(val); // { value: 5 }

      // You can manually save the store after making changes.
      // Otherwise, it will save upon graceful exit as described above.
      // await store.save();
  });
});
