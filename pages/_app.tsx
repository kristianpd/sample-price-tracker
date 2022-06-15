import { AppType, Provider as GadgetProvider } from "@gadgetinc/react-shopify-app-bridge";
import { AppProvider } from "@shopify/polaris";
import "@shopify/polaris/build/esm/styles.css";
import enTranslations from "@shopify/polaris/locales/en.json";
import "modern-css-reset";
import type { AppProps } from "next/app";
import Head from "next/head";
import React from "react";
import { api, apiKey } from "../lib/api";

function GadgetApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider i18n={enTranslations}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GadgetProvider type={AppType.Embedded} shopifyApiKey={apiKey} api={api} reauth>
        <Component {...pageProps} />
      </GadgetProvider>
    </AppProvider>
  );
}
export default GadgetApp;
