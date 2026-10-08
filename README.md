# Moment of Travel — site files

- `index.html` — English main site (Home, Destinations, About, Contact). The Home page now also shows three clickable picture cards ("Special Trip Request", "Tourism Trips", "Umrah Trips") right under the intro, each linking straight to its own page.
- `ar.html` — Arabic main site (لحظة سفر) — same pages, same three picture cards, pointing at the Arabic subpages.
- The old combined "Umrah & Tourism" hub page was removed: the nav and footer now have two separate links, "Tourism" (`tourism-trips.html`) and "Umrah" (`umrah-trips.html`). Special Trip Request is reachable from the pill links at the top of each.
- `special-trip-request.html` / `special-trip-request-ar.html` — its own page: the custom-trip request form, plus a card with the company request email underneath.
- `tourism-trips.html` / `tourism-trips-ar.html` — its own page: a banner image, then all 20 tourism packages (services + price on each card), the booking form, and the payment step.
- `umrah-trips.html` / `umrah-trips-ar.html` — its own page: same pattern as Tourism Trips, with the 20 Umrah packages.
- `flights.html` / `flights-ar.html` — separate Flights & Airports site (Airline General Agent, General Flight Support)
- `assets/styles.css` / `assets/styles-ar.css` — shared stylesheets (colors, fonts, components) for the English and Arabic pages respectively — edit a color once here and every page picks it up
- `assets/logo.png` — the site's logo, used in every page's header and footer
- `photos/` — all destination photos used by the main site (shared, so don't rename them)

Every page is plain static HTML with client-side behavior only (no build step, no server-side code needed), so it all works from any static host. `index.html`/`ar.html` still use hash-based routing (`#/about`, `#/contact`, etc.) for their four home-site sections; Tourism, Umrah, Special Trip Request, and Flights & Airports are all genuinely separate HTML files/URLs, cross-linked from the nav, footer, home-page picture cards, and the pill-shaped links at the top of each Umrah/Tourism sub-page.

## Free forms setup (do this before deploying)
All forms (contact, special trip request, GSA, Aviation Support, bookings) send through the free Web3Forms service, so they work on any host.
1. Sign up free at https://web3forms.com with the email where you want requests delivered.
2. Copy the Access Key they send you.
3. Open `assets/forms.js` and replace `PASTE_YOUR_ACCESS_KEY_HERE` with it. Save.

## Deploy options (pick one — Cloudflare Pages recommended, free)

### Cloudflare Pages
1. Go to https://dash.cloudflare.com/ → Workers & Pages → Create → Pages → "Upload assets".
2. Upload this folder, deploy.

### GitHub Pages
1. Create a new GitHub repository.
2. Upload these files (and the `photos` folder) to the repo root.
3. Repo → Settings → Pages → set Source to the `main` branch, root folder.
4. Your site will be live at `https://<your-username>.github.io/<repo-name>/`.

### Firebase Hosting (Google's own static host)
1. Install the Firebase CLI, run `firebase login`, then `firebase init hosting` inside this folder (pick "use an existing project" or create one, and set the public directory to this folder).
2. Run `firebase deploy`.

## Linking the two languages
Each page's nav bar has a small language-switcher link (`العربية` / `EN`) pointing at its counterpart in the other language — as long as you keep all the files in the same folder when you deploy, it just works.

## Editing later
Every page is a single HTML document — open in any text editor. Shared colors/fonts/component styles live in `assets/styles.css` (English pages) and `assets/styles-ar.css` (Arabic pages) — change a value there once and it applies everywhere. Content specific to a page (destination data, package lists, etc.) lives in a data array near the bottom of that page's own `<script>` section — for example `DESTINATIONS` in `index.html`/`ar.html`, `TOURISM_PACKAGES` in `tourism-trips.html`/`tourism-trips-ar.html`, or `UMRAH_PACKAGES` in `umrah-trips.html`/`umrah-trips-ar.html`. The three picture cards (on the Home page and on the Umrah & Tourism hub page) are hand-drawn vector illustrations, not photos — swap the `<div class="svc-pic-poster">...</div>` contents for a real `<img>` tag any time you have photography you'd rather use.
