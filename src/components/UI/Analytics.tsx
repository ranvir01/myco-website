"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

/**
 * Consent-gated Google Analytics 4 loader.
 *
 * Renders nothing unless NEXT_PUBLIC_GA_ID is set at build time AND the
 * visitor has accepted cookies via CookieConsent (localStorage
 * "cookieConsent" === "true"). Listens for the `cookieConsentChanged`
 * event so accepting the banner starts analytics without a reload.
 */
export default function Analytics() {
  const [consented, setConsented] = useState(false);

  useEffect(() => {
    const check = () => {
      try {
        setConsented(localStorage.getItem("cookieConsent") === "true");
      } catch {
        // Storage unavailable (private mode etc.) — leave analytics off.
      }
    };
    check();
    window.addEventListener("cookieConsentChanged", check);
    return () => window.removeEventListener("cookieConsentChanged", check);
  }, []);

  if (!GA_ID || !consented) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { anonymize_ip: true });
        `}
      </Script>
    </>
  );
}
