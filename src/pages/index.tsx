import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Cookies from "js-cookie";

import { useEffect } from "react";
import {
  getLocalizedPathname,
  toSupportedLocale,
} from "@site/src/i18n/localePreference";

export default function Home() {
  const {
    i18n: { currentLocale },
  } = useDocusaurusContext();

  useEffect(() => {
    window.location.href = getLocalizedPathname(
      "/docs/overview",
      toSupportedLocale(currentLocale)
    );

    // get inviter_code from url
    const urlParams = new URLSearchParams(window.location.search);
    const inviter_code = urlParams.get("inviter_code");
    if (inviter_code) {
      Cookies.set("inviter_code", inviter_code, { expires: 1 / 24, path: "/" });
    }
  }, [currentLocale]);

  return (
    <Layout
      title="Get Started Documentation"
      description="Welcome to Glows.ai, a globally distributed cloud for artificial intelligence, and AI for science. Choose your desired GPU and CPU based on your computing demands."
    ></Layout>
  );
}
