// version.js
const version = "1.0.3";

document.addEventListener("DOMContentLoaded", () => {
    const versionDiv = document.createElement("div");
    versionDiv.id = "version-info";
    versionDiv.textContent = "Version " + version;
    document.body.appendChild(versionDiv);
});