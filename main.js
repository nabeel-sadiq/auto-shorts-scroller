function swipeShorts() {
  try {
    const video = document.querySelector("video.video-stream");
    const NEXT_VIDEO_BUTTON_SELECTOR = "#navigation-button-down > ytd-button-renderer > yt-button-shape > button";
    const sponsored_selector = ".badge-shape-wiz__text"
    const sponsored_elem = document.querySelector(sponsored_selector);
    const nextBtn = document.querySelector(NEXT_VIDEO_BUTTON_SELECTOR);

    if (!nextBtn) throw new Error("Next Button not found!");
    if (!video) throw new Error("Video not found!");
    if (sponsored_elem?.textContent == "Sponsored") console.log(sponsored);
    
    console.log(nextBtn)

    video.addEventListener("timeupdate", () => {
      const buffer = 0.2; // Small buffer to ensure it doesn't miss the end
      if (video.currentTime >= video.duration - buffer) {
        console.log("boutta scroll")
        nextBtn.click();
      }
    });
  } catch (error) {
    console.error(error)
  }
}

swipeShorts();