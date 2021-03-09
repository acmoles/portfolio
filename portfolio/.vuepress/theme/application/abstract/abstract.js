import * as THREE from 'three/build/three.module.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
// import Stats from 'three/examples/jsm/libs/stats.module.js';
import { EventTarget } from 'event-target-shim/dist/event-target-shim.mjs';
import anime from 'animejs';

import { SphereShader } from './sphereShader.js'

// import * as dat from '../node_modules/dat.gui/build/dat.gui.module.js';

export class Abstract extends EventTarget {

  constructor(domParent, home) {
    super();

    this.home = home;

    this.vw = domParent.offsetWidth;
		this.vh = domParent.offsetHeight;

    this.container = domParent;
    this.clock = new THREE.Clock();
    this.start = Date.now();
    // this.stats = new Stats();
    // this.gui = new dat.GUI();

    // Variables
    this.near = 1;
    this.far = 196;
    this.zoom = 1;
  }

  init() {
    // console.log('init abstract');

    // this.gui.add(this, 'near', 0, 100);
    // this.gui.add(this, 'far', 100, 1000);
    // this.gui.add(this, 'zoom', 0, 100);

    window.getCamera = this.getCamera.bind(this);

    this.configRenderer();
    this.configScene();
    this.configSphere();
    if (this.controls) {
      this.controls.addEventListener( 'change', this.stopAnimate.bind(this) );
    }
    this.dispatchEvent(new Event('abstract-loaded'));
  }

  stopAnimate() {
    if (this.longZoomAnimation && !this.longZoomAnimation.paused) {
      this.longZoomAnimation.pause();
    }
  }

  begin() {
    this.animate();

    if (this.home) {
      anime({
        targets: this.camera.position,
        x: -30,
        y: -60,
        z: 50,
        delay: 1000,
        duration: 4000,
        easing: 'easeOutQuad',
        complete: (anim) => {
          this.longZoomAnimation = anime({
            targets: this.camera.position,
            x: -30,
            y: -60,
            z: 80,
            duration: 160000,
            easing: 'linear',
          })
        }
      })
    } else {
      anime({
        targets: this.camera.position,
        x: 3.84,
        y: -19.35,
        z: 57.66,
        duration: 4000,
        easing: 'easeOutQuad',
        complete: (anim) => {
          this.longZoomAnimation = anime({
            targets: this.camera.position,
            x: 4.5,
            y: -23,
            z: 100,
            duration: 80000,
            easing: 'linear',
          })
        }
      })
    }

  }

  configRenderer() {
    this.renderer = new THREE.WebGLRenderer( { alpha: true, depth: true } );
    this.animationFrame;
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(45, this.vw / this.vh, 1, this.far);

    if (this.vw > 768) {
      this.controls = new OrbitControls( this.camera, this.renderer.domElement );
      this.controls.enableZoom = false;  
    }
    this.renderer.setClearColor( 0x13CE66, 0 );
    this.renderer.setPixelRatio( window.devicePixelRatio );
    this.renderer.setSize( this.vw, this.vh );

    this.container.appendChild( this.renderer.domElement );
    // this.container.appendChild( this.stats.dom );
  }

  configScene() {
    if (this.home) {
      this.camera.position.set( -5, -60, 75 );
    } else {
      this.camera.position.set( 5, -25, 75 );
    }

    this.camera.lookAt(this.scene.position);

    // TEMP
    // var axesHelper = new THREE.AxesHelper( 5 );
    // this.scene.add( axesHelper );

    this.scene.add(this.camera);

    // const ref = () => { this.onWindowResize(); };
    // this.ref = ref;
    // window.addEventListener( 'resize', ref, false );
  }

  getCamera() {
    console.log(this.camera.position);
  }

  configSphere() {
    this.geometry = new THREE.IcosahedronGeometry(12, 2);

    this.uniforms = {
      time: { type:"f", value: this.start },
      near: { value: this.near },
      far: { value: this.far },
    };

    let vertexShader = SphereShader.perlinNoise + SphereShader.vertexShader;
    let fragmentShader = SphereShader.perlinNoise + SphereShader.fragmentShader;

    this.material = new THREE.ShaderMaterial( {
			uniforms: this.uniforms,
			vertexShader : vertexShader,
			fragmentShader : fragmentShader,
      transparent: true,
      fog: true
		} );

    this.sphere = new THREE.Mesh(this.geometry, this.material);
    if (this.home) {
      this.sphere.position.set( -10, -30, 0 );
    } else {
      this.sphere.position.set( 10, 10, 0 );
    }
    this.sphere.rotation.x = Math.PI / 3
    this.sphere.rotation.y = Math.PI / 8
    this.sphere.rotation.z = Math.PI / 6
    this.sphere.scale.x = 1.5;
		this.sphere.material.transparent = true;

    this.scene.add(this.sphere);
  }

  animate() {
    this.animationFrame = requestAnimationFrame( () => { this.animate(); } );

    this.renderer.render( this.scene, this.camera );
    // this.stats.update();
    if (this.controls) {
      this.controls.update();
    }
		this.uniforms.time.value = .00005 * ( Date.now() - this.start );
  }

  destroy() {
    cancelAnimationFrame( this.animationFrame );
    // window.removeEventListener('resize', this.ref, false);
    // this.longZoomAnimation.pause();
    let activeInstances = anime.running;
    let index = activeInstances.indexOf(this.longZoomAnimation);
    activeInstances.splice(index, 1);
    this.scene.remove(this.sphere);
    this.geometry.dispose();
    this.material.dispose();
    this.uniforms = null;
    this.scene = null;
    if (this.controls) {
      this.controls.dispose();
    }
    this.camera = null;
    this.renderer.renderLists.dispose();
    this.renderer.dispose();
    this.renderer.domElement = null
    this.renderer = null;
  }

  onWindowResize(width, height) {
    // console.log('resize abstract');
    this.vw = this.container.offsetWidth;
		this.vh = this.container.offsetHeight;
    this.renderer.setSize( this.vw, this.vh );
    // this.composer.setSize( this.vw, this.vh );

    // var pixelRatio = this.renderer.getPixelRatio();
    // this.fxaaPass.material.uniforms[ 'resolution' ].value.x = 1 / ( this.vw * pixelRatio );
    // this.fxaaPass.material.uniforms[ 'resolution' ].value.y = 1 / ( this.vh * pixelRatio );

    this.camera.left = this.vw / - this.camFactor;
    this.camera.right = this.vw / this.camFactor;
    this.camera.top = this.vh / this.camFactor;
    this.camera.bottom = this.vh / - this.camFactor;

    this.camera.updateProjectionMatrix();
  }

}
