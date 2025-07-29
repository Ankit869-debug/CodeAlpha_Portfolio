// document.addEventListener("click", () => {
//     const music = document.getElementById("bg-music");
//     if (music.paused) {
//       music.play().catch(err => console.log("Autoplay blocked:", err));
//     }
//   }, { once: true });
  function toggleMusic() {
    const music = document.getElementById("bg-music");
    if (music.paused) {
      music.play();
    } else {
      music.pause();
    }
  }
   particlesJS("particles-js", {
      particles: {
        number: { value: 80 },
        size: { value: 3 },
        color: { value: "#33ccff" },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#33ccff",
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          speed: 4
        }
      },
      interactivity: {
        events: {
          onhover: { enable: true, mode: "repulse" },
          onclick: { enable: true, mode: "push" }
        },
        
        modes: {
          repulse: { distance: 100 },
          push: { particles_nb: 4 }
        }
      },
      retina_detect: true
    });
