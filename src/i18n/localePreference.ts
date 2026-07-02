import Cookies from "js-cookie";

export const DEFAULT_LOCALE = "en";
export const SUPPORTED_LOCALES = ["en", "zh-TW", "ja"] as const;
export const EXPLICIT_PATH_LOCALES = SUPPORTED_LOCALES;
export const LOCALE_STORAGE_KEY = "glowsai.sdkdoc.locale";
export const LOCALE_COOKIE_KEY = LOCALE_STORAGE_KEY;

export type SupportedLocale = (typeof SUPPORTED_LOCALES)[number];

export function isSupportedLocale(locale: string): locale is SupportedLocale {
  return SUPPORTED_LOCALES.includes(locale as SupportedLocale);
}

export function toSupportedLocale(locale: string): SupportedLocale {
  return isSupportedLocale(locale) ? locale : DEFAULT_LOCALE;
}

export function getExplicitLocaleFromPathname(
  pathname: string
): SupportedLocale | null {
  const firstSegment = pathname.split("/").filter(Boolean)[0];

  if (
    firstSegment &&
    EXPLICIT_PATH_LOCALES.includes(
      firstSegment as (typeof EXPLICIT_PATH_LOCALES)[number]
    )
  ) {
    return firstSegment as SupportedLocale;
  }

  return null;
}

export function getPathnameWithoutExplicitLocale(
  pathname: string,
  locale: SupportedLocale
): string {
  const localePrefix = `/${locale}`;

  if (pathname === localePrefix || pathname === `${localePrefix}/`) {
    return "/";
  }

  return pathname.startsWith(`${localePrefix}/`)
    ? pathname.slice(localePrefix.length)
    : pathname;
}

export function getStoredLocale(): SupportedLocale | null {
  try {
    const locale = window.localStorage.getItem(LOCALE_STORAGE_KEY);
    if (locale && isSupportedLocale(locale)) {
      return locale;
    }
  } catch {
    // Ignore browsers where localStorage is unavailable.
  }

  try {
    const cookieLocale = Cookies.get(LOCALE_COOKIE_KEY);
    return cookieLocale && isSupportedLocale(cookieLocale) ? cookieLocale : null;
  } catch {
    return null;
  }
}

export function setStoredLocale(locale: SupportedLocale): void {
  try {
    window.localStorage.setItem(LOCALE_STORAGE_KEY, locale);
  } catch {
    // Ignore browsers where localStorage is unavailable.
  }

  try {
    Cookies.set(LOCALE_COOKIE_KEY, locale, {
      expires: 365,
      path: "/",
      sameSite: "Lax",
    });
  } catch {
    // Ignore browsers where cookies are unavailable.
  }
}

function normalizeBrowserLocale(locale: string): SupportedLocale | null {
  const normalizedLocale = locale.toLowerCase();

  if (normalizedLocale.startsWith("ja")) {
    return "ja";
  }

  if (
    normalizedLocale.startsWith("zh") ||
    normalizedLocale.startsWith("tw")
  ) {
    return "zh-TW";
  }

  if (normalizedLocale.startsWith("en")) {
    return "en";
  }

  return null;
}

export function getBrowserLocale(): SupportedLocale | null {
  if (typeof navigator === "undefined") {
    return null;
  }

  const languages =
    navigator.languages && navigator.languages.length > 0
      ? navigator.languages
      : [navigator.language];

  for (const language of languages) {
    const locale = normalizeBrowserLocale(language);

    if (locale) {
      return locale;
    }
  }

  return null;
}

export function getPreferredLocale(pathname?: string): SupportedLocale {
  const explicitPathLocale =
    pathname === undefined ? null : getExplicitLocaleFromPathname(pathname);

  return (
    explicitPathLocale ??
    getStoredLocale() ??
    getBrowserLocale() ??
    DEFAULT_LOCALE
  );
}

export function getLocalizedPathname(
  pathname: string,
  locale: SupportedLocale
): string {
  if (locale === DEFAULT_LOCALE) {
    return pathname;
  }

  return pathname === "/" ? `/${locale}/` : `/${locale}${pathname}`;
}

export function getPreferredLocaleRedirectPathname(
  pathname: string
): string | null {
  const explicitLocale = getExplicitLocaleFromPathname(pathname);

  if (explicitLocale === DEFAULT_LOCALE) {
    return getPathnameWithoutExplicitLocale(pathname, explicitLocale);
  }

  if (explicitLocale) {
    return null;
  }

  const preferredLocale = getPreferredLocale(pathname);

  if (preferredLocale === DEFAULT_LOCALE) {
    return null;
  }

  return getLocalizedPathname(pathname, preferredLocale);
}
