# Public Test Build
 Tauri Public Testing Build

### Note this is tauri v2 beta project not tauri v1 project

## Project Structure:

✔ Project name · pubtestbuild

✔ Choose which language to use for your frontend · TypeScript / JavaScript - (pnpm, yarn, npm, bun)

✔ Choose your package manager · npm

✔ Choose your UI template · Vanilla

✔ Choose your UI flavor · JavaScript

✔ Would you like to set up the project for mobile as well? · yes

## How to set up project on the new device 

npm install

npm run tauri android init

## How to run 

npm run tauri android dev


## Error(Specific Import Error)

05-06 19:39:30.673 24055 24055 E Tauri/Console: File: http://tauri.localhost/ - Line 0 - Msg: Uncaught TypeError: Failed to resolve module specifier "@tauri-apps/plugin-store". Relative references must start with either "/", "./", or "../".
