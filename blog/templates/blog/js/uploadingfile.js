const openBtn = document.getElementById("openModal");
const closeBtn = document.getElementById("closeModal");
const overlay = document.getElementById("overlay");

openBtn.addEventListener("click", () => {
    overlay.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    overlay.classList.remove("active");
});
overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      overlay.classList.remove("active");
    }
});