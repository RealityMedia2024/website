AFRAME.registerComponent('video-trigger', {
  schema: {
    target: { type: 'selector' },
    video: { type: 'selector' },
    width: { type: 'number', default: 4 },
    depth: { type: 'number', default: 4 },
    debug: { type: 'boolean', default: false }
  },

  init: function () {
    this.isOnPlane = false;
    this.lastLog = '';
  },

  tick: function () {
    const userPos = this.data.target.object3D.position;
    const planePos = this.el.object3D.position;
    const halfWidth = this.data.width / 2;
    const halfDepth = this.data.depth / 2;
    const video = this.data.video;

    const inXZ =
      userPos.x >= (planePos.x - halfWidth) &&
      userPos.x <= (planePos.x + halfWidth) &&
      userPos.z >= (planePos.z - halfDepth) &&
      userPos.z <= (planePos.z + halfDepth);

    if (inXZ && !this.isOnPlane) {
      video.play();
      this.isOnPlane = true;
      if (this.data.debug) console.log(`[video-trigger] ENTERED trigger zone → Playing video (${video.id})`);
    } else if (!inXZ && this.isOnPlane) {
      video.pause();
      this.isOnPlane = false;
      if (this.data.debug) console.log(`[video-trigger] EXITED trigger zone → Pausing video (${video.id})`);
    }

    // 위치 변경 시에만 로그 출력
    // if (this.data.debug) {
    //   const currentLog = `UserPos: x=${userPos.x.toFixed(2)}, z=${userPos.z.toFixed(2)}`;
    //   if (currentLog !== this.lastLog) {
    //     console.log(`[video-trigger] ${currentLog} | TriggerZone: x=[${(planePos.x - halfWidth).toFixed(2)}~${(planePos.x + halfWidth).toFixed(2)}], z=[${(planePos.z - halfDepth).toFixed(2)}~${(planePos.z + halfDepth).toFixed(2)}]`);
    //     this.lastLog = currentLog;
    //   }
    // }
  }
});
