import { getPreferredLocaleRedirectPathname } from "./localePreference";

function redirectToPreferredLocale(): void {
  if (typeof window === "undefined") {
    return;
  }

  const { pathname, search, hash } = window.location;
  const redirectPathname = getPreferredLocaleRedirectPathname(pathname);

  if (!redirectPathname || redirectPathname === pathname) {
    return;
  }

  window.location.replace(`${redirectPathname}${search}${hash}`);
}

redirectToPreferredLocale();
