function swipeShorts() {
  try {
    const video = document.querySelector("video.video-stream");
    const NEXT_VIDEO_BUTTON_SELECTOR = "#navigation-button-down > ytd-button-renderer > yt-button-shape > button";
    const nextBtn = document.querySelector(NEXT_VIDEO_BUTTON_SELECTOR);

    if (!nextBtn) throw new Error("Next Button not found!");
    if (!video) throw new Error("Video not found!");
    console.log(nextBtn)

    video.addEventListener("timeupdate", () => {
      const buffer = 0.5; // Small buffer to ensure it doesn't miss the end
      if (video.currentTime >= video.duration - buffer) {
        console.log("Next Short!");
        nextBtn.click();
      }
    });
  } catch (error) {
    console.error(error)
  }
}

swipeShorts();