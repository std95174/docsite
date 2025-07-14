import React from "react";
import Footer from "@theme-original/Footer";
import type FooterType from "@theme/Footer";
import type { WrapperProps } from "@docusaurus/types";
import SelfFooter from "@site/src/components/Footer";

type Props = WrapperProps<typeof FooterType>;

export default function FooterWrapper(props: Props) {
  return (
    <>
      <SelfFooter />
      <Footer {...props} />
    </>
  );
}
