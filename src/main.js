function swipeShorts() {
  try {
    const video = document.querySelector("video.video-stream");
    const NEXT_VIDEO_BUTTON_SELECTOR = "#navigation-button-down > ytd-button-renderer > yt-button-shape > button";
    const nextBtn = document.querySelector(NEXT_VIDEO_BUTTON_SELECTOR);
    let hasClicked = false;

    if (!nextBtn) throw new Error("Next Button not found!");
    if (!video) throw new Error("Video not found!");
    console.log(nextBtn)
    console.log(video);

    video.addEventListener("timeupdate", () => {
      const buffer = 0.5; // Small buffer to ensure it doesn't miss the end
      if (video.currentTime >= video.duration - buffer && !hasClicked) {
        hasClicked = true;
        setTimeout(() => {
          nextBtn.click();
          hasClicked = false;
        }, 500);
      }
    });
  } catch (error) {
    console.error(error)
  }
}

console.log("yes")
swipeShorts();