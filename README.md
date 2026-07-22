# ALH Hausmeisterservice – Firmenwebsite

Website für den Hausmeister- und Reinigungsservice **ALH Hausmeisterservice** (Heilbronn/Oedheim), umgesetzt als Kundenprojekt.

> **Hinweis:** Dies ist eine echte Kundenwebsite. Firmenname, Leistungen, Texte und Bilder gehören dem Betreiber. Der Quellcode liegt hier als Arbeitsprobe im Portfolio; Inhalte sind nicht zur freien Weiterverwendung gedacht (siehe [Lizenz](#lizenz)).

## Screenshots

| Startseite | Leistungen |
| --- | --- |
| _[Platzhalter – startseite.png]_ | _[Platzhalter – leistungen.png]_ |

## Verwendete Technologien

- HTML5, CSS3 (ein zentrales Stylesheet, kein Framework)
- Vanilla JavaScript (mobiles Menü, Bild-Reveal-Animation, Galerie-Filter über URL-Parameter)
- Statische Seite: kein Build-Prozess, keine Datenbank, kein Backend
- SEO-Grundlagen: individuelle Title-/Meta-Tags je Seite, strukturierte Daten (JSON-LD), `sitemap.xml`/`robots.txt`

## Projektstruktur

```
├── index.html, leistungen.html, ...   # Einzelne Seiten
├── css/styles.css                     # Zentrales Stylesheet
├── js/main.js                         # Navigation, Animationen, Kontaktformular-Logik
├── img/                               # Arbeitsfotos und Ergänzungsbilder (siehe BILDQUELLEN.md)
├── brand/                             # Logo- und Social-Media-Dateien
├── icons/                             # Favicon / App-Icons
├── robots.txt, sitemap.xml            # SEO
└── BILDQUELLEN.md                     # Bildnachweise und Lizenzhinweise
```

## Lokale Nutzung

Keine Installation nötig – die Seite ist rein statisch:
```bash
python -m http.server 4177
```
und anschließend `http://localhost:4177` öffnen. Alternativ genügt es, `index.html` direkt im Browser zu öffnen.

## Deployment

Statische Seite ohne Build-Schritt. Der komplette Repository-Inhalt kann direkt auf ein beliebiges statisches Webhosting hochgeladen werden.

**Hosting-Hinweis:** Die produktive Website unter `alh-hausmeisterservice.de` läuft auf separatem Webhosting, nicht über GitHub Pages dieses Repos. Dieses Repository ist zusätzlich über GitHub Pages als Vorschau erreichbar (`https://emin030103-svg.github.io/ALH-Hausmeisterservice/`); dafür ist bewusst keine eigene Domain per `CNAME` konfiguriert. `robots.txt` und `sitemap.xml` beziehen sich auf die produktive Domain und sind für den Upload auf das eigentliche Webhosting gedacht.

## Kontaktformular

Das Formular öffnet ein vorbereitetes E-Mail-Fenster (`mailto:`) statt einen Server anzusprechen. Die Empfängeradresse ist in `js/main.js` als `CONTACT_EMAIL` hinterlegt.

## Lizenz

Kein Open-Source-Projekt. Der Quellcode dient als Arbeitsprobe im Portfolio; Inhalte, Bilder und Markenzeichen gehören dem Betreiber (ALH Hausmeisterservice).
