The "box" is the browser's default focus outline showing on the in-page practice links (IT Services, Technology Consulting, etc.) after they're clicked. My earlier fix only removed outlines from the top nav Links, not from these anchor tags.

**Fix**

In `src/routes/services.tsx`, on the `<a href={`#${p.id}`}>` in the sticky practices list, add `outline-none focus:outline-none focus-visible:outline-none` to the className so no focus ring appears after click.

Also do a quick sweep for other in-page `<a href="#...">` / hash `<Link>` uses across route files (services, index, about, footer) and apply the same class to keep click behavior smooth site-wide. No other visual or behavior changes.

Result: clicking those menu items smoothly scrolls to the section without any rectangular outline.