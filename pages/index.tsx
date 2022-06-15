import { useGadget } from "@gadgetinc/react-shopify-app-bridge";
import { Page, Spinner } from "@shopify/polaris";
import Head from "next/head";
import React from "react";
import Home from "../components/Home";
import LandingPage from "../components/LandingPage";
import SubscriptionWrapper from "../components/SubscriptionWrapper";

export default function Authentication() {
  const { loading, isAuthenticated, isEmbedded } = useGadget();

  return (
    <Page fullWidth>
      <>
        <Head>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {loading && <Spinner />}
        {!loading && (
          <>
            {isAuthenticated && (
              <SubscriptionWrapper>
                <Home />
              </SubscriptionWrapper>
            )}
            {!isEmbedded && <LandingPage />}
          </>
        )}
      </>
    </Page>
  );
}
