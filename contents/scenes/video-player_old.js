const cursor = document.querySelector("a-cursor");
const interactiveElements = document.querySelectorAll(".interactive");

interactiveElements.forEach((element) => {
  element.addEventListener("mouseenter", function () {
    cursor.setAttribute("color", "yellow"); // 호버 시 커서 색을 노란색으로 변경
  });

  element.addEventListener("mouseleave", function () {
    cursor.setAttribute("color", "white"); // 호버 종료 시 원래 흰색으로 복원
  });
});

  //   document.querySelector("#play-video1").addEventListener("click", function () {
  // document.querySelector("#Presence_intro_vid").play();
  // });
  // document.querySelector("#pause-video1").addEventListener("click", function () {
  //   document.querySelector("#Presence_intro_vid").pause();
  // });

  function toggleVideo(buttonId, videoId) {
  const button = document.querySelector(`#${buttonId}`);
  const video = document.querySelector(`#${videoId}`);
  
  button.addEventListener("click", () => {
    // 현재 비디오가 재생 중인지 확인
    if (video.paused) {
      video.play();
      button.setAttribute("color", "red"); // 버튼 색상을 빨간색으로 변경 (정지 버튼)
    } else {
      video.pause();
      button.setAttribute("color", "green"); // 버튼 색상을 초록색으로 변경 (재생 버튼)
    }
  });
}

// 버튼과 비디오를 연결
toggleVideo("play-video1", "Presence_intro_vid");

