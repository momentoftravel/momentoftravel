# Moment of Travel (لحظة سفر) — site files

A plain static website in English and Arabic. No build step, no server code: it works on any static host (it is live on GitHub Pages). Forms send through the free Web3Forms service.

## What each file is

| File | What it is |
|---|---|
| `index.html` / `ar.html` | Main site (English / Arabic): Home, Destinations, Contact. Sections use hash links such as `#/destinations`. |
| `tourism-trips.html` / `tourism-trips-ar.html` | Tourism page: the November (19) and October (17) offers as cards with a small picture each, plus the booking and payment steps. |
| `umrah-trips.html` / `umrah-trips-ar.html` | Umrah page: 20 packages (still demo content), booking and payment steps. |
| `special-trip-request.html` / `-ar.html` | Custom trip request form. |
| `flights.html` / `flights-ar.html` | Aviation hub page (links to the two pages below). |
| `flight-support.html` / `-ar.html` | Aviation Support form. |
| `airline-general-agent.html` / `-ar.html` | Airline General Agent (GSA) page and form. |
| `assets/offers.js` | The 17 October offers (prices, nights, route, what is included), in English and Arabic. |
| `assets/forms.js` | The Web3Forms access key and the shared form-sending code. |
| `assets/styles.css` / `assets/styles-ar.css` | Colours, fonts and layout for the English and Arabic pages. |
| `assets/logo-v4.png` | The logo (transparent background). |
| `photos/` | Photos used on the site. Don't rename them. |
| `photos/offers/` | Small pictures on the Tourism offer cards (`n01`–`n19` = November posters, `c-<country>` = October offers). |

The language switcher (`العربية` / `EN`) links each page to its twin, so keep all files in the same folder.

## Changing the offers (prices, nights, what is included)

Open `assets/offers.js`. October offers are the `o(...)` lines; November offers are the `n(...)` lines lower down (the first number is the picture `photos/offers/nXX.jpg`). The Home page Destinations still shows only the October offers. Each offer is one line like:

`o("china-family", "family", CHINA, CHINA, 8, 4225, SH_GZ, INC.breakfast)`

The order is: id, kind (`family`, `honeymoon` or `couple`), country, title, nights, **price in SAR per person**, route, and the list of included services. Change a value, save, and the Tourism pages, the Destinations cards and the contact-form drop-down (English and Arabic) all update. The booking total is the price multiplied by the number of travelers.

To add or remove an offer, add or delete one `o(...)` line. To change the "includes" lists, edit the `INC` block near the top of the file.

## Forms

Every form (contact, special trip request, GSA, Aviation Support, bookings) goes through Web3Forms (free plan, 250 submissions a month). The access key is in `assets/forms.js` (`MOT_FORM_KEY`) and is tied to the company email, so all requests arrive there. To change where requests are delivered, create a new key at https://web3forms.com with the new email and replace the key in `forms.js`.

## Contact details used on the site

- Main pages: info@momentoftravels.com, WhatsApp +966 54 944 7703, Medina, Saudi Arabia.
- Hours: Saturday to Thursday 9am–10pm, Friday closed.
- Aviation pages (Aviation, Aviation Support, Airline General Agent): aviation@momentoftravels.com.
- Special trip request page: requests@momentoftravels.com.
- Instagram: @moment_of_travel (main pages) and @mot_aviationservices (Aviation pages).

To change one of these, use find-and-replace across all the `.html` files.

## Licenses

- GSA (Airport Operations) & Supervision: 36/2, General Authority of Civil Aviation (GACA).
- Travel & Tourism Services: 73105843, Saudi Ministry of Tourism.
- General Aviation Support Services Provider: 8/2, GACA.

They are listed in the footer of the home pages (`index.html`, `ar.html`, class `footer-licenses`). The GSA page shows 36/2 and the Aviation Support page shows 8/2 in their own Licenses section.

## Publishing changes (GitHub Pages)

1. Open the repository on github.com, open the file, click the pencil icon, edit, and click **Commit changes**. Or use **Add file → Upload files** to replace several files (keep the `assets` and `photos` folders).
2. Wait about a minute, then refresh the live site (Ctrl+F5 to skip the cached copy).

## Still to do

- The Umrah packages are demo content: replace the `UMRAH_PACKAGES` list near the bottom of the script in `umrah-trips.html` and `umrah-trips-ar.html` with the real ones.
- The footer "Newsletter archive" link has no destination yet.
- Optional: create a Web3Forms key for requests@momentoftravels.com and paste it into `MOT_FORM_KEY_REQUESTS` in `assets/forms.js` so the special trip request form reaches that inbox (until then it uses the main key).
- The footer lists photo credits (Wikimedia Commons). Remove them if those photos are replaced with your own.
