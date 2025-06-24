AFRAME.registerComponent('proximity-link-opener', {
    schema: {
      target: { type: 'selector' }, // 플레이어 엔터티 (예: #cameraRig)
      href: { type: 'string' },
      minDistance: { type: 'number', default: 2 }
    },
  
    init: function () {
      this.opened = false;
    },
  
    tick: function () {
      if (this.opened) return;
  
      const targetEl = this.data.target;
      const linkEl = this.el;
  
      if (!targetEl || !targetEl.object3D || !linkEl.object3D) return;
  
      const distance = linkEl.object3D.position.distanceTo(targetEl.object3D.position);
      if (distance < this.data.minDistance) {
        this.opened = true;
        window.open(this.data.href, '_blank');
      }
    }
  });
  