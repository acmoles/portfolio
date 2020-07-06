import * as THREE from 'three/build/three.module.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
// import Stats from 'three/examples/jsm/libs/stats.module.js';
import { EventTarget } from 'event-target-shim/dist/event-target-shim.mjs';
import updateOnScroll from 'uos'

import { LoadedContent } from './loadedContent.js'
import { Grid } from './grid.js'
import { Interactions } from './interactions.js'


export class ThreeComposition extends EventTarget {

  constructor(domParent) {
    super();
    this.renderer = new THREE.WebGLRenderer( { alpha: true, antialias: true } );
    // Custom framerate for noise
    this.now; this.delta; this.fixedDelta; this.then = Date.now();
    this.interval = 1000/10;

    this.worldScene = new THREE.Scene();

    this.camFactor = 38;

    this.camera = new THREE.OrthographicCamera();

    this.controls = new OrbitControls( this.camera, this.renderer.domElement );

    this.container = domParent;
    this.clock = new THREE.Clock();
    // this.stats = new Stats();

    this.configRenderer();
    this.configScene();

    this.content = new LoadedContent(
      this.worldScene,
    );

    this.grid = new Grid(
      this.worldScene,
      this.content,
    );

    this.interactions = new Interactions(
      this.camera,
      this.container,
      this.content.interactables,
      this.grid.gridElements
    );

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
      window.requestAnimationFrame(() => {
        this.grid.scroll(e.detail);
        this.content.scroll(e.detail);
      })

    } );

    this.interactions.addEventListener('pause-external', (e) => {
      this.grid.pause();
    } );
  }

  animate() {
    this.animationFrame = requestAnimationFrame( () => { this.animate(); } );
    this.delta = this.clock.getDelta();

    for ( var i = 0; i < this.content.models.length; ++ i ) {
      if (this.content.models[ i ].mixer !== null) {
        this.content.models[ i ].mixer.update( this.delta );
      }
    }

    this.renderer.render( this.worldScene, this.camera );

    // this.stats.update();
  }

  configRenderer() {
    let width = this.container.offsetWidth;
    let height = this.container.offsetHeight;

    this.renderer.setClearColor( 0x273444, 0 );
    this.renderer.setPixelRatio( window.devicePixelRatio );
    this.renderer.setSize( width, height );
    this.renderer.outputEncoding = THREE.sRGBEncoding;
    this.renderer.gammaFactor = 2;

    this.container.appendChild( this.renderer.domElement );
    // this.container.appendChild( this.stats.dom );
  }

  configScene() {
    this.camera.position.set( 33, 30, 33 );

    //dark
    this.worldScene.background = null;

    this.onWindowResize();
    // var axesHelper = new THREE.AxesHelper( 5 );
    // worldScene.add( axesHelper );

    // TODO add these to restrict user camera
    let maxAngle = (7 / 20) * Math.PI;
    this.controls.target.set( 0, 5.5, 0 );

    this.controls.maxPolarAngle = maxAngle;
    this.controls.minPolarAngle = maxAngle;
    this.controls.enableZoom = false;
    this.controls.enablePan = false;
    if (window.innerWidth < 768) {
      this.controls.enabled = false;
    }

    this.controls.update();

    // TODO replace application watch resize with global
    // const ref = () => { this.onWindowResize(); };
    // this.ref = ref;
    // window.addEventListener( 'resize', ref, false );
  }


  onWindowResize() {
    let width = this.container.offsetWidth;
    let height = this.container.offsetHeight;

    this.renderer.setSize( width, height );

    this.camera.left = width / - this.camFactor;
    this.camera.right = width / this.camFactor;
    this.camera.top = height / this.camFactor;
    this.camera.bottom = height / - this.camFactor;

    this.camera.updateProjectionMatrix();
  }

  destroy() {
    cancelAnimationFrame( this.animationFrame );
    // window.removeEventListener('resize', this.ref, false);

    this.worldScene.remove(this.content.gltfScene);
    this.content.animations = [];
    this.content.interactables = [];
    this.content.models.forEach((model) => {
      this.content.gltfScene.remove(model.mesh);
      model.mesh.material.dispose();
      model.mesh.geometry.dispose();
      model = null;
    });
    this.content.gltfScene = null;

    this.worldScene.remove(this.grid.gridContainer);
    this.grid.gridContainer.children.forEach((child) => {
      this.grid.gridContainer.remove(child);
      child.material.dispose();
      child.geometry.dispose();
    });
    this.grid.gridContainer = null;

    this.worldScene.dispose();
    this.worldScene = null;
    this.controls.dispose();
    this.camera = null;
    this.renderer.renderLists.dispose();
    this.renderer.dispose();
    this.renderer.domElement = null
    this.renderer = null;
  }

}
