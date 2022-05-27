import * as THREE from 'three';


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();


renderer.setSize(innerWidth, innerHeight);
renderer.setPixelRatio(devicePixelRatio);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.PlaneGeometry( 5, 5, 10, 10 );
const material = new THREE.MeshBasicMaterial({ color: 0xFFFF55, side: THREE.DoubleSide });
const plane = new THREE.Mesh( geometry, material);

scene.add(plane);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  // plane.rotation.x += 0.01;
};




animate();