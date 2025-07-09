const newsList = [
    { date: "09/07/2025", message: "Système de news activé!!! Vous pouvez voir ici toutes les actualités du moment." }
];

// Indicateur de nouveauté (à modifier manuellement ou dynamiquement)
const hasNewNews = false; // false ou true

document.addEventListener("DOMContentLoaded", () => {
    // Bouton News
    const newsBtn = document.createElement("div");
    newsBtn.id = "news-button";
    newsBtn.textContent = "📰 News";
    newsBtn.title = "Voir les dernières annonces";

    // Petit point rouge si nouvelle news
    if (hasNewNews) {
        const notifDot = document.createElement("span");
        notifDot.className = "notif-dot";
        newsBtn.appendChild(notifDot);
    }

    document.body.appendChild(newsBtn);

    // Fenêtre des News
    const newsPopup = document.createElement("div");
    newsPopup.id = "news-popup";
    newsPopup.innerHTML = `
        <h4>Dernières News</h4>
        <ul>
            ${newsList.map(item => `
                <li><strong>${item.date}</strong><br>${item.message}</li>
            `).join("")}
        </ul>
    `;
    document.body.appendChild(newsPopup);

    // Toggle affichage
    newsBtn.addEventListener("click", () => {
        newsPopup.classList.toggle("visible");

        // Optionnel : cacher le point rouge une fois ouvert
        if (newsPopup.classList.contains("visible")) {
            const dot = document.querySelector(".notif-dot");
            if (dot) dot.style.display = "none";
        }
    });
});
