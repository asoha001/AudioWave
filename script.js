

function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
}

// close sidebar when clicking outside
document.addEventListener("click", function (event) {
    const sidebar = document.getElementById("sidebar");
    const hamburgerMenu = document.querySelector(".hamburger-menu");

    if (
        sidebar.classList.contains("active") &&
        !sidebar.contains(event.target) &&
        !hamburgerMenu.contains(event.target)
    ) {
        sidebar.classList.remove("active");
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const playButtons = document.querySelectorAll('.play-button');
  
    playButtons.forEach(button => {
      button.addEventListener('click', () => {
        const audioUrl = button.getAttribute('data-audio');
        const audio = new Audio(audioUrl);
  
        audio.play();
        button.disabled = true;
  
        
      });
    });
  });
  
// audio and volume slider functionality
const audio = document.getElementById('audio-player');
const lyrics = document.querySelectorAll('.lyrics-container p');
const volumeSlider = document.getElementById('volumeRange');

// Highlight the current lyric based on playback time
audio.addEventListener('timeupdate', () => {
const currentTime = audio.currentTime;

lyrics.forEach((lyric) => {
const lyricTime = parseFloat(lyric.getAttribute('data-time'));
if (lyricTime <= currentTime) {
    lyrics.forEach((l) => l.classList.remove('highlight'));
    lyric.classList.add('highlight');
}
});
});
