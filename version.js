// version.js
const version = "v1.0.2";

document.addEventListener("DOMContentLoaded", () => {
    const versionDiv = document.createElement("div");
    versionDiv.id = "version-info";
    versionDiv.textContent = "Version " + version;
    document.body.appendChild(versionDiv);
});