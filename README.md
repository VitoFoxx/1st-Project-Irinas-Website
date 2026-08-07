# Perfect Line by Irina — Website (Redesign 2026)

Vollständiges Redesign der Website für „Perfect Line by Irina" (Permanent Make-up, Lashlift, Browlift, Braut-Styling — Sarstedt bei Hildesheim), auf Basis der Inhalte der bisherigen Website unter neuem, eigenständigem Design.

## Struktur

```
/
├── index.html            Home
├── leistungen.html        Perfect Line: Browlift, Lashlift, Powder Brows
├── bridal-look.html       Bridal Looks: Pakete, Preise, Konditionen
├── studio.html            Studio Sarstedt
├── ueber-mich.html        Über Irina Baumgärtner
├── kontakt.html           Kontaktkanäle & Formular
├── impressum.html         Impressum (§5 TMG)
├── datenschutz.html       Datenschutzerklärung
├── agb.html               Allgemeine Geschäftsbedingungen
├── styles/tailwind.css    Kompiliertes, selbst gehostetes Tailwind-CSS (siehe unten)
├── styles/fonts.css       @font-face-Regeln für die selbst gehosteten Schriften
├── styles/main.css        Basisstile, Platzhalterbild-Komponente, Reveal-Animationen
├── scripts/main.js        Navigation, FAQ-Accordion, GSAP-Animationen
├── scripts/vendor/        Selbst gehostetes GSAP + ScrollTrigger
├── assets/icons/          Eigene SVG-Icons (Menü, Pfeil, Check, Social, Favicon)
├── assets/images/         Bildordner (aktuell leer, siehe unten)
├── assets/fonts/          Selbst gehostete Fraunces/Manrope-Dateien (.woff2)
├── robots.txt / sitemap.xml
├── tailwind.config.cjs    Design-Tokens (Farben, Fonts) — nur zum (Neu-)Bauen von styles/tailwind.css nötig
```

## Tech-Stack

Reines HTML5 + selbst gehostetes Tailwind CSS + Vanilla JavaScript + selbst gehostetes GSAP/ScrollTrigger + selbst gehostete Schriften. Zur Laufzeit sind **keine externen Anfragen** an Drittanbieter nötig (schneller, robuster, DSGVO-freundlicher als CDN-Varianten). Die fertigen Seiten können direkt per Webserver ausgeliefert werden (z. B. `python3 -m http.server` zum lokalen Testen) — ein Build-Schritt ist für den Betrieb nicht erforderlich.

Nur wenn du die verwendeten Tailwind-Klassen im HTML änderst, muss `styles/tailwind.css` neu erzeugt werden:

```bash
npm install
npx tailwindcss -i styles/tailwind.src.css -o styles/tailwind.css --minify
```

## Design

Richtung „Luxury Editorial": Creme/Beige/Espresso-Palette mit dezenten Goldakzenten, Display-Schrift **Fraunces**, Fließtext **Manrope**. Signature-Element ist der Homepage-Hero, der den bestehenden Marken-Claim „Zwei Welten. Ein Ziel." visuell als zusammenfließende Doppel-Hero-Fläche (Perfect Line / Bridal Looks) inszeniert.

## Vor dem Livegang zu erledigen

1. **Bilder ersetzen** — alle mit `Platzhalter` markierten Flächen (`.ph-image`) durch echte Fotos ersetzen. Am einfachsten: `<img>`-Tag anstelle des Platzhalter-`<div>` einsetzen, `.ph-image`-Klasse entfernen.
2. **`assets/images/og-cover.jpg`** (1200×630 px) ergänzen — wird aktuell in den Meta-Tags referenziert, existiert aber noch nicht.
3. **Rechtstexte prüfen lassen** — Impressum, Datenschutz und AGB wurden inhaltlich aus der bisherigen Website übernommen bzw. an die neue Technik angepasst, sollten aber vor Veröffentlichung von einer fachkundigen Stelle geprüft werden (u. a. Kleinunternehmerregelung, Hosting-Angabe in der Datenschutzerklärung ergänzen).
4. **Testimonials** — aktuell Platzhaltertexte, durch echte Kundinnenstimmen ersetzen (idealerweise mit Einverständnis).
5. **Kontaktformular** — sendet aktuell per `mailto:` (öffnet das E-Mail-Programm der Besucherin). Für eine serverseitige Zustellung kann es später an einen Formular-Service (z. B. Formspree) oder ein eigenes Backend angebunden werden.

## Lokale Vorschau

```bash
python3 -m http.server 8000
```

Anschließend `http://localhost:8000` im Browser öffnen.
