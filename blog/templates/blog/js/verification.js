const video = document.getElementById('camera');
const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");
const overlay = document.getElementById("overlay");

navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
        video.srcObject = stream;
    })
function animate() {
    posX += velX;
    posY += velY;

    if (posX <= 0 || posX >= window.innerWidth - 300) velX *= -1;
    if (posY <= 0 || posY >= window.innerHeight - 200) velY *= -1;

    oval.style.left = posX + 'px';
    oval.style.top = posY + 'px';

    requestAnimationFrame(animate);
}
openModal?.addEventListener("click", () => {
  overlay?.classList.add("active");
});

closeModal?.addEventListener("click", () => {
  overlay?.classList.remove("active");
});

overlay?.addEventListener("click", (e) => {
  if (e.target === overlay) {
    overlay.classList.remove("active");
  }
});


animate();
