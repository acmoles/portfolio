import * as THREE from 'three/build/three.module.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import Stats from 'three/examples/jsm/libs/stats.module.js';
import { EventTarget } from 'event-target-shim/dist/event-target-shim.mjs';

import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { ClearPass } from 'three/examples/jsm/postprocessing/ClearPass.js';
import { MaskPass, ClearMaskPass } from 'three/examples/jsm/postprocessing/MaskPass.js';
import { CopyShader } from 'three/examples/jsm/shaders/CopyShader.js';
import { FXAAShader } from 'three/examples/jsm/shaders/FXAAShader.js';
import { NoiseShader } from './noiseShader.js'

import { LoadedContent } from './LoadedContent.js'
import { Grid } from './grid.js'
import { Interactions } from './interactions.js'


console.log('watch out! 3D content loaded.');

export class ThreeComposition extends EventTarget {

  constructor(domParent) {
    super();
    this.renderer = new THREE.WebGLRenderer( { alpha: true } );
    // Custom framerate for noise
    this.now; this.delta; this.fixedDelta; this.then = Date.now();
    this.interval = 1000/10;

    this.worldScene = new THREE.Scene();

    this.camFactor = 38;

    this.camera = new THREE.OrthographicCamera();

    this.controls = new OrbitControls( this.camera, this.renderer.domElement );

    this.container = domParent;
    this.clock = new THREE.Clock();
    this.stats = new Stats();

    this.content = new LoadedContent(this.worldScene);

    this.grid = new Grid(
      this.worldScene,
      this.content
    );

    this.interactions = new Interactions(
      this.camera,
      this.container,
      this.content.interactables,
      this.grid.gridElements
    );

    this.configRenderer();
    this.configScene();

    // Test
    // this.configTestGeometry();
    // this.animate();
  }

  init() {
    this.content.addEventListener('loaded', () => {
      this.postLoad();
    });
    this.content.init();
    this.animate();
  }

  postLoad() {
    this.grid.init();
    this.interactions.init();
    this.dispatchEvent(new Event('comp-loaded'));

    this.interactions.addEventListener('click', (e) => {
      this.grid.click(e.detail);
    } );

    this.interactions.addEventListener('scroll', (e) => {
      this.grid.scroll(e.detail);
      this.content.scroll(e.detail);
    } );

    this.interactions.addEventListener('pause-external', (e) => {
      this.grid.pause();
    } );
  }

  animate() {
    requestAnimationFrame( () => { this.animate(); } );
    this.now = Date.now();
    this.fixedDelta = this.now - this.then;
    this.delta = this.clock.getDelta();

    for ( var i = 0; i < this.content.models.length; ++ i ) {
      if (this.content.models[ i ].mixer !== null) {
        this.content.models[ i ].mixer.update( this.delta );
      }
    }

    this.customPass.uniforms['amount'].value = 0.1;
    this.composer.render();

    if (this.fixedDelta > this.interval) {
      this.customPass.uniforms['seed'].value += this.interval;
      this.then = this.now - (this.fixedDelta % this.interval);
    }

    this.stats.update();
  }

  configRenderer() {
    let width = this.container.offsetWidth;
    let height = this.container.offsetHeight;

    // this.renderer.setClearColor( 0x273444, 0 );
    this.renderer.setPixelRatio( window.devicePixelRatio );
    this.renderer.setSize( width, height );
    // this.renderer.physicallyCorrectLights = true;
    this.renderer.outputEncoding = THREE.sRGBEncoding;
    this.renderer.gammaFactor = 2;
    this.renderer.gammaOutput = true;

    this.composer = new EffectComposer( this.renderer, this.renderTarget);

    let renderPass = new RenderPass( this.worldScene, this.camera );
    this.composer.addPass( renderPass );

    this.customPass = new ShaderPass( NoiseShader );
    this.composer.addPass( this.customPass );

    this.fxaaPass = new ShaderPass( FXAAShader );
    this.fxaaPass.writeToScreen = true;
    this.composer.addPass( this.fxaaPass );

    this.container.appendChild( this.renderer.domElement );
    this.container.appendChild( this.stats.dom );
  }

  configScene() {
    this.camera.position.set( 33, 30, 33 );
    this.controls.target.set( 0, 5.5, 0 );

    //dark
    this.worldScene.background = null;

    this.onWindowResize();
    var axesHelper = new THREE.AxesHelper( 5 );
    this.worldScene.add( axesHelper );

    // TODO add these to restrict user camera
    let maxAngle = (7 / 20) * Math.PI;
    this.controls.maxPolarAngle = maxAngle;
    this.controls.minPolarAngle = maxAngle;
    this.controls.enableZoom = false;
    this.controls.enablePan = false;

    this.controls.update();

    window.addEventListener( 'resize', () => { this.onWindowResize(); }, false );
  }

  onWindowResize() {
    let width = this.container.offsetWidth;
    let height = this.container.offsetHeight;

    this.renderer.setSize( width, height );
    this.composer.setSize( width, height );

    var pixelRatio = this.renderer.getPixelRatio();
		this.fxaaPass.material.uniforms[ 'resolution' ].value.x = 1 / ( width * pixelRatio );
		this.fxaaPass.material.uniforms[ 'resolution' ].value.y = 1 / ( height * pixelRatio );

    this.camera.left = width / - this.camFactor;
    this.camera.right = width / this.camFactor;
    this.camera.top = height / this.camFactor;
    this.camera.bottom = height / - this.camFactor;

    this.camera.updateProjectionMatrix();
  }

  configTestGeometry() {
    let material = new THREE.MeshBasicMaterial({
      // color: 0xC0CCDA
      // color: 0x0B1421
      color: 0x060B13
    });

    let mesh = new THREE.Mesh(new THREE.BoxGeometry(1,1,1), material);

    this.worldScene.add(mesh);
  }

}
