import * as THREE from 'three';
import * as DAT from 'dat.gui';
import { OrbitControls } from 'https://unpkg.com/three@0.126.1/examples/jsm/controls/OrbitControls.js';

const gui = new DAT.GUI();
const world = {
  plane: {
    width: 7,
    height: 7,
    widthSegments: 10,
    heightSegments: 10
  }
};

const generatePlane = () => {
  planeMesh.geometry.dispose();
  planeMesh.geometry = new THREE.PlaneGeometry(world.plane.width, world.plane.height, world.plane.widthSegments, world.plane.heightSegments);
  const { array } = planeMesh.geometry.attributes.position;
  for (let i = 0; i < array.length; i += 3) {
    const x = array[i];
    const y = array[i + 1];
    const z = array[i + 2];

    array[i + 2] = z + Math.random();
  }
}

gui.add(world.plane, 'width', 1, 20).onChange(generatePlane);
gui.add(world.plane, 'widthSegments', 1, 40).onChange(generatePlane);
gui.add(world.plane, 'height', 1, 20).onChange(generatePlane);
gui.add(world.plane, 'heightSegments', 1, 40).onChange(generatePlane);



const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(0, 0, 1);

const backlight = new THREE.DirectionalLight(0xffffff, 1);
backlight.position.set(0, 0, -1);


renderer.setSize(innerWidth, innerHeight);
renderer.setPixelRatio(devicePixelRatio);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.PlaneGeometry(7, 7, 10, 10);
const material = new THREE.MeshPhongMaterial({ color: 0xFF8855, side: THREE.DoubleSide, flatShading: THREE.FlatShading });
const planeMesh = new THREE.Mesh(geometry, material);

scene.add(planeMesh);
scene.add(backlight);
scene.add(light);


new OrbitControls(camera, renderer.domElement);
camera.position.z = 5;


const { array } = planeMesh.geometry.attributes.position;
for (let i = 0; i < array.length; i += 3) {
  const x = array[i];
  const y = array[i + 1];
  const z = array[i + 2];

  array[i + 2] = z + Math.random();
}


function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  // plane.rotation.x += 0.01;
};




animate();

const mouse = {
  x: undefined,
  y: undefined
}

addEventListener('mousemove', (event) => {
   mouse.x = (event.clientX / innerWidth) * 2 - 1;
   mouse.y = -(event.clientX / innerHeight) * 2 + 1;

  console.log(mouse);
})