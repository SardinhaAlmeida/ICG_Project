import * as THREE from 'three';
import * as CANNON from 'cannon';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { create_pin } from './src/pin.js';

const scene = new THREE.Scene();

// The GROUND plane

const planeGeometry = new THREE.PlaneGeometry(30, 100);

const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load('./textures/floor.png');
const planeMaterial = new THREE.MeshPhongMaterial({ map: texture });
const plane = new THREE.Mesh(planeGeometry, planeMaterial);

// Rotate and position the plane

plane.rotation.x = -0.5 * Math.PI; // TODO: What happens if you comment out this line of code?
plane.position.x = 0;
plane.position.y = 0;
plane.position.z = -10;

plane.receiveShadow = true;

// Add to the scene

scene.add(plane);

//axes helper
const axesHelper = new THREE.AxesHelper(50);
scene.add(axesHelper);

const world = new CANNON.World();

// Set the pins
const pin1 = create_pin(0, 0, 0, scene, world);
const pin2 = create_pin(1.5, 0, -1.5, scene, world);
const pin3 = create_pin(-1.5, 0, -1.5, scene, world);
const pin4 = create_pin(3, 0, -3, scene, world);
const pin5 = create_pin(0, 0, -3, scene, world);
const pin6 = create_pin(-3, 0, -3, scene, world);
const pin7 = create_pin(4, 0, -4.5, scene, world);
const pin8 = create_pin(1.5, 0, -4.5, scene, world);
const pin9 = create_pin(-1.5, 0, -4.5, scene, world);
const pin10 = create_pin(-4, 0, -4.5, scene, world);

//Set the ball
const loader = new GLTFLoader();

let ball;

// Load the ball model
loader.load(
  './model/ball/scene.gltf', // replace with the path to your ball model
  function (gltf) {
    // When the model is loaded, add it to the scene
    ball = gltf.scene;
    ball.scale.set(10, 10, 10);
    ball.position.set(0, 2, 20);
    scene.add(ball);

    // Create a physics body for the ball
    const ballShape = new CANNON.Sphere(1); // Adjust the radius as needed
    const ballBody = new CANNON.Body({ mass: 1, shape: ballShape });
    ballBody.position.set(0, 2, 20); // Position it where the ball is initially placed
    world.addBody(ballBody);

    // Add the physics body to the ball object's userData
    ball.userData.physicsBody = ballBody;
  },
  function (xhr) {
    // While the model is loading, log the progress
    console.log((xhr.loaded / xhr.total * 100) + '% loaded');
  },
  function (error) {
    // If there is an error, log it
    console.error(error);
  }
);

// The CAMERA

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

// Position the camera
camera.position.x = 0;
camera.position.y = 30;
camera.position.z = 65;

// Point the camera to the center of the scene

camera.lookAt(pin1.position);

scene.add(camera)

// Define variáveis para controlar o estado do mouse e da bola
let isDragging = false;
let dragStartPosition = { x: 0, y: 0 };
let dragDelta = { x: 0, y: 0 };
let isBallMoving = false;

// Adiciona event listeners para eventos do mouse
document.addEventListener('mousedown', onMouseDown, false);
document.addEventListener('mouseup', onMouseUp, false);
document.addEventListener('mousemove', onMouseMove, false);

// Adiciona um ouvinte de eventos de colisão ao mundo físico
world.addEventListener('postStep', function() {
  // Verifique todas as colisões entre a bola e os pinos
  for (let contact of world.contacts) {
      if (contact.bi === ball.userData.physicsBody || contact.bj === ball.userData.physicsBody) {
          // Uma colisão entre a bola e um pino foi detectada
          const otherBody = contact.bi === ball.userData.physicsBody ? contact.bj : contact.bi;
          // Verifique se o corpo colidido é um pino
          if (otherBody.userData.isPin) {
              // Faça o pino cair
              otherBody.applyLocalImpulse(new CANNON.Vec3(0, -10, 0), new CANNON.Vec3());
          }
      }
  }
});

// Função para lidar com o evento de clique do mouse
function onMouseDown(event) {
  isDragging = true;
  dragStartPosition = { x: event.clientX, y: event.clientY };
  dragDelta = { x: 0, y: 0 };

  // Para a bola se estiver se movendo
  isBallMoving = false;
  if (ball && ball.velocity) {
    ball.velocity.set(0, 0, 0);
  }
}

// Função para lidar com o evento de soltar o mouse
function onMouseUp(event) {
  if (isDragging) {
    isDragging = false;
    // Calcula a velocidade com base na distância de arraste
    const velocity = { x: dragDelta.x * 0.01, y: dragDelta.y * 0.01 }; // Ajuste o multiplicador para a velocidade desejada
    // Aplica a velocidade à bola
    if (ball) {
      ball.velocity = new THREE.Vector3(-velocity.x, 0, -velocity.y); // Inverte a direção para o eixo z
      isBallMoving = true;
    }
  }
}

// Função para lidar com o evento de movimento do mouse
function onMouseMove(event) {
  if (isDragging) {
    // Calcula a distância de movimento
    dragDelta = {
      x: event.clientX - dragStartPosition.x,
      y: event.clientY - dragStartPosition.y
    };
  }
}

// Atualiza a posição da bola com base na velocidade
function updateBallPosition() {
  if (isBallMoving && ball && ball.velocity) {
    ball.position.x += ball.velocity.x;
    ball.position.z += ball.velocity.z;

    // Aplica amortecimento para desacelerar a bola
    ball.velocity.multiplyScalar(0.99);

    // Verifica se a bola parou de se mover
    if (ball.velocity.lengthSq() < 0.001) {
      ball.velocity = null;
      isBallMoving = false;
    }
  }
}

//ADDING AMBIENT LIGHT
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

//ADDING SPOTLIGHT
const spotLight = new THREE.SpotLight(0xffffff, 10000);
spotLight.position.set(10, 30, 90);

spotLight.castShadow = true;

scene.add(spotLight);

const spotLight2 = new THREE.SpotLight(0xffffff, 10000);
spotLight2.position.set(-10, 30, 90);

spotLight2.castShadow = true;

scene.add(spotLight2);


// The RENDERER --- To display the scene on the Web page

const renderer = new THREE.WebGLRenderer({ antialias: true });

renderer.setClearColor(new THREE.Color(0xffffff));

renderer.setPixelRatio(window.devicePixelRatio);

renderer.setSize(window.innerWidth, window.innerHeight);

// Add the output of the renderer

document.body.appendChild(renderer.domElement);

renderer.shadowMap.enabled = true;

// ORBIT CONTROLS         
//const controls = new OrbitControls(camera, renderer.domElement);  

// Animate the scene with ball movement
function animate() {
  requestAnimationFrame(animate);

  // Update ball position if it's moving
  updateBallPosition();

  // Render the scene
  renderer.render(scene, camera);
}

animate();
