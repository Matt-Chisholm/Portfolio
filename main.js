import './style.css'

document.querySelector('#app').innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`
// Option 1: Import the entire three.js core library.
import * as THREE from 'three';

const scene = new THREE.Scene();
console.log(scene);