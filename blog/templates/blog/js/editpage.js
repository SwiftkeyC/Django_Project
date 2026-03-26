onclick="history.back()"
const avatarInput = document.getElementById("avatarInput");
const avatarPreview = document.getElementById("avatarPreview");

avatarInput.addEventListener("change", function () {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            avatarPreview.style.backgroundImage = `url(${e.target.result})`;
            avatarPreview.style.backgroundSize = "cover";
            avatarPreview.style.backgroundPosition = "center";
        }
        reader.readAsDataURL(file);
    }
});