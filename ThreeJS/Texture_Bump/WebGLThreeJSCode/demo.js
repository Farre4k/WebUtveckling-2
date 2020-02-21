var width = window.innerWidth;
var height = window.innerHeight;
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 45, width / height, 0.1, 10000 );
var renderer = new THREE.WebGLRenderer();
renderer.setSize( width, height );
renderer.setClearColor( 0xaaaaaa, 1 );
document.body.appendChild( renderer.domElement );

camera.position.z = 7;

var controls = new THREE.OrbitControls( camera, renderer.domElement );


var textureLoader = new THREE.TextureLoader();
textureLoader.load("marble_map.jpg", texture => {
var cubeGeometry = new THREE.BoxGeometry( 1, 1, 1 );
var cubeMaterial = new THREE.MeshPhongMaterial( { color: 0xaaaaee, bumpMap: texture, bumpScale: 0.3  } );
var cube = new THREE.Mesh( cubeGeometry, cubeMaterial );
cube.position.x = -2
scene.add(cube);
 },
);


var textureLoader = new THREE.TextureLoader();
textureLoader.load("marble_texture.jpg", texture => {
    var coneGeometry = new THREE.ConeGeometry( 0.5, 1, 4 );
		var coneMaterial = new THREE.MeshPhongMaterial( { map: texture } );
    var cone = new THREE.Mesh( coneGeometry, coneMaterial);
    scene.add(cone);
	},
);

var textureLoader = new THREE.TextureLoader();
textureLoader.load("bump_map.jpg", texture => {
    var sphereGeometry = new THREE.SphereGeometry( 0.5, 16, 16 );
    var sphereMaterial = new THREE.MeshPhongMaterial( { color: 0x0000ff, bumpMap: texture, bumpScale: 1.0 } );
    var sphere = new THREE.Mesh( sphereGeometry, sphereMaterial );
    sphere.position.x = 2;
    scene.add(sphere);
	},
);

var light = new THREE.HemisphereLight(0xffffff, 2);
scene.add(light);

var light = new THREE.PointLight(0xFFFFFF, 1);
light.position.x = 0;
light.position.y = 10;
light.position.z = 0;
scene.add(light);

var lightAngle = 0;

function animate() {
  //lightAngle += 5;
  //if (lightAngle > 360) { lightAngle = 0;};
  //light.position.x = 5 * Math.cos(lightAngle * Math.PI / 180);
  //light.position.z = 5 * Math.sin(lightAngle * Math.PI / 180);
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}
animate();
