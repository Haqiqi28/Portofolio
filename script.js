let currentIndex = 0;

function moveSlide(direction) {
  const slide = document.querySelector(".carousel-slide");
  const projects = document.querySelectorAll(".project");
  const totalProjects = projects.length;

  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = totalProjects - 1; // Kembali ke slide terakhir jika mundur dari pertama
  } else if (currentIndex >= totalProjects) {
    currentIndex = 0; // Kembali ke slide pertama jika maju dari terakhir
  }

  const offset = -currentIndex * 100; // Hitung jarak pergeseran
  slide.style.transform = "translateX(${offset}%)";
}
