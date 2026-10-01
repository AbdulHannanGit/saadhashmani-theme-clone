/* @ds-bundle: {"format":4,"namespace":"SaadHashmaniDesignSystem_ddf044","components":[{"name":"ArrowLink","sourcePath":"components/actions/ArrowLink.jsx"},{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"DisplayHeading","sourcePath":"components/brand/DisplayHeading.jsx"},{"name":"Eyebrow","sourcePath":"components/brand/Eyebrow.jsx"},{"name":"HairlineRule","sourcePath":"components/brand/HairlineRule.jsx"},{"name":"Icon","sourcePath":"components/brand/Icon.jsx"},{"name":"Monogram","sourcePath":"components/brand/Monogram.jsx"},{"name":"ScrollCue","sourcePath":"components/brand/ScrollCue.jsx"},{"name":"QuoteBlock","sourcePath":"components/content/QuoteBlock.jsx"},{"name":"StatBlock","sourcePath":"components/content/StatBlock.jsx"},{"name":"StatusTag","sourcePath":"components/content/StatusTag.jsx"},{"name":"ThoughtRow","sourcePath":"components/content/ThoughtRow.jsx"},{"name":"VentureCard","sourcePath":"components/content/VentureCard.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"RequestAccessForm","sourcePath":"components/forms/RequestAccessForm.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"SectionShell","sourcePath":"components/layout/SectionShell.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"}],"sourceHashes":{"components/actions/ArrowLink.jsx":"f7f048d623f6","components/actions/Button.jsx":"190ecb55e435","components/brand/DisplayHeading.jsx":"cb8edc47eac9","components/brand/Eyebrow.jsx":"e6568521e08b","components/brand/HairlineRule.jsx":"2acd2369f00a","components/brand/Icon.jsx":"223349f07070","components/brand/Monogram.jsx":"6fa8727b2243","components/brand/ScrollCue.jsx":"50b0d6447003","components/content/QuoteBlock.jsx":"44f998d06b70","components/content/StatBlock.jsx":"11ad2373af30","components/content/StatusTag.jsx":"3553a692375a","components/content/ThoughtRow.jsx":"403f69ad5d9a","components/content/VentureCard.jsx":"09b6ec68b0fd","components/forms/Input.jsx":"0fcb5db9fbb1","components/forms/RequestAccessForm.jsx":"35f16d9b3d65","components/forms/Textarea.jsx":"146bad343a2b","components/layout/SectionShell.jsx":"4cb3980c446c","components/navigation/NavBar.jsx":"aded29cef9f4","ui_kits/website/AccessScreen.jsx":"f317d48b6a1c","ui_kits/website/HeroScreen.jsx":"b58538c096e6","ui_kits/website/PlaybookScreen.jsx":"b43cdc773cb2","ui_kits/website/ReportsScreen.jsx":"21464bf57d80","ui_kits/website/StatsBand.jsx":"0623c1afc08e","ui_kits/website/ThoughtsScreen.jsx":"b3b696e0873c","ui_kits/website/VenturesScreen.jsx":"cd7fa2192837","ui_kits/website/data.js":"5cfa60906565"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SaadHashmaniDesignSystem_ddf044 = window.SaadHashmaniDesignSystem_ddf044 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/ArrowLink.jsx
try { (() => {
/* Inline gold link with a trailing arrow that slides on hover. */
function ArrowLink({
  children,
  href = '#',
  onClick,
  tone = 'gold',
  iconBase = 'https://unpkg.com/lucide-static@0.544.0/icons',
  style
}) {
  const [hover, setHover] = React.useState(false);
  const url = 'url(' + iconBase + '/arrow-right.svg)';
  const color = tone === 'cream' ? hover ? 'var(--cream-50)' : 'var(--cream-200)' : hover ? 'var(--text-accent-bright)' : 'var(--text-accent)';
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      color,
      font: 'var(--weight-medium) var(--action)/1 var(--font-sans)',
      letterSpacing: 'var(--ls-action)',
      textTransform: 'uppercase',
      textDecoration: 'none',
      transition: 'var(--transition-hover)',
      ...style
    }
  }, children, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 15,
      height: 15,
      background: 'currentColor',
      WebkitMaskImage: url,
      maskImage: url,
      WebkitMaskRepeat: 'no-repeat',
      maskRepeat: 'no-repeat',
      WebkitMaskSize: 'contain',
      maskSize: 'contain',
      transform: hover ? 'translateX(4px)' : 'none',
      transition: 'transform var(--dur-hover) var(--ease-brand)'
    }
  }));
}
Object.assign(__ds_scope, { ArrowLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/ArrowLink.jsx", error: String((e && e.message) || e) }); }

// components/actions/Button.jsx
try { (() => {
/* The gold pill (primary), the hairline pill (secondary) and the bare tracked label (ghost). */
function Button({
  children,
  variant = 'gold',
  size = 'md',
  href,
  disabled,
  iconRight,
  onClick,
  type = 'button',
  style
}) {
  const [hover, setHover] = React.useState(false);
  const [down, setDown] = React.useState(false);
  const pads = {
    sm: '10px 20px',
    md: '14px 28px',
    lg: '18px 38px'
  };
  const fonts = {
    sm: '12px',
    md: 'var(--action)',
    lg: '14px'
  };
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'var(--space-2)',
    font: 'var(--weight-medium) ' + fonts[size] + '/1 var(--font-sans)',
    letterSpacing: 'var(--ls-action)',
    textTransform: 'uppercase',
    padding: pads[size],
    borderRadius: 'var(--radius-pill)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    transition: 'var(--transition-hover), transform var(--dur-instant) var(--ease-brand)',
    opacity: disabled ? 0.34 : 1,
    transform: down && !disabled ? 'scale(0.985)' : 'none',
    border: '1px solid transparent'
  };
  const skins = {
    gold: {
      background: hover && !disabled ? 'var(--gold-200)' : 'var(--fill-gold-flat)',
      color: 'var(--text-on-gold)',
      boxShadow: hover && !disabled ? 'var(--glow-sm)' : 'none'
    },
    outline: {
      background: hover && !disabled ? 'var(--fill-gold-quiet)' : 'transparent',
      color: hover && !disabled ? 'var(--text-accent-bright)' : 'var(--cream-100)',
      borderColor: hover && !disabled ? 'var(--border-hairline-strong)' : 'var(--border-hairline)'
    },
    ghost: {
      background: 'transparent',
      color: hover && !disabled ? 'var(--text-accent-bright)' : 'var(--text-accent)',
      padding: size === 'sm' ? '6px 0' : '8px 0',
      borderRadius: 0
    }
  };
  const Tag = href && !disabled ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, {
    href: href,
    type: Tag === 'button' ? type : undefined,
    disabled: Tag === 'button' ? disabled : undefined,
    onClick: disabled ? undefined : onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setDown(false);
    },
    onMouseDown: () => setDown(true),
    onMouseUp: () => setDown(false),
    style: {
      ...base,
      ...skins[variant],
      ...style
    }
  }, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/brand/DisplayHeading.jsx
try { (() => {
/* High-contrast serif caps. The single loudest element on any screen. */
function DisplayHeading({
  children,
  level = 1,
  size = 'display-1',
  align = 'left',
  caps = true,
  glow = false,
  as,
  style
}) {
  const Tag = as || 'h' + level;
  const sizes = {
    hero: 'var(--display-hero)',
    'display-1': 'var(--display-1)',
    'display-2': 'var(--display-2)',
    'display-3': 'var(--display-3)'
  };
  return /*#__PURE__*/React.createElement(Tag, {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-display)',
      fontSize: sizes[size] || sizes['display-1'],
      lineHeight: 'var(--lh-display)',
      letterSpacing: 'var(--ls-display)',
      color: 'var(--text-display)',
      textTransform: caps ? 'uppercase' : 'none',
      textAlign: align,
      margin: 0,
      textShadow: glow ? 'var(--glow-text)' : 'none',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { DisplayHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/DisplayHeading.jsx", error: String((e && e.message) || e) }); }

// components/brand/Eyebrow.jsx
try { (() => {
/* The wide-tracked gold label that opens every section: THE PLAYBOOK, VENTURES, FIELD REPORTS. */
function Eyebrow({
  children,
  tone = 'gold',
  align = 'left',
  as: Tag = 'div',
  style
}) {
  const color = tone === 'cream' ? 'var(--sand-400)' : tone === 'bright' ? 'var(--text-accent-bright)' : 'var(--text-eyebrow)';
  return /*#__PURE__*/React.createElement(Tag, {
    style: {
      font: 'var(--type-eyebrow)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color,
      textAlign: align,
      paddingRight: '0.42em',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/brand/HairlineRule.jsx
try { (() => {
/* Gold hairline that fades at both ends — the only divider in the system. */
function HairlineRule({
  width = '100%',
  tone = 'gold',
  vertical = false,
  style
}) {
  const bg = tone === 'gold' ? 'var(--rule-gold)' : 'var(--border-subtle)';
  return /*#__PURE__*/React.createElement("div", {
    role: "separator",
    style: vertical ? {
      width: 1,
      height: width,
      background: bg,
      ...style
    } : {
      height: 1,
      width,
      background: bg,
      border: 0,
      ...style
    }
  });
}
Object.assign(__ds_scope, { HairlineRule });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/HairlineRule.jsx", error: String((e && e.message) || e) }); }

// components/brand/Icon.jsx
try { (() => {
/* Lucide (lucide-static) SVGs pulled from CDN and masked to currentColor, so any
   icon inherits gold/cream text colour. No icon set shipped with the brand source. */
function Icon({
  name,
  size = 18,
  base = 'https://unpkg.com/lucide-static@0.544.0/icons',
  style
}) {
  const url = 'url(' + base + '/' + name + '.svg)';
  return /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: 'inline-block',
      width: size,
      height: size,
      background: 'currentColor',
      WebkitMaskImage: url,
      maskImage: url,
      WebkitMaskRepeat: 'no-repeat',
      maskRepeat: 'no-repeat',
      WebkitMaskSize: 'contain',
      maskSize: 'contain',
      flex: '0 0 auto',
      ...style
    }
  });
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Icon.jsx", error: String((e && e.message) || e) }); }

// components/brand/Monogram.jsx
try { (() => {
/* The SH monogram, extracted from the site hero. Pass `src` with the correct
   relative path from the consuming page. With src={null} it degrades to the
   typographic lockup — never redraw the mark. */
function Monogram({
  size = 40,
  src = 'assets/logo/monogram-sh-2x.png',
  label = 'Saad Hashmani',
  wordmark = false,
  style
}) {
  const wrap = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 'var(--space-4)',
    ...style
  };
  const mark = src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: label,
    width: size,
    height: size,
    style: {
      display: 'block',
      width: size,
      height: size,
      objectFit: 'contain'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--weight-medium) ' + Math.round(size * 0.34) + 'px/1 var(--font-sans)',
      letterSpacing: '0.18em',
      color: 'var(--text-accent)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-circle)',
      width: size,
      height: size,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingLeft: '0.18em'
    }
  }, "SH");
  if (!wordmark) return mark;
  return /*#__PURE__*/React.createElement("span", {
    style: wrap
  }, mark, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--weight-regular) 15px/1 var(--font-sans)',
      letterSpacing: '0.22em',
      textTransform: 'uppercase',
      color: 'var(--text-display)'
    }
  }, label));
}
Object.assign(__ds_scope, { Monogram });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Monogram.jsx", error: String((e && e.message) || e) }); }

// components/brand/ScrollCue.jsx
try { (() => {
/* Chevron + SCROLL at the bottom of the hero. Lucide chevron-down, masked to currentColor. */
function ScrollCue({
  label = 'Scroll',
  iconBase = 'https://unpkg.com/lucide-static@0.544.0/icons',
  style,
  onClick
}) {
  const mask = {
    WebkitMaskImage: 'url(' + iconBase + '/chevron-down.svg)',
    maskImage: 'url(' + iconBase + '/chevron-down.svg)',
    WebkitMaskRepeat: 'no-repeat',
    maskRepeat: 'no-repeat',
    WebkitMaskSize: 'contain',
    maskSize: 'contain',
    background: 'currentColor',
    width: 20,
    height: 20,
    display: 'block'
  };
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      background: 'none',
      border: 0,
      padding: 0,
      cursor: onClick ? 'pointer' : 'default',
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 'var(--space-2)',
      color: 'var(--sand-400)',
      transition: 'var(--transition-hover)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: mask
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--weight-regular) var(--label)/1 var(--font-sans)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase'
    }
  }, label));
}
Object.assign(__ds_scope, { ScrollCue });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/ScrollCue.jsx", error: String((e && e.message) || e) }); }

// components/content/QuoteBlock.jsx
try { (() => {
/* Serif italic pull quote with an em-dash attribution. The only italic in the system. */
function QuoteBlock({
  children,
  attribution,
  align = 'center',
  size = 'lg',
  style
}) {
  return /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)',
      alignItems: align === 'center' ? 'center' : 'flex-start',
      textAlign: align,
      ...style
    }
  }, /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontWeight: 'var(--weight-display)',
      fontSize: size === 'lg' ? 'var(--quote-lg)' : 'var(--quote-md)',
      lineHeight: 'var(--lh-quote)',
      color: 'var(--cream-100)',
      maxWidth: 'var(--measure-narrow)'
    }
  }, children), attribution ? /*#__PURE__*/React.createElement("figcaption", {
    style: {
      font: 'var(--weight-regular) var(--label)/1 var(--font-sans)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--text-eyebrow)'
    }
  }, "\u2014 ", attribution) : null);
}
Object.assign(__ds_scope, { QuoteBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/QuoteBlock.jsx", error: String((e && e.message) || e) }); }

// components/content/StatBlock.jsx
try { (() => {
/* The stat band: glowing gold numeral over a small tracked caps label. */
function StatBlock({
  value,
  label,
  size = 'xl',
  align = 'center',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      alignItems: align === 'center' ? 'center' : 'flex-start',
      textAlign: align,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--weight-medium) ' + (size === 'xl' ? 'var(--numeral-xl)' : 'var(--numeral-lg)') + '/1 var(--font-sans)',
      letterSpacing: 'var(--ls-numeral)',
      color: 'var(--gold-200)',
      textShadow: 'var(--glow-text)'
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--weight-regular) var(--label)/1.4 var(--font-sans)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      maxWidth: '12ch'
    }
  }, label));
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/StatBlock.jsx", error: String((e && e.message) || e) }); }

// components/content/StatusTag.jsx
try { (() => {
/* CLOSED / OPEN marker on a venture. Hairline pill, no fill. */
function StatusTag({
  children,
  tone = 'open',
  style
}) {
  const open = tone === 'open';
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      font: 'var(--weight-medium) 11px/1 var(--font-sans)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: open ? 'var(--gold-300)' : 'var(--sand-500)',
      border: '1px solid ' + (open ? 'var(--border-hairline)' : 'var(--border-faint)'),
      borderRadius: 'var(--radius-pill)',
      padding: '5px 12px',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 4,
      height: 4,
      borderRadius: '50%',
      background: 'currentColor',
      boxShadow: open ? 'var(--glow-xs)' : 'none'
    }
  }), children);
}
Object.assign(__ds_scope, { StatusTag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/StatusTag.jsx", error: String((e && e.message) || e) }); }

// components/content/ThoughtRow.jsx
try { (() => {
/* A row in the Thoughts index: number, title, meta, arrow. Hairline separated. */
function ThoughtRow({
  index,
  title,
  meta,
  locked = false,
  onClick,
  style
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'grid',
      gridTemplateColumns: '56px 1fr auto',
      alignItems: 'center',
      gap: 'var(--space-6)',
      padding: 'var(--space-6) 0',
      borderTop: '1px solid var(--border-faint)',
      cursor: onClick ? 'pointer' : 'default',
      transition: 'var(--transition-hover)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--weight-regular) var(--body-sm)/1 var(--font-sans)',
      letterSpacing: '0.1em',
      color: hover ? 'var(--text-accent)' : 'var(--text-faint)'
    }
  }, String(index).padStart(2, '0')), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 24,
      lineHeight: 1.15,
      color: hover ? 'var(--cream-50)' : 'var(--cream-200)'
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-4)',
      font: 'var(--weight-regular) var(--label)/1 var(--font-sans)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: locked ? 'var(--text-eyebrow)' : 'var(--text-muted)'
    }
  }, meta, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: locked ? 'lock' : 'arrow-right',
    size: 14,
    style: {
      transform: hover && !locked ? 'translateX(4px)' : 'none',
      transition: 'transform var(--dur-hover) var(--ease-brand)'
    }
  })));
}
Object.assign(__ds_scope, { ThoughtRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ThoughtRow.jsx", error: String((e && e.message) || e) }); }

// components/content/VentureCard.jsx
try { (() => {
/* A portfolio tile: brushed dark plate, gold hairline, lifts into a glow on hover. */
function VentureCard({
  name,
  sector,
  year,
  thesis,
  status,
  statusTone = 'closed',
  onClick,
  style
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("article", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)',
      padding: 'var(--space-8)',
      background: hover ? 'var(--surface-card-hover)' : 'var(--surface-card)',
      border: '1px solid ' + (hover ? 'var(--border-hairline-strong)' : 'var(--border-faint)'),
      boxShadow: hover ? 'var(--glow-sm), var(--shadow-plate)' : 'none',
      borderRadius: 'var(--radius-hair)',
      cursor: onClick ? 'pointer' : 'default',
      transition: 'var(--transition-hover)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-display)',
      fontSize: 26,
      lineHeight: 1.05,
      letterSpacing: '0.005em',
      textTransform: 'uppercase',
      color: 'var(--text-display)',
      margin: 0
    }
  }, name), year ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--weight-regular) var(--body-sm)/1 var(--font-sans)',
      letterSpacing: '0.08em',
      color: 'var(--text-faint)'
    }
  }, year) : null), sector ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--weight-medium) 11px/1 var(--font-sans)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--text-eyebrow)'
    }
  }, sector) : null, thesis ? /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body)',
      color: 'var(--text-muted)',
      margin: 0
    }
  }, thesis) : null, status ? /*#__PURE__*/React.createElement(__ds_scope.StatusTag, {
    tone: statusTone,
    style: {
      alignSelf: 'flex-start'
    }
  }, status) : null);
}
Object.assign(__ds_scope, { VentureCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/VentureCard.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
/* Underline-only field. No boxes anywhere in this brand. */
function Input({
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
  name,
  required,
  hint,
  invalid,
  style
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--weight-medium) var(--label)/1 var(--font-sans)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: focus ? 'var(--text-accent)' : 'var(--text-muted)',
      transition: 'var(--transition-hover)'
    }
  }, label, required ? ' *' : '') : null, /*#__PURE__*/React.createElement("input", {
    name: name,
    type: type,
    value: value,
    placeholder: placeholder,
    required: required,
    onChange: e => onChange && onChange(e.target.value),
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      background: 'transparent',
      border: 0,
      borderBottom: '1px solid ' + (invalid ? 'var(--gold-600)' : focus ? 'var(--border-hairline-strong)' : 'var(--border-subtle)'),
      padding: '10px 0',
      color: 'var(--cream-100)',
      font: 'var(--weight-regular) var(--body-lg)/1.4 var(--font-sans)',
      outline: 'none',
      transition: 'var(--transition-hover)',
      borderRadius: 0
    }
  }), hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--weight-regular) var(--body-sm)/1.4 var(--font-sans)',
      color: invalid ? 'var(--gold-400)' : 'var(--text-faint)'
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
/* Multi-line variant of Input — same underline, same gold focus. */
function Textarea({
  label,
  value,
  onChange,
  placeholder,
  rows = 4,
  name,
  required,
  hint,
  style
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--weight-medium) var(--label)/1 var(--font-sans)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: focus ? 'var(--text-accent)' : 'var(--text-muted)',
      transition: 'var(--transition-hover)'
    }
  }, label, required ? ' *' : '') : null, /*#__PURE__*/React.createElement("textarea", {
    name: name,
    rows: rows,
    value: value,
    placeholder: placeholder,
    required: required,
    onChange: e => onChange && onChange(e.target.value),
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      background: 'transparent',
      border: 0,
      borderBottom: '1px solid ' + (focus ? 'var(--border-hairline-strong)' : 'var(--border-subtle)'),
      padding: '10px 0',
      color: 'var(--cream-100)',
      font: 'var(--weight-regular) var(--body-lg)/1.55 var(--font-sans)',
      outline: 'none',
      resize: 'vertical',
      transition: 'var(--transition-hover)',
      borderRadius: 0
    }
  }), hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--weight-regular) var(--body-sm)/1.4 var(--font-sans)',
      color: 'var(--text-faint)'
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/forms/RequestAccessForm.jsx
try { (() => {
/* The gated contact form. Submits to a confirmation state — access is granted, not given. */
function RequestAccessForm({
  onSubmit,
  eyebrow = 'By request only',
  submitLabel = 'Request access',
  style
}) {
  const [vals, setVals] = React.useState({
    name: '',
    email: '',
    company: '',
    note: ''
  });
  const [sent, setSent] = React.useState(false);
  const set = k => v => setVals(s => ({
    ...s,
    [k]: v
  }));
  const submit = e => {
    e.preventDefault();
    setSent(true);
    onSubmit && onSubmit(vals);
  };
  if (sent) return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    tone: "bright"
  }, "Request received"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-lede)',
      color: 'var(--text-body)',
      maxWidth: 'var(--measure-narrow)'
    }
  }, "You will hear back only if there is a reason to. Nothing else happens in the meantime."));
  return /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-8)',
      maxWidth: 560,
      ...style
    }
  }, eyebrow ? /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, null, eyebrow) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2,1fr)',
      gap: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Input, {
    label: "Name",
    value: vals.name,
    onChange: set('name'),
    required: true
  }), /*#__PURE__*/React.createElement(__ds_scope.Input, {
    label: "Email",
    type: "email",
    value: vals.email,
    onChange: set('email'),
    required: true
  })), /*#__PURE__*/React.createElement(__ds_scope.Input, {
    label: "Company",
    value: vals.company,
    onChange: set('company')
  }), /*#__PURE__*/React.createElement(__ds_scope.Textarea, {
    label: "What are you building",
    rows: 3,
    value: vals.note,
    onChange: set('note')
  }), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "gold",
    type: "submit"
  }, submitLabel));
}
Object.assign(__ds_scope, { RequestAccessForm });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/RequestAccessForm.jsx", error: String((e && e.message) || e) }); }

// components/layout/SectionShell.jsx
try { (() => {
/* Full-bleed section: brand render behind, scrim over it, content in a container.
   Every marketing screen in this brand is one of these stacked. */
function SectionShell({
  children,
  image,
  position = 'center',
  scrim = 'radial',
  align = 'center',
  minHeight = '100vh',
  tone = 'cool',
  id,
  style,
  contentStyle
}) {
  const scrims = {
    radial: 'var(--scrim-radial)',
    bottom: 'var(--scrim-bottom)',
    none: 'none'
  };
  const grounds = {
    cool: 'var(--bg-page-cool)',
    warm: 'var(--bg-page-warm)',
    ink: 'var(--bg-page)'
  };
  const justify = align === 'center' ? 'center' : align === 'bottom' ? 'flex-end' : 'flex-start';
  return /*#__PURE__*/React.createElement("section", {
    id: id,
    style: {
      position: 'relative',
      minHeight,
      display: 'flex',
      alignItems: justify,
      overflow: 'hidden',
      background: grounds[tone],
      ...style
    }
  }, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: position,
      opacity: 0.95
    }
  }) : null, scrim !== 'none' ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: scrims[scrim],
      pointerEvents: 'none'
    }
  }) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: 'var(--section-y) var(--gutter)',
      ...contentStyle
    }
  }, children));
}
Object.assign(__ds_scope, { SectionShell });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/SectionShell.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
/* Fixed transparent header: monogram left, tracked caps links right, one gold pill. */
function NavBar({
  items = [],
  active,
  onNavigate,
  cta = 'Request access',
  onCta,
  monogramSrc = 'assets/logo/monogram-sh-2x.png',
  solid = false,
  style
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 20,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '20px var(--gutter)',
      background: solid ? 'rgba(3,4,5,0.72)' : 'transparent',
      backdropFilter: solid ? 'blur(var(--blur-nav))' : 'none',
      borderBottom: solid ? '1px solid var(--border-faint)' : '1px solid transparent',
      transition: 'var(--transition-hover)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate(null);
    },
    style: {
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Monogram, {
    size: 38,
    src: monogramSrc
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-8)'
    }
  }, items.map(it => {
    const isActive = active === (it.id || it.label);
    return /*#__PURE__*/React.createElement("a", {
      key: it.id || it.label,
      href: it.href || '#',
      onClick: e => {
        if (onNavigate) {
          e.preventDefault();
          onNavigate(it.id || it.label);
        }
      },
      style: {
        font: 'var(--type-nav)',
        letterSpacing: 'var(--ls-nav)',
        textTransform: 'uppercase',
        textDecoration: 'none',
        color: isActive ? 'var(--text-accent)' : 'var(--cream-200)',
        transition: 'var(--transition-hover)'
      },
      onMouseEnter: e => {
        e.currentTarget.style.color = 'var(--text-accent-bright)';
      },
      onMouseLeave: e => {
        e.currentTarget.style.color = isActive ? 'var(--text-accent)' : 'var(--cream-200)';
      }
    }, it.label);
  }), cta ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "outline",
    size: "sm",
    onClick: onCta,
    style: {
      marginLeft: 'var(--space-4)'
    }
  }, cta) : null));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/AccessScreen.jsx
try { (() => {
const {
  Eyebrow,
  DisplayHeading,
  Button,
  RequestAccessForm,
  Monogram
} = window.SaadHashmaniDesignSystem_ddf044;
function AccessScreen({
  open,
  onOpen
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "contact",
    style: {
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
      background: 'var(--ink-1000)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/imagery/bg-concentric-rings.png",
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--scrim-radial)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: 'var(--section-y) var(--gutter)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    align: "center"
  }, "By request only"), /*#__PURE__*/React.createElement(DisplayHeading, {
    size: "display-1",
    align: "center",
    glow: true
  }, "Access is limited."), open ? /*#__PURE__*/React.createElement(RequestAccessForm, {
    eyebrow: null,
    style: {
      width: '100%',
      maxWidth: 560,
      marginTop: 'var(--space-6)'
    }
  }) : /*#__PURE__*/React.createElement(Button, {
    variant: "gold",
    size: "lg",
    onClick: onOpen,
    style: {
      marginTop: 'var(--space-6)'
    }
  }, "Request access"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 'var(--space-4)',
      marginTop: 'var(--space-14)'
    }
  }, /*#__PURE__*/React.createElement(Monogram, {
    size: 30,
    src: "../../assets/logo/monogram-sh-2x.png"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--weight-regular) var(--label)/1 var(--font-sans)',
      letterSpacing: '0.28em',
      textTransform: 'uppercase',
      color: 'var(--sand-400)'
    }
  }, "saadhashmani.com"))));
}
Object.assign(window, {
  AccessScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/AccessScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HeroScreen.jsx
try { (() => {
const {
  NavBar,
  Eyebrow,
  DisplayHeading,
  ScrollCue,
  SectionShell
} = window.SaadHashmaniDesignSystem_ddf044;
function HeroScreen({
  nav,
  active,
  onNavigate,
  onCta,
  onScroll
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "top",
    style: {
      position: 'relative',
      minHeight: '100vh',
      overflow: 'hidden',
      background: 'var(--bg-page-cool)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/imagery/bg-concentric-rings.png",
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--scrim-radial)'
    }
  }), /*#__PURE__*/React.createElement(NavBar, {
    items: nav,
    active: active,
    onNavigate: onNavigate,
    onCta: onCta,
    monogramSrc: "../../assets/logo/monogram-sh-2x.png"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '96px var(--gutter) 28px'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    align: "center",
    tone: "cream",
    style: {
      letterSpacing: '0.34em',
      color: 'var(--cream-200)'
    }
  }, "This is not a public profile"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 'var(--space-4)',
      marginTop: 'auto'
    }
  }, /*#__PURE__*/React.createElement(DisplayHeading, {
    size: "hero",
    align: "center",
    glow: true,
    style: {
      letterSpacing: '0.01em'
    }
  }, "Saad Hashmani"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-lede)',
      letterSpacing: 'var(--ls-lede)',
      textTransform: 'uppercase',
      color: 'var(--gold-300)',
      textAlign: 'center',
      margin: 0
    }
  }, "Investor \xB7 Operator \xB7 The playbook behind Pakistan's founders")), /*#__PURE__*/React.createElement(ScrollCue, {
    onClick: onScroll,
    style: {
      marginTop: 'var(--space-16)'
    }
  })));
}
Object.assign(window, {
  HeroScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HeroScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/PlaybookScreen.jsx
try { (() => {
const {
  Eyebrow,
  DisplayHeading,
  HairlineRule,
  ArrowLink
} = window.SaadHashmaniDesignSystem_ddf044;
function PlaybookScreen() {
  return /*#__PURE__*/React.createElement("section", {
    id: "about",
    style: {
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
      background: 'var(--bg-page)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/imagery/bg-glass-layers.png",
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--scrim-radial)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: 'var(--section-y) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 720,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "The Playbook"), /*#__PURE__*/React.createElement(DisplayHeading, {
    size: "display-1"
  }, "Everyone sees the wins. Almost no one sees the method."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--weight-regular) var(--body-lg)/var(--lh-body) var(--font-sans)',
      color: 'var(--text-muted)',
      maxWidth: 'var(--measure-narrow)',
      margin: 0
    }
  }, "The playbook is real. It has just never been public."), /*#__PURE__*/React.createElement(HairlineRule, {
    width: "120px",
    style: {
      margin: 'var(--space-4) 0'
    }
  }), /*#__PURE__*/React.createElement(ArrowLink, {
    href: "#investments"
  }, "The record"))));
}
Object.assign(window, {
  PlaybookScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/PlaybookScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ReportsScreen.jsx
try { (() => {
const {
  Eyebrow,
  DisplayHeading,
  QuoteBlock
} = window.SaadHashmaniDesignSystem_ddf044;
function ReportsScreen({
  reports
}) {
  const [i, setI] = React.useState(0);
  const r = reports[i];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
      background: 'var(--ink-1000)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/imagery/bg-sealed-envelope.png",
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--scrim-radial)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: 'var(--section-y) var(--gutter)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 'var(--space-8)',
      minHeight: '78vh',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    align: "center"
  }, "Field reports"), /*#__PURE__*/React.createElement(DisplayHeading, {
    size: "display-1",
    align: "center",
    style: {
      maxWidth: 820
    }
  }, "What insiders say when it's sealed.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(QuoteBlock, {
    attribution: r.from
  }, r.quote), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)'
    }
  }, reports.map((_, n) => /*#__PURE__*/React.createElement("button", {
    key: n,
    onClick: () => setI(n),
    "aria-label": 'Report ' + (n + 1),
    style: {
      width: 26,
      height: 1,
      border: 0,
      padding: 0,
      cursor: 'pointer',
      background: n === i ? 'var(--gold-300)' : 'var(--border-subtle)',
      boxShadow: n === i ? 'var(--glow-xs)' : 'none',
      transition: 'var(--transition-hover)'
    }
  }))))));
}
Object.assign(window, {
  ReportsScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ReportsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/StatsBand.jsx
try { (() => {
const {
  Eyebrow,
  StatBlock
} = window.SaadHashmaniDesignSystem_ddf044;
function StatsBand({
  stats
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      minHeight: '62vh',
      display: 'flex',
      alignItems: 'flex-end',
      overflow: 'hidden',
      background: 'var(--bg-page-warm)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/imagery/bg-light-streaks.png",
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--scrim-bottom)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '0 var(--gutter) var(--space-20)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      gap: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    align: "right"
  }, "Access granted"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'clamp(28px,5vw,64px)',
      flexWrap: 'wrap',
      justifyContent: 'flex-end'
    }
  }, stats.map(s => /*#__PURE__*/React.createElement(StatBlock, {
    key: s.label,
    value: s.value,
    label: s.label
  })))));
}
Object.assign(window, {
  StatsBand
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/StatsBand.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ThoughtsScreen.jsx
try { (() => {
const {
  Eyebrow,
  DisplayHeading,
  ThoughtRow,
  HairlineRule
} = window.SaadHashmaniDesignSystem_ddf044;
function ThoughtsScreen({
  thoughts,
  onOpen
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "thoughts",
    style: {
      background: 'var(--bg-page)',
      padding: 'var(--section-y) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-narrow)',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Thoughts"), /*#__PURE__*/React.createElement(DisplayHeading, {
    size: "display-2"
  }, "Written for the people already in the room.")), /*#__PURE__*/React.createElement("div", null, thoughts.map((t, n) => /*#__PURE__*/React.createElement(ThoughtRow, {
    key: t.title,
    index: n + 1,
    title: t.title,
    meta: t.meta,
    locked: t.locked,
    onClick: () => onOpen && onOpen(t)
  })), /*#__PURE__*/React.createElement(HairlineRule, {
    tone: "subtle"
  }))));
}
Object.assign(window, {
  ThoughtsScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ThoughtsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/VenturesScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Eyebrow,
  DisplayHeading,
  VentureCard,
  ArrowLink
} = window.SaadHashmaniDesignSystem_ddf044;
function VenturesScreen({
  ventures,
  onSelect
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "investments"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      minHeight: '86vh',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
      background: 'var(--bg-page)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/imagery/bg-tile-grid.png",
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--scrim-radial)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: 'var(--section-y) var(--gutter)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    align: "center"
  }, "Ventures"), /*#__PURE__*/React.createElement(DisplayHeading, {
    size: "display-1",
    align: "center",
    glow: true,
    style: {
      maxWidth: 900
    }
  }, "Every folder is a bet that paid."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--weight-regular) var(--body-lg)/1.5 var(--font-sans)',
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: 'var(--text-accent)',
      margin: 0
    }
  }, "Some closed. Some just opening."))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--bg-page)',
      padding: 'var(--space-24) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
      gap: 'var(--space-5)'
    }
  }, ventures.map(v => /*#__PURE__*/React.createElement(VentureCard, _extends({
    key: v.name
  }, v, {
    onClick: () => onSelect && onSelect(v)
  })))), /*#__PURE__*/React.createElement(ArrowLink, {
    href: "#contact",
    style: {
      alignSelf: 'center'
    }
  }, "Request the full record"))));
}
Object.assign(window, {
  VenturesScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/VenturesScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.js
try { (() => {
// Sample content for the recreation. Venture names, dates and essay titles are
// PLACEHOLDERS — the source screenshots show no portfolio detail. Replace with real data.
window.SH_DATA = {
  nav: [{
    id: 'about',
    label: 'About'
  }, {
    id: 'investments',
    label: 'Investments'
  }, {
    id: 'thoughts',
    label: 'Thoughts'
  }, {
    id: 'contact',
    label: 'Contact'
  }],
  stats: [{
    value: '12',
    label: 'Years deploying capital'
  }, {
    value: '40+',
    label: 'Ventures backed'
  }, {
    value: '$85M+',
    label: 'Committed'
  }, {
    value: '3M+',
    label: 'Community'
  }],
  ventures: [{
    name: 'Northline',
    sector: 'Logistics',
    year: '2016',
    thesis: 'Freight brokerage for the routes no ERP had ever mapped.',
    status: 'Exited 2021',
    statusTone: 'closed'
  }, {
    name: 'Meraki Health',
    sector: 'Health',
    year: '2018',
    thesis: 'Clinics staffed by physicians already outside the workforce.',
    status: 'Exited 2023',
    statusTone: 'closed'
  }, {
    name: 'Sukkur Grid',
    sector: 'Energy',
    year: '2020',
    thesis: 'Distributed solar sold the way diesel is already sold.',
    status: 'Open',
    statusTone: 'open'
  }, {
    name: 'Ledgerline',
    sector: 'Fintech',
    year: '2022',
    thesis: 'Working capital priced off invoices, not collateral.',
    status: 'Open',
    statusTone: 'open'
  }, {
    name: 'Qissa',
    sector: 'Media',
    year: '2023',
    thesis: 'Urdu-first audio for an audience that never had a feed.',
    status: 'Open',
    statusTone: 'open'
  }, {
    name: 'Folder 41',
    sector: 'Undisclosed',
    year: '2026',
    thesis: 'Not announced. Two founders, one market, no competition yet.',
    status: 'Open',
    statusTone: 'open'
  }],
  thoughts: [{
    title: 'What a Karachi cap table really costs',
    meta: 'Mar 2026'
  }, {
    title: 'The memo I send before every first cheque',
    meta: 'Members only',
    locked: true
  }, {
    title: 'Twelve years of being early and wrong at the same time',
    meta: 'Jan 2026'
  }, {
    title: 'Why the second hire decides the company',
    meta: 'Nov 2025'
  }, {
    title: 'The diligence question nobody asks',
    meta: 'Members only',
    locked: true
  }],
  reports: [{
    quote: 'He saw it two years before anyone else did.',
    from: 'Founder, portfolio company'
  }, {
    quote: 'The number was never the point of the conversation.',
    from: 'Co-investor, growth fund'
  }, {
    quote: 'He answered on a Sunday, then again at the board.',
    from: 'Founder, seed stage'
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.js", error: String((e && e.message) || e) }); }

__ds_ns.ArrowLink = __ds_scope.ArrowLink;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.DisplayHeading = __ds_scope.DisplayHeading;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.HairlineRule = __ds_scope.HairlineRule;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Monogram = __ds_scope.Monogram;

__ds_ns.ScrollCue = __ds_scope.ScrollCue;

__ds_ns.QuoteBlock = __ds_scope.QuoteBlock;

__ds_ns.StatBlock = __ds_scope.StatBlock;

__ds_ns.StatusTag = __ds_scope.StatusTag;

__ds_ns.ThoughtRow = __ds_scope.ThoughtRow;

__ds_ns.VentureCard = __ds_scope.VentureCard;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.RequestAccessForm = __ds_scope.RequestAccessForm;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.SectionShell = __ds_scope.SectionShell;

__ds_ns.NavBar = __ds_scope.NavBar;

})();
