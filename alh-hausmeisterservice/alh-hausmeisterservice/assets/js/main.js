const CONTACT_EMAIL = "info@alh-hausmeisterservice.de";
const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const open = siteNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(open));
  });
}
const observer = "IntersectionObserver" in window ? new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 }) : null;
document.querySelectorAll(".reveal").forEach((el) => observer ? observer.observe(el) : el.classList.add("is-visible"));
const params = new URLSearchParams(window.location.search);
const requested = params.get("leistung");
if (requested) {
  const select = document.querySelector('select[name="leistung"]');
  const map = {
    "hausmeisterservice":"Hausmeisterservice","gebaeudereinigung":"Gebäudereinigung","treppenhausreinigung":"Treppenhausreinigung","buero-praxisreinigung":"Büro- und Praxisreinigung","gartenpflege":"Gartenpflege","winterdienst":"Winterdienst","glasreinigung":"Glas- und Fensterreinigung","pv-reinigung":"PV-Anlagenreinigung","entruempelungen":"Entrümpelungen","sonderreinigungen":"Sonderreinigungen","kleinreparaturen":"Kleinreparaturen","objektbetreuung":"Objektbetreuung"
  };
  if (select && map[requested]) select.value = map[requested];
}
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
