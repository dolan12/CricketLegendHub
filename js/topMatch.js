 function playVideo(videoId) {
    const videoModal = document.getElementById('video-modal');
    const videoPlayer = document.getElementById('video-player');
    videoPlayer.src = `https://www.youtube.com/embed/${videoId}`;
    console.log(videoId);
    console.log(videoPlayer.src);
    videoModal.style.display = "block";
  }
  function closeModal() {
    const videoModal = document.getElementById('video-modal');
    const videoPlayer = document.getElementById('video-player');
    videoPlayer.src = "";
    videoModal.style.display = "none";
  }
  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);