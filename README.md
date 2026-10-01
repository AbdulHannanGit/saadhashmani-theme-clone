# Saad Hashmani — website

Static one-page site for Saad Hashmani (investor, operator, mentor). No build step: upload the folder to any PHP-capable host and open `index.html`.

## What's in the build

| Path | Purpose |
|---|---|
| `index.html` | The whole page: markup, styles and the page logic |
| `support.js` | Runtime that renders the page component |
| `image-slot.js`, `.image-slots.state.json` | Image slot helper used by the page |
| `mobile.css` | Phone layout (loaded at 768px and below) |
| `_ds/…` | Design system tokens (colours, type, motion) |
| `assets/video/loopscroll-{480,720,1080}p.mp4` | Combined background video |
| `assets/stills/s0.webp` | Hero frame shown while the video loads |
| `uploads/` | Content images (logos, ventures, journey, podcasts, testimonials) |
| `submit.php`, `config.example.php` | Contact form handler |

Fonts: Zodiak (headings) and General Sans (body/labels), loaded from Fontshare.

## Sections

Hero → Journey → Ventures → Playbook → Podcasts → Word of Mouth → Contact. The page moves one section per scroll, swipe or arrow key; scrolling past Contact returns to the hero.

## Background video

One file holds every clip in order, 65.5s in total:

```
s0 t0 s1 t1 s2 t2 s3 t3 s4 t4 s5 t5 s6 t6
s = section loop (4.04s; s3 and s4 are 5s)
t = transition to the next section (5.04s); t6 = contact back to hero
```

- At rest, the section's loop plays forward then backward.
- Scrolling down plays the transition forward; scrolling up plays it backward.
- Clip timings live in `initBg()` in `index.html`. Update them there if the video is re-exported with different lengths.

Quality: `?quality=480`, `?quality=720` or `?quality=1080`. Default is 720p on desktop and 480p on phones.

Known limit: the Canva exports have a keyframe only every ~8s, so backward playback (loop return, scroll-up transitions) runs at roughly 7–11 fps. Re-encoding with a short keyframe interval (e.g. `ffmpeg -g 6`) fixes this without code changes.

Reduced motion: the video stays on each section's first frame.

## Other URL options

- `?preloader=0`: skip the intro preloader.

## Contact form

The chat form posts to `submit.php`, which stores entries in MySQL. On the server, copy `config.example.php` to `config.php` and fill in the database details. `config.php` and `uploads/submissions/` are gitignored. Never commit real credentials.
