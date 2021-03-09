var SharedShader = {

// Not used...
otherShader: `
varying vec2 vUv;

void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
}

uniform sampler2D map;

varying vec2 vUv;

void main()
{
		gl_FragColor = texture2D(map, vUv);
}
`
,

vertexShaderGrid:`

vY = position.y;

`,

vertexShader:`
// vec3 n_position = normalize(position.xyz);
// vY = n_position.y - .5;
vec4 v = projectionMatrix * modelViewMatrix * vec4( position, 1. );
vY = v.y / v.z;
vY2 = position.y;
`,

randomFunction: `
// float random(vec3 scale,float seed){return fract(sin(dot(gl_FragCoord.xyz+seed,scale))*43758.5453+seed);}
highp float random(vec2 co)
{
    highp float a = 12.9898;
    highp float b = 78.233;
    highp float c = 43758.5453;
    highp float dt= dot(co.xy ,vec2(a,b));
    highp float sn= mod(dt,3.14);
    return fract(sin(sn) * c);
}
`,

blendFunction: `
vec3 blendOverlay(vec3 base, vec3 blend) {
	return mix(
        sqrt(base) * (2.0 * blend - 1.0) + 2.0 * base * (1.0 - blend),
        2.0 * base * blend + base * base * (1.0 - 2.0 * blend),
        step(base, vec3(0.5))
    );
}
`,

fragmentShaderOutput: `
float val = smoothstep( 0., 1.75, .5 - vY );
float val2 = smoothstep( 1., .01, vY2 / 40. );

vec3 col = mix( vec3( 2. ), vec3( 0. ), 1. - val );
vec3 col2 = mix( vec3( 1.1 ), vec3( 0. ), val2 * 1.2 );

//diffuseColor.rgb = (col2 + col) * master;
diffuseColor.rgb = blendOverlay( diffuseColor.rgb, (col2 + col) * master );

float dx = random( gl_FragCoord.xy );
//diffuseColor.rgb = diffuseColor.rgb + diffuseColor.rgb * clamp( 0.1 + dx, 0.0, 1.0 );

//float n = ( 1. - noise * random( vec3( 1. ), length( gl_FragCoord ) ) );

diffuseColor.rgb = blendOverlay( diffuseColor.rgb, vec3( dx ) );
`
,

fragmentShaderOutputGrid: `
float val = smoothstep( .95, .05, vY );
vec3 col = mix( vec3( 1. ), vec3( 0.14 ), val );

// diffuseColor.rgb = 2.*col;
diffuseColor.rgb = blendOverlay( diffuseColor.rgb, col );


// float n = ( 1.42 - .64 * random( vec3( 1. ), length( gl_FragCoord ) ) );

// diffuseColor.rgb = blendOverlay( diffuseColor.rgb, vec3( n ) );
`
};


export { SharedShader };
