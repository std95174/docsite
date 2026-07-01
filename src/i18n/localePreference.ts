export const DEFAULT_LOCALE = "en";
export const SUPPORTED_LOCALES = ["en", "zh-TW", "ja"] as const;
export const EXPLICIT_PATH_LOCALES = ["zh-TW", "ja"] as const;
export const LOCALE_STORAGE_KEY = "glowsai.sdkdoc.locale";

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

export function getStoredLocale(): SupportedLocale | null {
  try {
    const locale = window.localStorage.getItem(LOCALE_STORAGE_KEY);
    return locale && isSupportedLocale(locale) ? locale : null;
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

export function getBrowserLocale(): SupportedLocale {
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

  return DEFAULT_LOCALE;
}

export function getPreferredLocale(): SupportedLocale {
  return getStoredLocale() ?? getBrowserLocale();
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
  if (getExplicitLocaleFromPathname(pathname)) {
    return null;
  }

  const preferredLocale = getPreferredLocale();

  if (preferredLocale === DEFAULT_LOCALE) {
    return null;
  }

  return getLocalizedPathname(pathname, preferredLocale);
}
