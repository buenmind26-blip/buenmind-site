
/* BuenMind – Main JS
   Lightweight enhancements for interactivity and future expansion.
*/

/* Smooth scroll for internal links */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

/* Auto-update footer year (backup in case HTML script fails) */
const yearSpan = document.getElementById("year");
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

/* Placeholder for future features:
   - Form validation
   - Product interactions
   - Blog enhancements
   - Language toggle extensions
*/
console.log("BuenMind main.js loaded");
