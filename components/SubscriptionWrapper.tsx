import { ShopSubscription } from "@gadget-client/price-tracker-gadget";
import { useAction, useFindMany } from "@gadgetinc/react";
import { CalloutCard, Layout, Page, Spinner } from "@shopify/polaris";
import React, { useContext } from "react";
import { api } from "../lib/api";

export const SubscriptionContext = React.createContext<ShopSubscription>({} as any);
export const useSubscription = () => useContext(SubscriptionContext);

export default function SubscriptionWrapper(props: { children: JSX.Element }) {
  // TODO: this is not enforcing tenancy right now, but will be shortly
  // if you need to go live before the tenancy is in, we can solve this with a Custom Route
  const [{ fetching: loadingSubscriptions, data: subscriptions, error: err }] = useFindMany(api.shopSubscription, { first: 1 });
  const activeSubscription = subscriptions?.[0];

  // this enforces tenancy, see utils/setCurrentShop where we make sure to override any parameter they pass in!
  const [{ fetching: signingUp, error, data: newSubscription }, createComment] = useAction(api.shopSubscription.create);

  const subscribe = async (plan: "Free" | "Basic" | "Pro") => {
    // TODO: couldn't figure out how to disable action buttons when this is true
    if (signingUp) return;

    await createComment({ shopSubscription: { plan } });
  };

  return loadingSubscriptions ? (
    <Page>
      <Spinner />
    </Page>
  ) : activeSubscription ? (
    <SubscriptionContext.Provider value={activeSubscription as any}>{props.children}</SubscriptionContext.Provider>
  ) : error ? (
    <>There was a problem subscribing, please contact support!</>
  ) : newSubscription ? (
    <Page>
      <Spinner />
    </Page>
  ) : (
    <Page title="Pick your plan" fullWidth>
      <Layout>
        <Layout.Section oneThird>
          <CalloutCard
            title="Free"
            primaryAction={{
              content: "Free",
              onAction: async () => await subscribe("Free"),
            }}
            illustration="plan/free.png"
          >
            <p>Just an entree</p>
          </CalloutCard>
        </Layout.Section>
        <Layout.Section oneThird>
          <CalloutCard
            title="Basic"
            primaryAction={{
              content: "Basic",
              onAction: async () => await subscribe("Basic"),
            }}
            illustration="plan/basic.png"
          >
            <p>Desert with dinner</p>
          </CalloutCard>
        </Layout.Section>
        <Layout.Section oneThird>
          <CalloutCard
            title="Pro"
            primaryAction={{
              content: "Pro",
              onAction: async () => await subscribe("Pro"),
            }}
            illustration="plan/pro.png"
          >
            <p>Seven course meal</p>
          </CalloutCard>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
