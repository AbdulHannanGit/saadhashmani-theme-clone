# Saad Hashmani — website

Static one-page site for Saad Hashmani (investor, operator, mentor). No build step: upload the folder to any PHP-capable host and open `index.html`.

## What's in the build

| Path | Purpose |
|---|---|
| `index.html` | The whole page: markup, styles and the page logic |
| `support.js` | Runtime that renders the page component |
| `image-slot.js`, `.image-slots.state.json` | Image slot helper used by the page |
| `mobile.css` | Phone layout (loaded at 768px and below) |
| `gsap-motion.js` | GSAP motion version, loaded only with `?gsap=1` |
| `_ds/…` | Design system tokens (colours, type, motion) |
| `assets/video/loopscroll-{480,720,1080}p.mp4` | Combined background video |
| `assets/stills/s0.webp` | Hero frame shown while the video loads |
| `uploads/` | Content images (logos, ventures, journey, podcasts, testimonials) |
| `submit.php`, `config.example.php` | Contact form handler |

Fonts: Zodiak (headings) and General Sans (body/labels), loaded from Fontshare.

## Sections

Hero → Journey → Ventures → Playbook → Podcasts → Word of Mouth → Contact. The page moves one section per scroll, swipe or arrow key; scrolling past Contact returns to the hero.

## On phones

- Journey: the timeline sits higher so the milestone photo is centred on screen, with the four stats in one compact row above it.
- Playbook: only touches inside the wheel turn it (the full circle when centred, the half circle at the bottom when a topic is open); everywhere else taps and swipes work normally, and a wheel drag never changes section.
- Podcasts: the carousel sits lower and the player controls higher, with the title block lifted to clear them.

## Background video

One file holds every clip in order, 65.5s in total:

```
s0 t0 s1 t1 s2 t2 s3 t3 s4 t4 s5 t5 s6 t6
s = section loop (4.04s; s3 and s4 are 5s)
t = transition to the next section (5.04s); t6 = contact back to hero
```

- At rest, the section's loop plays forward and restarts from its start.
- Scrolling down plays the transition forward and hands over to the next loop on the same frame.
- Scrolling up cuts straight to the previous section's loop. Nothing plays backwards.
- Clip timings live in `initBg()` in `index.html`. Update them there if the video is re-exported with different lengths.

Quality: `?quality=480`, `?quality=720` or `?quality=1080`. Default is 720p on desktop and 480p on phones.

Note: the Canva exports have a keyframe only every ~8s, so each loop restart may hold a frame for a moment. Re-encoding with a short keyframe interval (e.g. `ffmpeg -g 15`) makes restarts instant without code changes.

Reduced motion: the video stays on each section's first frame.

## Other URL options

- `?preloader=0`: skip the intro preloader.
- `?gsap=1`: GSAP motion version (`gsap-motion.js`, GSAP 3.13 + SplitText + ScrambleText from jsDelivr). Each section unlocks on arrival: eyebrows dial in, the hero name rises letter by letter, proof numbers count up, the Ventures heading slides open, the Playbook heading comes into focus, and the contact form opens from its centre. Reduced-motion users get plain fades.

Options combine, e.g. `?gsap=1&quality=1080&preloader=0`.

## Contact form

The chat form posts to `submit.php`, which stores entries in MySQL. On the server, copy `config.example.php` to `config.php` and fill in the database details. `config.php` and `uploads/submissions/` are gitignored. Never commit real credentials.
