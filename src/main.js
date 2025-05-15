import * as THREE from 'three';

const canvas = document.getElementById('canvas');

// Create scene
const scene = new THREE.Scene();
scene.background = new THREE.Color('#F0F0F1');

// Add Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
camera.position.z = 5;

//Add Object
const geometry = new THREE.DodecahedronGeometry();
const material = new THREE.MeshBasicMaterial({color:'#468585'});
const dodecahedron = new THREE.Mesh(geometry, material);

const boxGeometry = new THREE.BoxGeometry(2,0.1,2);
const boxMaterial = new THREE.MeshBasicMaterial({color:'#B4B4B3'});
const box = new THREE.Mesh(boxGeometry, boxMaterial);
box.position.y = -1.5;

scene.add(dodecahedron);
scene.add(box);

// Add Light
const light = new THREE.SpotLight(0x006779, 100);
light.position.set(1,1,1);
scene.add(light);

//Add Renderer
const renderer = new THREE.WebGLRenderer({canvas});

renderer.setSize(window.innerWidth, window.innerHeight);

renderer.render(scene,camera);