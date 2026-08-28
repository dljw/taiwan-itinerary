# Taiwan Family Trip — itinerary site

Open **`index.html`** in any browser. Everything works from the local file system; there is
no server, no build step and no internet connection required.

Top-right of every page: **EN · 中文 · 双语** switches the language. The choice is remembered
across pages. You can also force one with a URL, e.g. `day5.html?lang=zh` — handy for sending
a Chinese link to family.

---

## Where to change things

**All content lives in `assets/data/`. You should never need to touch the HTML or CSS.**

| I want to change… | Edit this |
|---|---|
| A day's times, activities, food, place write-ups | `assets/data/day1.js` … `day7.js` |
| Trip title, the day list on the home page, hotel/transport facts | `assets/data/trip.js` |
| The restaurant table | `assets/data/food.js` |
| Free time, bedtimes and wake-up alarms | `assets/data/freetime.js` |
| Transport plan, fares and the Day 1 charter | `assets/data/transport.js` |
| What the budget page says is / isn't included, cash-only stops, SGD | `assets/data/food.js` (bottom, `budgetNotes`) |
| Bookings checklist, phrasebook, taxi cards, emergency numbers | `assets/data/practical.js` |
| Typhoon and rain plan | `assets/data/weather.js` |
| Colours, fonts, spacing | `assets/css/styles.css` (tokens at the very top) |

Every piece of text is a pair:

```js
{ en: "Sky lantern release", zh: "放天灯" }
```

Edit either side. If you add a new entry, keep both keys or that language will render blank.

### Changing a day

Open `assets/data/dayN.js`. The shape is:

- `date`, `title`, `intro`, `chips` — the banner at the top
- `glance` — the five-box summary strip
- `timeline` — the hour-by-hour rows. `type` is `travel` / `meal` / `sight` / `rest` and only
  sets the colour. `cost` is a plain number in NT$. **`img` is optional** — add
  `img: "slug/file.jpg"` to any row and a thumbnail appears beside it (above it on a phone),
  clickable to enlarge. Leave it off and the row is text-only, which suits travel and rest rows
- `places` — in-depth write-ups (folded into matching timeline stops via `placeRef` or matching `maps`)
- On any timeline row you can also add:
  - `maps` — Google Maps search URL
  - `placeRef` — matches a `places[].name.en` (or `.zh`) so the write-up nests under that stop
  - `place: { address, hours, phone, rating, count, review, asOf }` — card footer facts
- `food` — the dish cards
- `verify` — the "check this" boxes
- `logistics`, `taxi` — the boxes at the foot of the page

### The free-time page

`assets/data/freetime.js` is written by hand, not derived from the timelines — "free" is a
judgement call, not arithmetic. **If you move a day's times, update the matching window there
too**, especially the `tomorrow` block, which is what everyone will actually read the night
before.

**The budget page adds itself up from the `cost` numbers in each day's `timeline`,** which now
include train and bus fares as well as food and tickets, so change
a price in one place and the budget table follows. Rows marked `altGroup: true` (Day 3's three
split groups) are left out of the total so it doesn't count all three.

### Reordering or swapping days

Two places must agree: the `days` array in `trip.js`, and the `n` / `date` / `title` at the top
of each `dayN.js`. Filenames stay as they are — `day3.js` is simply "the third day", whatever
it contains.

---

## Photos

They live in `assets/images/<place-slug>/`, and are referenced by filename in the data files:

```js
images: [
  "jiufen/jiufen-lantern-alley-steps.jpg",
  "jiufen/jiufen-amei-teahouse-dusk.jpg"
]
```

- A place card shows **up to four** photos; extra entries in the array are ignored.
- 149 photos are in use — day heroes, place-card galleries, dish cards and timeline thumbnails.
  Another 35 are downloaded but unused; look in the folders and swap any filename in if you
  prefer a different shot.
- Every image on the site has a recorded source, author and licence. If you add or swap one,
  add a matching entry to a `credits-*.js` file so the credits page stays honest.
- If a filename doesn't exist, the page shows a dashed "add photo" box instead of breaking.
- **`assets/images/himalaya-cafe/`** holds the one photo on the site that isn't openly licensed —
  a Google Maps contributor shot of the shrine hall at the Day 1 family visit, with the Maps
  interface cropped out. See the README in that folder for how to drop in your own photo from
  the visit instead.

Sources for every image are listed on **`credits.html`** (linked in the footer). They were
downloaded from the web as reference pictures, so keep this document private rather than
publishing it.

---

## Three corrections made to the original plan

1. **The weekday labels were from a 2025 calendar.** In 2026, 5–11 September runs
   **Saturday → Friday**. Every date here is the corrected one.
2. **Maokong, the Linkou visit and Daxi Old Street have all moved from where the spreadsheet put
   them.** With the dates fixed, Maokong fell on a Monday, when the gondola is closed for
   maintenance, so it moved to Sunday 6 Sep (Day 2). The family visit on Minzu Road, Linkou then
   anchored Monday 7 Sep for a while, but has since moved again — it now happens on **Day 1**,
   folded into the chartered van's airport-to-hotel drive, since Linkou sits roughly on the way.
   The venue is now pinned too: **喜馬拉雅珈琲 Himalaya Cafe, 民族路81號1樓** — a Tibetan-Buddhist
   café whose ground floor is a full shrine hall — rather than the address-only placeholder the
   plan carried before.
   **Day 3 is now a genuinely free day**, no fixed morning, no Yingge, no outlet, no scheduled
   group split — just Ximending, Longshan Temple or the hotel, whenever suits. Daxi Old Street,
   which used to share Day 1 with the family visit, has moved out entirely to **Day 6**, where it
   now gets a full afternoon after Xiao Wulai — Cihu was dropped from that day to make room, and
   the old street's grazing stalls (tofu, douhua, the peanut roll and more) moved there with it.
3. **The charters are gone; the trip runs on public transport.** Five days of chartered bus came
   to roughly NT$50,000, so Days 3–6 were rewritten around trains, the Taiwan Tourist Shuttle and
   short taxi hops. **Day 1 keeps one chartered mid-bus** (a 中巴, 19–20 seat — a nine-seat van
   legally carries only eight passengers, so ten of us cannot use one) because a 06:55 landing
   with ten suitcases needs a vehicle. Two knock-on losses: **Golden Waterfall drops off Day 5**,
   and **Xiao Wulai needs a taxi from Daxi** because its shuttle runs weekends only.

All three are explained on the home page so nobody reverts to the old plan by accident.

---

## PDF / offline booklet

Open **`booklet.html`**, pick EN / 中文 / 双语, then click **Save as PDF** (or use the browser’s
Print → Save as PDF). That page concatenates every day plus food, transport, practical notes,
weather, free-time alarms and the budget. Individual day pages also print cleanly on their own.

Sticky nav and language chrome are hidden when printing; Maps links print with their full URL.
- **Book the Day 1 mid-bus.** Still unbooked. `transport.html` has three operators, their published
  rates and a ready-to-send enquiry in Traditional characters — get three quotes.
- **Check the timetables before you fly**: the Pingxi Line at Ruifang, the Changhua local trains,
  the Daxi Express weekday schedule, and whether the Xiao Wulai skywalk still needs an online slot.
- Every image slot is filled. The Linkou visit now uses a Maps contributor photo of the café's
  shrine hall — swap in your own family photo from the day if you'd rather.
- **Call Himalaya Cafe (02-7716-1727)** before you fly: listings put opening at 09:30, which is
  exactly when the van pulls up, and twelve people arriving unannounced into a shrine hall is
  worth a heads-up either way.
- The remaining open questions are the ⚠ boxes on the pages themselves: whether Red House's
  weekend market runs on a Monday, the September grape harvest, and the bookings that need
  phoning. Cheng Mei's hours are now confirmed (09:00–17:00 daily, last entry 16:00, no
  reservation needed).
