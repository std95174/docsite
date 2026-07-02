import {
  getExplicitLocaleFromPathname,
  getPreferredLocaleRedirectPathname,
  setStoredLocale,
} from "./localePreference";

function redirectToPreferredLocale(): void {
  if (typeof window === "undefined") {
    return;
  }

  const { pathname, search, hash } = window.location;
  const explicitLocale = getExplicitLocaleFromPathname(pathname);

  if (explicitLocale) {
    setStoredLocale(explicitLocale);
  }

  const redirectPathname = getPreferredLocaleRedirectPathname(pathname);

  if (!redirectPathname || redirectPathname === pathname) {
    return;
  }

  window.location.replace(`${redirectPathname}${search}${hash}`);
}

redirectToPreferredLocale();
