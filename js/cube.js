//3.js
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 20, 150/50, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer({alpha:true});
renderer.setSize( 150, 50);

document.body.insertBefore( renderer.domElement, document.querySelector(".menu") );

var ambientLight = new THREE.AmbientLight( 0x000000 );
    scene.add( ambientLight );

    var lights = [];
    lights[0] = new THREE.PointLight( 0xffffff, 1, 0, 0 );

    lights[0].position.set( 0, 0, 100 );

    scene.add( lights[0] );

var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshLambertMaterial( { color: 0x090e33 } );
var cube = new THREE.Mesh( geometry, material );

var onKeyDown = function(event) {
  if (event.keyCode == 67) { // when 'c' is pressed
    cube.material.color.setHex(0xfc00b6); // there is also setHSV and setRGB
  }
  else if (event.keyCode == 68) { // when 'd' is pressed
    cube.material.color.setHex(0x24ff33); // there is also setHSV and setRGB
  }
  else if (event.keyCode == 69) { // when 'd' is pressed
    cube.material.color.setHex(0x090e33); // there is also setHSV and setRGB
  }
};
document.addEventListener('keydown', onKeyDown, false);

// this handler will be executed every time the cursor is moved over a different list item
  document.querySelector("canvas").addEventListener("mouseover", function( event ) {
    // highlight the mouseover target
    cube.material.color.setHex(0x0955ff); // there is also setHSV and setRGB
  }, false);

  document.querySelector("canvas").addEventListener("mouseout", function( event ) {
    // highlight the mouseover target
    cube.material.color.setHex(0x090e33); // there is also setHSV and setRGB
  }, false);

scene.add( cube );

camera.position.z = 5;

function render() {
requestAnimationFrame( render );
cube.rotation.x += 0.02;
cube.rotation.y += 0.02;
renderer.render( scene, camera );
}
render();
