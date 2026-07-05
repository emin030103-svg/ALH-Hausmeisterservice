# ALH Hausmeisterservice Website

Diese Website ist statisch aufgebaut. Es ist keine Installation, keine Datenbank und kein Build-Prozess notwendig.

## Upload

1. ZIP-Datei entpacken.
2. Den kompletten Inhalt des Ordners `alh-hausmeisterservice` in `/htdocs/` hochladen.
3. Die Website ist danach direkt unter der Domain erreichbar.

## Bilder und Logos

Die eingebundenen Arbeitsfotos liegen optimiert unter `assets/images/arbeiten/`. Die finalen Logo-Dateien und Social-Media-Vorschauen liegen unter `assets/brand/`, die App- und Favicon-Dateien unter `assets/icons/`.

## Kontaktformular

Das Formular öffnet ein vorbereitetes E-Mail-Fenster. Die Empfängeradresse steht in `assets/js/main.js` in der Zeile:

`const CONTACT_EMAIL = "info@alh-hausmeisterservice.de";`
