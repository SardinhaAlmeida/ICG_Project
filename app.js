import * as CANNON from "cannon";
import * as THREE from 'three'
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import GUI from 'lil-gui';
import Stats from "three/examples/jsm/libs/stats.module.js";


// import * as dat from 'dat.gui';

// const gui = new dat.GUI();

const sizes = {
    width: document.body.clientWidth,
    height: document.body.clientHeight,
}

class Bowling {
    constructor() {
        this.world = new CANNON.World();
        this.world.allowSleep = true;
        this.timeStep = 1 / 60;
        this.scene = new THREE.Scene();
        this.sceneObjects = [];

        this.pinOffset = 20;
        this.pinRows = 3;

        this.throwIndex = 0;
        

        const canvas = document.querySelector(".webgl")
        // canvas.style.width = '100%';
        // canvas.style.height = '100%';
        // canvas.width = canvas.offsetWidth;
        // canvas.height = canvas.offsetHeight;

        // console.log(canvas);
        this.renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            antialias: true,
        });
        
        this.renderer.setPixelRatio(window.devicePixelRatio ? window.devicePixelRatio : 1);
        this.renderer.setSize(sizes.width, sizes.height);
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap

        this.loadTexture();

        const loaderBall = new THREE.TextureLoader();
        this.ballMaterial = loaderBall.load(
            './textures/bowling_ball.png',
            (texture) => {
                return texture;
            }
        );
        this.ball = this.createSphere(this.ballMaterial);
        this.ball.castShadow = true;
        this.ballThrown = false;
        this.ballStrength = -80;
        this.ballRotation = 0;
        this.waitingThrow;
        this.chargeShot = false;

        this.camera = this.createCamera();
        console.log(this.camera);
        console.log(this.renderer.domElement);

        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.controls.enableDamping = true; // Optional: for smoother camera movement
        this.controls.enabled = true;        
        
        // this.UIHelper = this.createUIHelper();

        // this.createBox(0, -0.4, -10, 1.28, 0.2, 22); // 1.28 official width
        // this.light1 = this.createDirectionalLight(20, 20, -50);
        // this.light2 = this.createDirectionalLight(-20, 20, -50);
        // this.light3 = this.createAmbiantLight();

        // this.initControl(this.ball);

        // this.initCannon();
        // this.initThree();

        this.initScene();
    }

    loadTexture() {
        // instantiate a loader
        const loader = new OBJLoader();

        // load a resource
        return loader.load(
            // resource URL
            './model/model.obj',
            // called when resource is loaded
            (object) => {
                object.scale.multiplyScalar(0.2);
                this.pinTexture = object;

                this.createPins(this.pinRows);
            },
            // called when loading is in progresses
            function (xhr) {
                console.log((xhr.loaded / xhr.total * 100) + '% loaded');
            },
            // called when loading has errors
            function (error) {
                console.log('An error happened', error);
            }
        );
    }

    createUIHelper() {
        const geometry = new THREE.BoxGeometry(.04, .01, 1.5);
        const material = new THREE.MeshBasicMaterial({ color: "#288bbd" });
        const mesh = new THREE.Mesh(geometry, material);

        mesh.position.set(0, -.3, 0);
        mesh.geometry.translate(0, 0, -1);

        this.scene.add(mesh);
        this.sceneObjects.push({
            mesh: mesh,
            body: mesh,
            type: 'ui'
        });

        return {
            mesh: mesh,
            body: mesh,
            type: 'ui'
        };
    }

    createPins() {
        const rowGap = 0.24;
        const colGap = 0.16;

        this.createCylinder(0, -0.1, 0);
        this.createCylinder(-colGap, -0.1, -rowGap);
        this.createCylinder(colGap, -0.1, -rowGap);
        this.createCylinder(0, -0.1, -rowGap * 2);
        this.createCylinder(-colGap * 2, -0.1, -rowGap * 2);
        this.createCylinder(colGap * 2, -0.1, -rowGap * 2);
        this.createCylinder(-colGap * 1, -0.1, -rowGap * 3);
        this.createCylinder(colGap * 1, -0.1, -rowGap * 3);
        this.createCylinder(-colGap * 3, -0.1, -rowGap * 3);
        this.createCylinder(colGap * 3, -0.1, -rowGap * 3);
    }

    initControl(object) {
        let strengthMultiplier;

        const onKeyDown = (event) => {
            // Reset
            if (event.keyCode === 82) { // r / Reset
                location.reload();
            }

            if (this.ballThrown === false) {
                switch (event.keyCode) {
                    // Throw ball
                    case 32: // space / Throw ball
                        if (this.chargeShot === false) {
                            this.chargeShot = true;
                            this.toggleControls(false); // Disable controls while preparing to throw
                            console.log('Controls disabled for throw');
                            this.powerStrength();


                        } else {
                            clearInterval(this.intervalStrength);
                            strengthMultiplier = document.getElementById('barStrength').style.height;
                            strengthMultiplier = -strengthMultiplier.substring(0, strengthMultiplier.length - 1);

                            console.log(this.ballStrength + strengthMultiplier);
                            object.body.applyImpulse(new CANNON.Vec3(0 + this.ballRotation, 0, this.ballStrength + strengthMultiplier), object.body.position);
                            this.ballThrown = true;
                            console.log('Ball thrown');

                            this.waitingThrow = setTimeout(() => {
                                try {
                                    this.checkPins();
                                    this.toggleControls(true); // Re-enable controls after the throw
                                    console.log('Controls re-enabled after throw');
                                } catch (error) {
                                    console.error('Error during throw processing:', error);
                                }
                            }, 2000); // Corrected the string "5000" to number 5000
                        }
                        break;

                    // Move
                    case 37: // left / Move left
                        if (this.chargeShot === false) {
                            if (object.body.position.x > -.5) {
                                object.body.position.set(object.body.position.x -= .08, object.body.position.y, object.body.position.z);
                                this.UIHelper.body.position.set(this.UIHelper.body.position.x -= .08, this.UIHelper.body.position.y, this.UIHelper.body.position.z);
                            }
                        }
                        break;
                    case 39: // right / Move right
                        if (this.chargeShot === false) {
                            if (object.body.position.x < .5) {
                                object.body.position.set(object.body.position.x += .08, object.body.position.y, object.body.position.z);
                                this.UIHelper.body.position.set(this.UIHelper.body.position.x += .08, this.UIHelper.body.position.y, this.UIHelper.body.position.z);
                            }
                        }
                        break;

                    // Rotation
                    case 38: // up / Increase rotation
                        if (this.chargeShot === false) {
                            if (this.ballRotation < 6) {
                                object.body.quaternion.setFromAxisAngle(new CANNON.Vec3(0, .25, 0), this.ballRotation += .75);
                                this.UIHelper.body.rotation.y -= .0075;
                            }
                        }
                        break;
                    case 40: // down / Decrease rotation
                        if (this.chargeShot === false) {
                            if (this.ballRotation > -6) {
                                object.body.quaternion.setFromAxisAngle(new CANNON.Vec3(0, -.25, 0), this.ballRotation -= .75);
                                this.UIHelper.body.rotation.y += .0075;
                            }
                        }
                        break;
                }
            };
        };
        document.addEventListener('keydown', onKeyDown, false);
    }

    toggleControls(enable) {
        this.controls.enabled = enable;
    }

    powerStrength() {
        var countingUp = 1;
        var i = 0;

        function count() {
            i = i + (1 * countingUp);

            if (i == 100 || i == 0) {
                countingUp *= -1;
            }

            document.getElementById('barStrength').style.height = i + '%';
        }

        this.intervalStrength = window.setInterval(count, 10);
    }

    createBox(x, y, z, width, height, depth) {
        const shape = new CANNON.Box(new CANNON.Vec3(width / 2, height / 2, depth / 2));
        const body = new CANNON.Body({
            mass: 0,
        });
        body.addShape(shape);
        body.position.set(x, y, z);
        this.world.addBody(body);

        const geometry = new THREE.BoxGeometry(width, height, depth);
        // const material = new THREE.MeshPhongMaterial({ color: 0xffffff });

        const loader = new THREE.TextureLoader();

        // load a resource
        loader.load(
            './textures/floor.png',
            (texture) => {
                const material = new THREE.MeshBasicMaterial({
                    map: texture,
                });

                texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
                texture.repeat.set(3, 0.5);


                const mesh = new THREE.Mesh(geometry, material);
                mesh.receiveShadow = true;

                this.scene.add(mesh);
                this.sceneObjects.push({
                    mesh: mesh,
                    body: body,
                    type: 'ground'
                });
            },

            // onProgress callback currently not supported
            undefined,

            // onError callback
            function (err) {
                console.error('An error happened.');
            }
        );
    }

    createCylinder(x, y, z) {
        const topDiameter = 0.020;
        const bottomDiameter = 0.055;
        const shape = new CANNON.Cylinder(topDiameter, bottomDiameter, 0.38, 10);
        const body = new CANNON.Body({
            mass: 1.5,
            sleepSpeedLimit: 0.2,
            sleepTimeLimit: 0.1,
        });
        body.addShape(shape);
        body.position.set(x, y, z - this.pinOffset);

        body.sleep();

        // Match orientation of the cylinder with three.js
        const quat = new CANNON.Quaternion();
        quat.setFromAxisAngle(new CANNON.Vec3(1, 0, 0), -Math.PI / 2);
        const translation = new CANNON.Vec3(0, 0, 0);
        shape.transformAllPoints(translation, quat);

        this.world.addBody(body);

        const geometry = new THREE.CylinderGeometry(topDiameter, bottomDiameter, 0.38, 10);
        
        const material = new THREE.MeshPhongMaterial({ color: 0xffffff, wireframe: true });

        const mesh = new THREE.Mesh(geometry, material);
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        const texture = this.pinTexture.clone();

        this.scene.add(texture);

        this.sceneObjects.push({
            mesh: texture,
            body: body,
            type: 'pin'
        });

        return {
            mesh: texture,
            body: body,
            type: 'pin'
        };
    }
    
    createSphere(texture) {
        const shape = new CANNON.Sphere(0.11);
        const body = new CANNON.Body({
            mass: 12,
            allowSleep: false,
        });
        body.addShape(shape);
        this.world.addBody(body);

        const geometry = new THREE.SphereGeometry(0.11, 20, 20);

        const material = new THREE.MeshBasicMaterial({
            map: texture,
        });

        const mesh = new THREE.Mesh(geometry, material);
        mesh.castShadow = true;
        mesh.receiveShadow = true;

        this.scene.add(mesh);
        this.sceneObjects.push({
            mesh: mesh,
            body: body,
            type: 'ball'
        });

        return {
            mesh: mesh,
            body: body,
            type: 'ball'
        };
    }

    createDirectionalLight(x, y, z) {
        const light = new THREE.DirectionalLight(0xffffff, 1);
        light.position.set(x, y, z);
        light.castShadow = true;
        this.scene.add(light);
        light.target = this.ball.mesh;
        return light;
    }

    createAmbiantLight() {
        const light = new THREE.AmbientLight(0xaeaeae, 0.5);
        this.scene.add(light);
        return light;
    }

    createDirectionalLightAvatar(model) {
        const light = new THREE.DirectionalLight(0xffffff, 3);
        light.position.set(5, 5, 5);  // Position the light to illuminate the avatar
        light.castShadow = true;
        this.scene.add(light);
        light.target = model;  // Ensure the light points at the avatar
        return light;
    }

    createCamera() {
        const camera = new THREE.PerspectiveCamera(30, sizes.width / sizes.height, 1, 100);
        camera.position.z = 5;
        camera.position.x = 0.2;
        camera.position.y = 0.5;
        camera.lookAt(this.ball.mesh.position);
        this.scene.add(camera);
        return camera;
    }
    
    updatePhysics() {
        // Step the physics world
        this.world.step(this.timeStep);

        this.camera.position.z = (this.ball.mesh.position.z + 4) * 0.7;

        // Remove pins that are below the ground
        this.sceneObjects.forEach((el) => {
            if (el.type === 'pin') {
                if (el.body.position.y < -0.1) {
                    setTimeout(() => {
                        // remove element from scene objects
                        this.sceneObjects = this.sceneObjects.filter((e) => e !== el);
                        this.scene.remove(el.mesh);
                        this.world.remove(el.body);
                    }, 1000);
                }
            }
        });

        if (this.ball.body.position.y < -2) {
            clearTimeout(this.waitingThrow);

            this.checkPins();
            setTimeout(() => {
                // Throw ball again
                this.ballThrown = false;
                const score = this.countPins();
                if (score === 10) {
                    this.throwIndex = 3;
                } else {
                    this.throwIndex++;
                }

                if (this.throwIndex === 3) {
                    this.throwIndex = 0;
                    setTimeout(() => {
                        this.deleteAllPins();
                        this.createPins();
                        console.log(score);
                    }, 8000);
                }
            }, 500);
        }

        // Copy coordinates from Cannon.js to Three.js
        this.sceneObjects.forEach(sceneObject => {
            sceneObject.mesh.position.copy(sceneObject.body.position);
            sceneObject.mesh.quaternion.copy(sceneObject.body.quaternion);
        });
    }

    pinsOnScene() {
        let count = 0;
        this.sceneObjects.forEach((el) => {
            if (el.type === 'pin') {
                console.log(el.body.position.y, el.body.quaternion.x, el.body.quaternion.z);
                if (el.body.position.y >= -0.1 && Math.abs(el.body.quaternion.x) < 0.1 && Math.abs(el.body.quaternion.z) < 0.1) {
                    count++;
                }
            }
        });
        return count;  
    }
    

    countPins() {
        let count = 0;
        this.sceneObjects.forEach((el) => {
            if (el.type === 'pin') {
                count++;
            }
        });
        return 10 - count;
    }

    deleteAllPins() {
        this.sceneObjects.forEach((el) => {
            if (el.type === 'pin') {
                // remove pin from scene objects
                this.sceneObjects = this.sceneObjects.filter((e) => e !== el);
                this.scene.remove(el.mesh);
                this.world.remove(el.body);
            }
        });
    }

    checkPins() {

        // Reset ball position
        this.ball.body.position.set(0, 0, 0);
        this.ball.body.velocity.set(0, 0, 0);
        this.ball.body.angularVelocity.set(0, 0, 0);

        // Reset value strength and rotation
        this.ballRotation = 0;
        this.chargeShot = false;
        this.UIHelper.body.rotation.y = 0;
        this.UIHelper.body.position.x = 0;
        document.getElementById('barStrength').style.height = '0%';

        const remainingPins = this.pinsOnScene();
        console.log('Remaining pins:', remainingPins);
        if (remainingPins === 0) {
            // Change expression to 'Surprise'
            this.changeExpression('Surprised', 1);
            
            // After setting the expression, trigger the jump
            this.fadeToAction('Jump', 0.2);
            this.mixer.addEventListener('finished', () => {
                this.mixer.removeEventListener('finished', () => {});
                // Once the jump is finished, start dancing
                this.fadeToAction('ThumbsUp', 0.2);
                this.mixer.addEventListener('finished', () => {
                    this.mixer.removeEventListener('finished', () => {});
                    // Once the jump is finished, start dancing
                    this.fadeToAction('Dance', 0.2);
                });
            });
        } else {
            // Change expression to 'Surprise'
            this.changeExpression('Sad', 1);
            
            // After setting the expression, trigger the jump
            this.fadeToAction('No', 0.2);
            this.mixer.addEventListener('finished', () => {
                this.mixer.removeEventListener('finished', () => {});
                // Once the jump is finished, start dancing
                this.fadeToAction('Death', 0.2);
            });
        }
    }

    avatar(){
        const container = document.createElement( 'div' );
        document.body.appendChild( container );

        const loader = new GLTFLoader();
        loader.load(
            './model/RobotExpressive.glb',
            (gltf) => {
                this.model = gltf.scene;
                this.animations = gltf.animations;
                console.log(this.model);
                this.model.scale.set(0.08, 0.08, 0.08);  // Adjust these values to scale the model down
                this.model.position.set(-0.68, 0.05, 1); // Set to desired coordinates
                this.model.rotation.y = Math.PI / 4;
                this.scene.add(this.model);
                console.log('Model loaded successfully');

                // Define the original yellow color you want to change (use an approximation if exact isn't known)
                const originalYellow = new THREE.Color(0xC9923A); // Approximate yellow
                const colorThreshold = 0.1; // Adjust threshold to be more or less strict

                this.model.traverse((child) => {
                    if (child.isMesh && child.material && child.material.color) {
                        let hsl = {}; // Object to store hue, saturation, and lightness
                        child.material.color.getHSL(hsl); // Safely get the HSL values
                
                        let targetHSL = {};
                        originalYellow.getHSL(targetHSL); // Get HSL of the target yellow color
                
                        // Check if the color is within the threshold of yellow
                        if (hsl.h >= targetHSL.h - colorThreshold && hsl.h <= targetHSL.h + colorThreshold && hsl.s > 0.5) {
                            // Change to a new color, e.g., red
                            child.material.color.set(0xff0000);
                        }
                    }
                });
                // Add directional light to the avatar
                this.createDirectionalLightAvatar(this.model);

                // this.createGUI( this.model, gltf.animations );

            },
            (xhr) => {
                console.log((xhr.loaded / xhr.total * 100) + '% loaded');
            },
            (error) => {
                console.error('Failed to load model:', error.message);
            }
        );
        
        
        container.appendChild( this.renderer.domElement );

    }

    avatar_color(model, color) {
        const originalYellow = new THREE.Color(0xC9923A); // Approximate yellow color
        const colorThreshold = 0.1; // Threshold for color adjustment

        model.traverse((child) => {
            if (child.isMesh && child.material && child.material.color) {
                let hsl = {};
                child.material.color.getHSL(hsl);

                let targetHSL = {};
                originalYellow.getHSL(targetHSL);

                if (hsl.h >= targetHSL.h - colorThreshold && hsl.h <= targetHSL.h + colorThreshold && hsl.s > 0.5) {
                    child.material.color.set(color); // Change color to red
                }
            }
        });
    }

    createGUI(model, animations) {
        const states = ['Idle', 'Walking', 'Running', 'Dance', 'Death', 'Sitting', 'Standing'];
        const emotes = ['Jump', 'Yes', 'No', 'Wave', 'Punch', 'ThumbsUp'];
    
        this.gui = new GUI();
        this.mixer = new THREE.AnimationMixer(model);
        this.actions = {};
        this.api = { state: 'Idle' }; // Default state
        console.log('Available animations:', animations);
        animations.forEach(animation => {
            console.log('Processing animation:', animation.name);
            const action = this.mixer.clipAction(animation);
            console.log('Action created:', action);
            this.actions[animation.name] = action;

            if (emotes.indexOf(animation.name) >=0 || states.indexOf(animation.name) >= 4) {
                console.log(animation.name);

                action.clampWhenFinished = true;
                action.loop = THREE.LoopOnce;
            }
        });
    
        // States
        const statesFolder = this.gui.addFolder('States');
        const clipCtrl = statesFolder.add(this.api, 'state').options(states);
        clipCtrl.onChange( function () {
            console.log('State changed to:', this.api.state);
            this.fadeToAction( this.api.state, 0.2 );

        }.bind(this) );
        statesFolder.open();
    
        // Emotes
        const emoteFolder = this.gui.addFolder('Emotes');
        emotes.forEach(emote => {
            this.api[emote] = () => {
                console.log('Emote triggered:', emote);
                this.fadeToAction(emote, 0.2);
                this.mixer.addEventListener('finished', () => {
                    this.mixer.removeEventListener('finished', () => {});
                    console.log('Animation finished');
                    this.fadeToAction(this.api.state, 0.2);
                });
            };
            emoteFolder.add(this.api, emote);
        });
        emoteFolder.open();
    
        // Expressions
        const face = model.getObjectByName('Head_4');
        if (face && face.morphTargetDictionary) {
            const expressions = Object.keys(face.morphTargetDictionary);
            const expressionFolder = this.gui.addFolder('Expressions');
            expressions.forEach((expr, index) => {
                expressionFolder.add(face.morphTargetInfluences, index, 0, 1, 0.01).name(expr);
            });
            expressionFolder.open();
        }
    
        // Activate initial action
        this.activeAction = this.actions['Idle'];
        this.activeAction.play();
    }
    
    fadeToAction(name, duration) {
        const previousAction = this.activeAction;
        const activeAction = this.actions[name];
    
        if (previousAction !== activeAction) {
            previousAction.fadeOut(duration);
            activeAction.reset().setEffectiveTimeScale(1).setEffectiveWeight(1).fadeIn(duration).play();
            this.activeAction = activeAction;
        }
    }   

    changeExpression(expressionName, intensity) {
        const face = this.model.getObjectByName('Head_4');  // Ensure this matches your model's head mesh name
        if (face && face.morphTargetDictionary) {
            const index = face.morphTargetDictionary[expressionName];
            if (index !== undefined) {
                face.morphTargetInfluences[index] = intensity;
                console.log(`Expression ${expressionName} set to ${intensity}`);
            } else {
                console.log(`Expression ${expressionName} not found.`);
            }
        }
    }

    initCannon() {
        this.world.gravity.set(0, -9, 0);
        this.world.broadphase = new CANNON.NaiveBroadphase();
        this.world.solver.iterations = 10;
    }

    initThree() {
        this.renderer.setSize(sizes.width, sizes.height);
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap
    }

    initScene() {
        this.clock = new THREE.Clock();

        // // Assuming your renderer has been initialized
        // const pmremGenerator = new THREE.PMREMGenerator(this.renderer);
        // pmremGenerator.compileEquirectangularShader();

        // const loader = new THREE.TextureLoader();
        // loader.load('./textures/space.jpg', (texture) => {
        //     const envMap = pmremGenerator.fromEquirectangular(texture).texture;
        //     this.scene.environment = envMap;  // Set as the environment map for reflections
        //     pmremGenerator.dispose();  // Clean up resources used by the PMREMGenerator

        //     // Optionally set the same texture as the background
        //     this.scene.background = texture; 
        // });

        this.loadTexture();
        this.UIHelper = this.createUIHelper();
        this.createBox(0, -0.4, -10, 1.28, 0.2, 22);
        this.light1 = this.createDirectionalLight(20, 20, -50);
        this.light2 = this.createDirectionalLight(-20, 20, -50);
        this.light3 = this.createAmbiantLight();
        this.avatar = this.avatar();
        this.initControl(this.ball);
        this.initCannon();
        this.initThree();
    }

}

// document.getElementById('startButton').addEventListener('click', function() {
//     // Hide the start page
//     document.getElementById('startPage').style.display = 'none';
//     // Show the main game page
//     document.getElementById('gamePage').style.display = 'block';

//     // // Initialize the game elements here if necessary
//     // const selectedColor = document.getElementById('colorPicker').value;
//     // initializeGame(selectedColor); // Function to initialize game
// });


const bowling = new Bowling();

document.getElementById('startButton').addEventListener('click', function() {

    document.getElementById('startPage').style.display = 'none';
    document.getElementById('gamePage').style.display = 'block';
    document.getElementById('canvas').style.display = 'block';
    document.getElementById('UI').style.display = 'block';
    
    const selectedColor = document.getElementById('colorPicker').value;
    initializeGame(selectedColor); // Function to initialize game with selected avatar color
});

function initializeGame(selectedColor) {

    if (bowling.model && bowling.animations && !bowling.gui) { // Ensure model and animations are loaded
        bowling.createGUI(bowling.model, bowling.animations);
        bowling.avatar_color(bowling.model, selectedColor);
    } else {
        console.error("Model or animations not ready.");
    }
    // Assuming you have a function to set the avatar's color
    bowling.avatar_color(bowling.model, selectedColor);
    
    // Start the animation or any other game initialization logic here
    animate();
}

// const controls = new OrbitControls(bowling.camera, bowling.renderer.domElement);
// controls.enabled = true;
// Attach event listener once outside the animate loop

function animate() {
    requestAnimationFrame(animate);
    const delta = bowling.clock.getDelta(); // Assuming you have a clock for delta times
    if (bowling.mixer) {
        bowling.mixer.update(delta);
    }
    if (bowling.controls.enabled) {
        bowling.controls.update();
    }    
    bowling.updatePhysics();
    bowling.renderer.render(bowling.scene, bowling.camera);
}
console.log('Animation loop started');

