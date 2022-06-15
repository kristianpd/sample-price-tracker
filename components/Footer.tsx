import React from "react";
import { useSubscription } from "../components/SubscriptionWrapper";

export default function Footer() {
  const subscription = useSubscription();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
      }}
    >
      {subscription.plan}
    </div>
  );
}
