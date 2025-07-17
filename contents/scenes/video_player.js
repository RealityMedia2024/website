AFRAME.registerComponent('play-video', {
  schema: {
    target: { type: 'selector' }
  },
  init: function () {
    this.el.addEventListener('click', () => {
      console.log('Clicked', this.data.target);
      const videoId = this.data.target.getAttribute('src').replace('#', '');
      const videoEl = document.getElementById(videoId);
      if (videoEl && videoEl.play) {
        videoEl.play().catch(e => {
          console.warn('Video play failed:', e);
        });
      }
    });
  }
});

AFRAME.registerComponent('stop-video', {
  schema: {
    target: { type: 'selector' }
  },
  init: function () {
    this.el.addEventListener('click', () => {
      const videoId = this.data.target.getAttribute('src').replace('#', '');
      const videoEl = document.getElementById(videoId);
      if (videoEl && videoEl.pause) {
        videoEl.pause();
        videoEl.currentTime = 0;
      }
    });
  }
});

AFRAME.registerComponent('pause-video', {
  schema: {
    target: { type: 'selector' }
  },
  init: function () {
    this.el.addEventListener('click', () => {
      const videoId = this.data.target.getAttribute('src').replace('#', '');
      const videoEl = document.getElementById(videoId);
      if (videoEl && videoEl.pause) {
        videoEl.pause();
        console.log('Paused:', videoId);
      }
    });
  }
});
