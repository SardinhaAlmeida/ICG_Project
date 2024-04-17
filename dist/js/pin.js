// import * as THREE from 'three';

// export function create_pin(x,y,z, scene) {

//     const textureLoader = new THREE.TextureLoader();

//     // Load the texture
//     const texture = textureLoader.load('public/textures/pin.png');

//     // Create a bowling pin
//     const pinGroup = new THREE.Group(); // Create a group to hold the pin parts

//     // Define the materials
//     const pinMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff });
//     const pinTextureMaterial = new THREE.MeshPhongMaterial({ map: texture });

//     // Define the parts of the pin
//     const bottom = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.1, 0.55, 32), pinMaterial);
//     const middle = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.2, 0.25, 32), pinTextureMaterial);
//     const top = new THREE.Mesh(new THREE.CapsuleGeometry(0.1, 0.1, 5, 10), pinMaterial);

//     // Position the parts
//     middle.position.y = 0.7; // Move middle part up
//     top.position.y = 0.95; // Move top part up
//     bottom.position.y = 0.3; // Move bottom part up

//     // Add the parts to the group
//     pinGroup.add(bottom);
//     pinGroup.add(middle);
//     pinGroup.add(top);

//     pinGroup.castShadow = true; // Enable shadow casting
//     pinGroup.receiveShadow = true; // Enable shadow receiving


//     // Size of the pin group
//     pinGroup.scale.set(7, 7, 7);

//     // Position the pin group
//     pinGroup.position.set(x, y, (z-25));

//     // Add the pin group to the scene
//     scene.add(pinGroup);

//     return pinGroup;

// }

import * as THREE from 'three';
import * as CANNON from 'cannon-es'; // Importe o CANNON.js

export function create_pin(x, y, z, scene, world) { // Adicione 'world' como parâmetro

    const textureLoader = new THREE.TextureLoader();

    // Load the texture
    const texture = textureLoader.load('./public/textures/pin.png');

    // Create a bowling pin
    const pinGroup = new THREE.Group(); // Create a group to hold the pin parts

    // Define the materials
    const pinMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff });
    const pinTextureMaterial = new THREE.MeshPhongMaterial({ map: texture });

    // Define the parts of the pin
    const bottom = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.1, 0.55, 32), pinMaterial);
    const middle = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.2, 0.25, 32), pinTextureMaterial);
    const top = new THREE.Mesh(new THREE.CapsuleGeometry(0.1, 0.1, 5, 10), pinMaterial);

    // Position the parts
    middle.position.y = 0.7; // Move middle part up
    top.position.y = 0.95; // Move top part up
    bottom.position.y = 0.3; // Move bottom part up

    // Add the parts to the group
    pinGroup.add(bottom);
    pinGroup.add(middle);
    pinGroup.add(top);

    pinGroup.castShadow = true; // Enable shadow casting
    pinGroup.receiveShadow = true; // Enable shadow receiving

    // Size of the pin group
    pinGroup.scale.set(7, 7, 7);

    // Position the pin group
    pinGroup.position.set(x, y, (z - 25));

    // Add the pin group to the scene
    scene.add(pinGroup);

    // Create a physics body for the pin
    const pinShape = new CANNON.Box(new CANNON.Vec3(0.1, 0.275, 0.1)); // Adjust the size as needed
    const pinBody = new CANNON.Body({
        mass: 1, // Set the mass to a non-zero value to make the pin dynamic
        shape: pinShape
    });
    pinBody.position.set(x, y, z);
    world.addBody(pinBody);

    // Add userData to pinBody if it doesn't exist
    if (!pinBody.userData) {
        pinBody.userData = {};
    }

    // Adicionar o corpo físico ao grupo do pino
    pinGroup.userData.physicsBody = pinBody;

    // Marcar este corpo como um pino
    pinBody.userData.isPin = true;

    return pinGroup;
}
