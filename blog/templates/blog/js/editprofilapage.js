// Highlight selected theme
document.querySelectorAll(".themesforprofile div").forEach(theme => {
  theme.addEventListener("click", () => {
    document.querySelectorAll(".themesforprofile div")
      .forEach(t => t.style.border = "1px solid #ccc");

    theme.style.border = "2px solid #007bff";
  });
});

// Illustration upload
document.querySelector(".uploadbutton").addEventListener("click", () => {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = "image/*";

  input.onchange = e => {
    const file = e.target.files[0];
    if (file) {
      document.querySelector(".uploadbutton").style.backgroundImage =
        `url(${URL.createObjectURL(file)})`;
      document.querySelector(".uploadbutton").style.backgroundSize = "cover";
      document.querySelector(".uploadbutton").style.backgroundPosition = "center";
    }
  };

  input.click();
});

// Wallpaper upload
document.querySelector(".uploadwallpaperbutton").addEventListener("click", () => {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = "image/*";

  input.onchange = e => {
    const file = e.target.files[0];
    if (file) {
      const newWallpaper = document.createElement("div");
      newWallpaper.style.backgroundImage = `url(${URL.createObjectURL(file)})`;
      newWallpaper.style.backgroundSize = "cover";
      newWallpaper.style.backgroundPosition = "center";
      newWallpaper.style.height = "120px";
      newWallpaper.style.borderRadius = "10px";
      newWallpaper.style.border = "1px solid #ccc";

      document.querySelector(".wallpapers").appendChild(newWallpaper);
    }
  };

  input.click();
});
