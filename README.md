# MyShop

En enkel produktsida med en hero-sektion, tre produktkort och ett email-formulär

## Filer

- index.html - Sidans struktur med semantisk HTML, ARIA-attribut och optimerade bilder
- styles.css - Sidans utseende med förbättrad färgkontrast och synlig navigering med tab
- script.js - Hantering av knappar, email-formulär, LCP-mätning med PerformanceObserver och tillgänglighetstest med axe-core

## Tillgänglighetsändringar

- Alt-text på bilderna
- Semantisk HTML: header, nav, main, section, article och footer används korrekt
- ARIA-attribut där det är lämpligt
- Förbättrad färgkontrast
- Korrekt rubrikstruktur med en h1
- Button-element med synlig navigering med tab
- Labels och autocomplete på formulärfält

## Prestandaoptimeringar

- Bilder komprimerade och konverterade till WebP
- loading="lazy" på produktbilder
- fetchpriority="high" på hero-bilden
- width och height på bilder för att undvika layout shift
- Script flyttat till slutet av body
- Borttagen simulateHeavyWork

## Testning

- axe-core inkluderad via CDN. (Kommenterats bort för prestandamätning)
- PerformanceObserver loggar LCP-tid och LCP-element i konsolen
- Testat i Chrome, Firefox och Edge