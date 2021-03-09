import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { EventTarget } from 'event-target-shim';
import anime from 'animejs';

import { SharedShader } from './sharedMaterialShader.js'

export class LoadedContent extends EventTarget {

  constructor(worldScene) {
    super();
    this.worldScene = worldScene;
    this.gltfScene;
    this.enhancedMaterial = false;
    this.shaderMaterial;
    this.TRANSITION = 1;
    this.animations = [];
    this.interactables = [];
    this.LOADPATH = window.location.origin + '/three/characters-export-modified-fourth-sampled.glb';

    this.models = [
      { name: 'Ant',
        mesh: null,
        position: { x: -8.5, y: 0, z: 4.2 },
        rotation: { x: 0, y: 0.84 * Math.PI, z: 0 },
        startAction: 'idle',
        actionSequence: ['yes', 'pointing', 'yes'],
        actionSequenceProgress: 0,
        actions: {},
        mixer: null,
        timeout: null
      },
      { name: 'ColF',
        mesh: null,
        position: { x: 3.5, y: 0, z: 9 },
        rotation: { x: 0, y: 1.16 * Math.PI, z: 0 },
        startAction: 'idle',
        actionSequence: ['pointing', 'yes', 'yes'],
        actionSequenceProgress: 0,
        actions: {},
        mixer: null,
        timeout: null
      },
      { name: 'ColM',
        mesh: null,
        position: { x: 10, y: -0.33, z: 3.2 },
        rotation: { x: 0, y: 1.38 * Math.PI, z: 0 },
        startAction: 'idle',
        actionSequence: ['yes', 'pointing', 'pointing'],
        actionSequenceProgress: 0,
        actions: {},
        mixer: null,
        timeout: null
      },
      { name: 'Whiteboard',
        mesh: null,
        position: { x: 0, y: - 0.05, z: - 0.8 },
        rotation: null,
        actionSequence: [null],
        mixer: null
      },
      { name: 'Leg',
        mesh: null,
        position: { x: 0, y: - 0.05, z: - 0.8 },
        rotation: null,
        actionSequence: [null],
        mixer: null
      },
    ];
  }

  init() {
    this.loadModels( () => {
      this.startAnimationSequence();
      this.dispatchEvent(new Event('loaded'));
    } );
  }

  loadModels(callback) {

    this.loadGLTF( () => {

      this.gltfScene.traverse( ( child ) => {

        if ( child.isMesh ) {
          this.enhanceMaterial(child.material);

          if (child.name === 'Whiteboard') {
            this.equipModel( this.getModelByName('Whiteboard'), child );
          }

          if (child.name === 'Leg') {
            this.equipModel( this.getModelByName('Leg'), child );
          }

          ///

          if (child.name === 'AntMesh') {
            this.equipModel( this.getModelByName('Ant'), child );
          }

          if (child.name === 'ColFMesh') {
            this.equipModel( this.getModelByName('ColF'), child );
          }

          if (child.name === 'ColMMesh') {
            this.equipModel( this.getModelByName('ColM'), child );
          }

        }

      });

      for ( var i = 0; i < this.models.length; i++ ) {
        this.positionModel( this.models[i] );
        this.rotateModel( this.models[i] );
      }

      callback();

    } );

  }

  equipModel( model, child ) {
    model.mesh = child;
    this.interactables.push(model.mesh);

    if (model.actionSequence[0] !== null) {
      model.mesh.animations = this.animations; // Set to stored extracted animations
      let mixer = this.startAnimation( model );
      model.mixer = mixer;
    }
  }

  startAnimation( model ) {

    let mixer = new THREE.AnimationMixer( model.mesh );

    model.mesh.animations.forEach((animationClip) => {
      let action = mixer.clipAction( animationClip );
      model.actions[ animationClip.name ] = action;
      this.setWeight( model.actions[ animationClip.name ] , 0 );
    });

    // Set inital animation weight to 1
    this.setWeight( model.actions[ model.startAction ], 1 );

    // Start playing all actions
    for (var key in model.actions) {
      if (!model.actions.hasOwnProperty(key)) continue;
      model.actions[key].play();
    }

    model.actions[ model.startAction ].time = anime.random(0, 5);
    return mixer;
  }

  tanh(x) {
    var a = Math.exp(+x), b = Math.exp(-x);
    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (a + b);
  }

  scroll(progress) {
    if (progress > 0) {
      const MODIFIER = 2.4;
      this.shaderMaterial.uniforms.master.value = 1 - (progress * 1.5);
      this.models.forEach((model, i) => {
        if (model.mixer !== null) {
          clearTimeout(model.timeout);
          let currentActionName = model.actionSequence[model.actionSequenceProgress];
          this.setWeight( model.actions['floating'], this.tanh(MODIFIER*progress) );
          this.setWeight( model.actions[currentActionName], 1 - this.tanh(MODIFIER*progress) );
          this.setWeight( model.actions['idle'], 1 - this.tanh(MODIFIER*progress) );
        }
      });

    } else {
      this.models.forEach((model, i) => {
        if (model.mixer !== null) {
          let postScrollTransition = 0.5;
          model.actions['floating'].fadeOut(postScrollTransition);
          clearTimeout(model.timeout);
          let currentActionName = model.actionSequence[model.actionSequenceProgress];
          this.executeCrossFade(model.actions[currentActionName], model.actions['idle'], postScrollTransition);
          this.catalystAction(model, i);
        }
      });

    }

  }

  startAnimationSequence() {

    this.models.forEach((model, i) => {
      if (model.mixer !== null) {

        this.catalystAction(model, i)

        model.mixer.addEventListener( 'loop', ( e ) => { this.animationLoop(e, model, i); } );

      }
    });
  }

  catalystAction(model, i) {

    let firstAction = model.actions[ model.actionSequence[model.actionSequenceProgress] ];

    // setTimout till first action in sequence
    model.timeout = setTimeout( () => {
      this.executeCrossFade( model.actions['idle'], firstAction, this.TRANSITION );
    }, (this.models.length - i) * 2000 * Math.random() );

  }

  animationLoop(e, model, i) {
      let clipName = e.action.getClip().name;
      let currentActionName = model.actionSequence[model.actionSequenceProgress];
      // IF the action that just looped is the current in the sequence and is weighted on
      if (clipName === currentActionName && e.action.weight === 1) {
        // THEN a step in the sequence just finished

        this.incrementSequence(model);

        let nextAction = model.actions[ model.actionSequence[model.actionSequenceProgress] ];

        this.advanceInSequence( model, model.actions[currentActionName], model.actions['idle'], nextAction, i);
      }
  }

  incrementSequence(model) {
    // Increment sequence position
    model.actionSequenceProgress++

    // Check if we're at the end and reset if so
    if (model.actionSequenceProgress > model.actionSequence.length - 1) {
      // console.log('repeat sequence: ', model.name);
      model.actionSequenceProgress = 0;
    }
  }

  advanceInSequence(model, currentAction, idleAction, nextAction, i) {
    // Crossfade out current step to idle if not idle
    this.executeCrossFade( currentAction, idleAction, this.TRANSITION );

    // Start the next step in the sequence after a timeout
    model.timeout = setTimeout( () => {
      this.executeCrossFade( idleAction, nextAction, this.TRANSITION );
    }, Math.max(1500, 6000 * Math.random()) + (i * 100) );

  }

  loadGLTF(callback) {
    // Instantiate a loader
    var loader = new GLTFLoader();

    // Load a glTF resource
    loader.load(
      // resource URL
      this.LOADPATH,
      // called when the resource is loaded
      ( gltf ) => {
        // Store animations in global object
        this.animations = gltf.animations;
        // console.log(animations);

        // Store loaded scene in global object
        this.gltfScene = gltf.scene;

        this.worldScene.add( this.gltfScene );

        callback();
      },
      // called while loading is progressing
      ( xhr ) => {
        // console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
      },
      // called when loading has errors
      ( error ) => {
        console.log( 'An error happened', error );
      }
    );
  }

  getModelByName( name ) {
    for ( var i = 0; i < this.models.length; ++ i ) {
      if ( this.models[ i ].name === name ) {
        return this.models[ i ];
      }
    }
    return null;
  }

  setWeight( action, weight ) {
    action.enabled = true;
    action.setEffectiveTimeScale( 1 );
    action.setEffectiveWeight( weight );
  }

  executeCrossFade( startAction, endAction, duration ) {
      this.setWeight( endAction, 1 );
      endAction.time = 0;
      startAction.crossFadeTo( endAction, duration, true );
  }

  positionModel( model ) {
    let locator = model.mesh.parent.name === 'Scene' ? model.mesh : model.mesh.parent;
    locator.position.x = model.position.x;
    locator.position.y = model.position.y;
    locator.position.z = model.position.z;
  }

  rotateModel( model ) {
    if (model.rotation !== null) {
      let parent = model.mesh.parent;
      parent.rotation.y = model.rotation.y;
    }
  }

  enhanceMaterial(material) {
    if (!this.enhancedMaterial) {

      this.enhancedMaterial = true;
      material.onBeforeCompile = ( shader ) => {
        shader.uniforms.master = { value: 1 };
        shader.uniforms.time = { value: 0 };
        if (window.devicePixelRatio < 1.5) {
          console.log('Low Pixel Ratio');
          shader.uniforms.noise = { value: 0.4 };
        } else {
          shader.uniforms.noise = { value: 0.6 };
        }
        shader.vertexShader = 'varying float vY;\nvarying float vY2;\n' + shader.vertexShader;

        shader.vertexShader = shader.vertexShader.replace(
          '#include <fog_vertex>', SharedShader.vertexShader
        );

        shader.fragmentShader = 'uniform float master;\nuniform float time;\nuniform float noise;\nvarying float vY;\nvarying float vY2;\n' + SharedShader.randomFunction + SharedShader.blendFunction + shader.fragmentShader;

        shader.fragmentShader = shader.fragmentShader.replace(
          '#include <specularmap_fragment>', SharedShader.fragmentShaderOutput
        );

        this.shaderMaterial = shader;
      }

    }
  }

}
