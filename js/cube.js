//3.js (see script.js for more manipulation of the cube)
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 20, 150/50, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer({alpha:true});
renderer.setSize( 150, 50);

document.body.insertBefore( renderer.domElement, document.querySelector(".menu-container") );

var ambientLight = new THREE.AmbientLight( 0x000000 );
    scene.add( ambientLight );

    var lights = [];
    lights[0] = new THREE.PointLight( 0xffffff, 1, 0, 0 );

    lights[0].position.set( 0, 0, 100 );

    scene.add( lights[0] );

var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshLambertMaterial( { color: 0x54e7a0 } );
var cube = new THREE.Mesh( geometry, material );

scene.add( cube );

camera.position.z = 5;

function render() {
requestAnimationFrame( render );
cube.rotation.x += 0.02;
cube.rotation.y += 0.02;
renderer.render( scene, camera );
}
render();
