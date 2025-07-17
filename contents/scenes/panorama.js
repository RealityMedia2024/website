AFRAME.registerComponent('resize-on-proximity', {
    schema: {
      target: { type: 'selector' },
      minDistance: { type: 'number', default: 3 },
      enlargedRadius: { type: 'number', default: 10 },
      normalRadius: { type: 'number', default: 5 },
      hideOthersSelector: { type: 'string', default: '' }
    },
  
    init: function () {
      this.isZoomed = false;
    },
  
    tick: function () {
      const { target, minDistance, enlargedRadius, normalRadius, hideOthersSelector } = this.data;
      const objectEl = this.el;
  
      if (!target || !target.object3D || !objectEl.object3D) return;
  
      const distance = objectEl.object3D.position.distanceTo(target.object3D.position);
      const shouldZoom = distance < minDistance;
  
      // 이미 확대 상태이면 무시
      if (shouldZoom === this.isZoomed) return;
  
      this.isZoomed = shouldZoom;
  
      // 크기 조정
      objectEl.setAttribute('geometry', 'radius', shouldZoom ? enlargedRadius : normalRadius);
  
      // 숨기기/보이기 처리
      if (hideOthersSelector) {
        const allToHide = document.querySelectorAll(hideOthersSelector);
        allToHide.forEach(el => {
          // 자기 자신은 숨기지 않음
          if (el !== objectEl) {
            el.setAttribute('visible', !shouldZoom);
          }
        });
      }
  
      // 애니메이션 제어 (선택 사항)
      objectEl.setAttribute('animation', 'enabled', !shouldZoom);
    }
  });
  