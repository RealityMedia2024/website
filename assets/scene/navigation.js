document.addEventListener('keydown', function (event) {
    const cameraEl = document.querySelector('#cameraRig');
    const rotation = cameraEl.getAttribute('rotation');

    // Check which key was pressed
    if (event.key === 'e' || event.key === 'E') {
      // Rotate left (decrease Y rotation)
      rotation.y -= 30;
    } else if (event.key === 'q' || event.key === 'Q') {
      // Rotate right (increase Y rotation)
      rotation.y += 30;
    }

    // Apply the new rotation
    cameraEl.setAttribute('rotation', rotation);
  });

  let movementType = 'teleport';
  function toggleThumbstick(detail) {
    const rayPointers = ['[data-right="ray"]', '[data-left="ray"]'].map(s => document.querySelector(s));
    const type = detail.value;
    movementType = type;
    if (type === 'move') {
      cameraRig.setAttribute('movement-controls', 'enabled', true);
      for (const p of rayPointers) p.removeAttribute('mixin');
    }
    if (type === 'teleport') {
      cameraRig.setAttribute('movement-controls', 'enabled', false);
      for (const p of rayPointers) p.setAttribute('mixin', 'blink');
    }
  }
  // If the user is teleporting disable movement-controls in XR
  // const sceneEl = document.querySelector("a-scene");
  // sceneEl.addEventListener("enter-vr", function() {
  //   if (movementType === 'teleport') {
  //     // cameraRig.setAttribute('movement-controls', 'enabled', false);
  //   }
  // });
  // sceneEl.addEventListener("exit-vr", function() {
  //   cameraRig.setAttribute('movement-controls', 'enabled', true);
  // });

/* global AFRAME */
AFRAME.registerComponent('play-on-click', {
init: function () {
this.onClick = this.onClick.bind(this);
},
play: function () {
window.addEventListener('click', this.onClick);
},
pause: function () {
window.removeEventListener('click', this.onClick);
},
onClick: function (evt) {
var videoEl = this.el.getAttribute('material').src;
if (!videoEl) { return; }
this.el.object3D.visible = true;
if (videoEl.paused) {
videoEl.play();
} else {
videoEl.pause();
}

}
});

let scene = document.querySelector('a-scene');
var cursor = document.querySelector('a-cursor');

/**
* CINEMA MODE
*/
// scene.lightOff = function() {
//   scene.islightOn = true;
//   scene.removeAttribute('animation__fogback');
//   scene.setAttribute('animation__fog', "property: fog.color; to: #0c192a; dur: 800; easing: easeInQuad;");
// }
// scene.lightOn = function() {
//   scene.islightOn = false;
//   scene.removeAttribute('animation__fog');
//   scene.setAttribute('animation__fogback', "property: fog.color; to: #dbdedb; dur: 800");
// }
// Play button action
// document.querySelector('#control-play').addEventListener('click', function () {
//   if (videoPlayer.paused) {
//     scene.lightOn()
//   } else {
//     scene.lightOff();
//     hideCursor();
//   }
// });

//   AFRAME.registerComponent('play-on-click', {
//   init: function () {
//     var videoEl = document.querySelector('#seeitnow_vid');
//     this.el.addEventListener('click', function () {
//       if (videoEl.paused) {
//         videoEl.play();
//       }
//       console.log("clicked");
//     });
//   }
// });
