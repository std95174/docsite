import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Cookies from "js-cookie";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.location.href = "/docs/overview";

    // get inviter_code from url
    const urlParams = new URLSearchParams(window.location.search);
    const inviter_code = urlParams.get("inviter_code");
    if (inviter_code) {
      Cookies.set("inviter_code", inviter_code, { expires: 1 / 24, path: "/" });
    }
  }, []);

  return (
    <Layout
      title="Get Started Documentation"
      description="Welcome to Glows.ai, a globally distributed cloud for artificial intelligence, and AI for science. Choose your desired GPU and CPU based on your computing demands."
    ></Layout>
  );
}
