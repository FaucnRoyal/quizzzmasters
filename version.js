// version.js
const version = "1.1.1";
const changelog = [
  { version: "1.1.1", date: "08/07/2025", changes: "Ajout de l'affichage de la version sur des pages manquantes" },
  { version: "1.1.0", date: "08/07/2025", changes: "Ajout du bouton pour voir le détail des nouvelles versions" },
  { version: "1.0.3", date: "08/07/2025", changes: "Correction de l’affichage de la version" },
  { version: "1.0.2", date: "08/07/2025", changes: "Ajout de l'affichage de la version sur toutes les pages" },
  { version: "1.0.1", date: "08/07/2025", changes: "Modification questions dans quiz-complements_10" },
  { version: "1.0.0", date: "07/07/2025", changes: "Lancement du site : QuizzzMasters" }
];

document.addEventListener("DOMContentLoaded", () => {
    // Bouton version
    const versionDiv = document.createElement("div");
    versionDiv.id = "version-info";
    versionDiv.textContent = "Version " + version;
    versionDiv.title = "Voir l'historique des versions";
    document.body.appendChild(versionDiv);

    // Popup changelog
    const changelogDiv = document.createElement("div");
    changelogDiv.id = "changelog";
    changelogDiv.innerHTML = `
        <h4>Historique des versions</h4>
        <ul>
            ${changelog.map(log => `
                <li><strong>${log.version}</strong> - ${log.date}<br><em>${log.changes}</em></li>
            `).join("")}
        </ul>
    `;
    document.body.appendChild(changelogDiv);

    // Toggle affichage
    versionDiv.addEventListener("click", () => {
        changelogDiv.classList.toggle("visible");
    });
});
