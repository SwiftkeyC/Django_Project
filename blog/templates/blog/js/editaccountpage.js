// Sidebar navigation scroll
document.querySelectorAll(".nav-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelectorAll(".nav-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const target = document.getElementById(btn.dataset.target);
        target.scrollIntoView({ behavior: "smooth" });
    });
});

// Theme selection
document.querySelectorAll(".theme").forEach(theme => {
    theme.addEventListener("click", () => {
        document.querySelectorAll(".theme").forEach(t => t.classList.remove("selected"));
        theme.classList.add("selected");
    });
});

// Wallpaper selection
document.querySelectorAll(".wallpaper").forEach(wallpaper => {
    wallpaper.addEventListener("click", () => {
        document.querySelectorAll(".wallpaper").forEach(w => w.classList.remove("selected"));
        wallpaper.classList.add("selected");
    });
});

// Illustration upload preview
document.querySelector(".illustrationbutton input").addEventListener("change", e => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
        document.querySelector(".illustrationback").style.backgroundImage =
            `url(${reader.result})`;
        document.querySelector(".illustrationback").style.backgroundSize = "cover";
        document.querySelector(".illustrationback").style.backgroundPosition = "center";
    };
    reader.readAsDataURL(file);
});
function goBack() {
    if (document.referrer) {
        window.history.back();
    } else {
        window.location.href = "index.html"; // fallback page
    }
}
