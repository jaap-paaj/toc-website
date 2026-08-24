/**
 * The canonical origin of the site.
 *
 * `www` is the host that serves; the apex redirects to it. That distinction is
 * the whole reason this constant exists in one place: every canonical, hreflang,
 * og:url and sitemap entry has to name the host that answers, not the one that
 * forwards. A canonical pointing at a redirect tells a search engine the real
 * version lives somewhere that serves nothing, and neither address gets indexed.
 *
 * Seventeen files used to declare this separately, all naming the apex. Import
 * it from here instead — `npm run audit:canonical-host` fails on a hardcoded
 * origin anywhere else, which is what stops the eighteenth copy.
 */
export const SITE_URL = "https://www.theonlyconstant.nl";

/** An absolute URL for a path below the origin. `""` and `"/"` give the root. */
export function siteUrl(path = ""): string {
    if (path === "" || path === "/") return SITE_URL;
    return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
