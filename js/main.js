const CONTACT_EMAIL = "info@alh-hausmeisterservice.de";

// Mobile navigation: toggle the menu and close it on link click, resize or Escape.
const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
if (navToggle && siteNav) {
  const closeMenu = () => {
    siteNav.classList.remove("open");
    document.body.classList.remove("nav-open");
    navToggle.setAttribute("aria-expanded", "false");
  };

  navToggle.addEventListener("click", () => {
    const open = siteNav.classList.toggle("open");
    document.body.classList.toggle("nav-open", open);
    navToggle.setAttribute("aria-expanded", String(open));
  });

  siteNav.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) closeMenu();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });
}
// Fade in elements with the "reveal" class as they scroll into view.
const observer = "IntersectionObserver" in window ? new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 }) : null;
document.querySelectorAll(".reveal").forEach((el) => observer ? observer.observe(el) : el.classList.add("is-visible"));

// Pre-select the requested service in the contact form, e.g. when linked
// from a service page as leistungen.html?leistung=winterdienst.
const params = new URLSearchParams(window.location.search);
const requested = params.get("leistung");
if (requested) {
  const select = document.querySelector('select[name="leistung"]');
  const map = {
    "hausmeisterservice": "Hausmeisterservice",
    "gebaeudereinigung": "Gebäudereinigung",
    "treppenhausreinigung": "Treppenhausreinigung",
    "buero-praxisreinigung": "Büro- und Praxisreinigung",
    "gartenpflege": "Gartenpflege",
    "winterdienst": "Winterdienst",
    "glasreinigung": "Glas- und Fensterreinigung",
    "pv-reinigung": "PV-Anlagenreinigung",
    "entruempelungen": "Entrümpelungen",
    "sonderreinigungen": "Sonderreinigungen",
    "kleinreparaturen": "Kleinreparaturen",
    "objektbetreuung": "Objektbetreuung",
  };
  if (select && map[requested]) select.value = map[requested];
}

// Contact form has no backend: build a pre-filled mailto: link instead of submitting anywhere.
const form = document.getElementById("contact-form");
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const subject = `Anfrage ALH Hausmeisterservice: ${data.get("leistung")}`;
    const body = [
      "Guten Tag ALH Hausmeisterservice,",
      "",
      "ich bitte um Rueckmeldung zu folgender Anfrage:",
      "",
      `Name: ${data.get("name")}`,
      `Telefon: ${data.get("telefon")}`,
      `E-Mail: ${data.get("email")}`,
      `Gewuenschte Leistung: ${data.get("leistung")}`,
      "",
      "Nachricht:",
      data.get("nachricht"),
      "",
      "Mit freundlichen Grüßen"
    ].join("\n");
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}

// Two-click map consent: the map iframe is only created after the user
// explicitly clicks "load map", so no third-party content loads by default.
document.querySelectorAll(".map-consent").forEach((wrap) => {
  const button = wrap.querySelector(".map-load");
  if (!button) return;
  button.addEventListener("click", () => {
    const iframe = document.createElement("iframe");
    iframe.title = "Karte: ALH Hausmeisterservice in Oedheim";
    iframe.loading = "lazy";
    iframe.referrerPolicy = "no-referrer-when-downgrade";
    iframe.src = wrap.dataset.mapSrc;
    wrap.replaceChildren(iframe);
  });
});

