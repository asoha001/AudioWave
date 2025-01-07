

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
  