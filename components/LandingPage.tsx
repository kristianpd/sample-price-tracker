import { Button } from "@shopify/polaris";
import React from "react";

export default function LandingPage() {
  return (
    <>
      Enter your Shop domain <input placeholder="https://myshop.myshopify.com" />
      <br />
      <Button>Install App</Button>
    </>
  );
}
