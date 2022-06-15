import { BrowserSessionStorageType, Client } from "@gadget-client/price-tracker-gadget";

export const endpoint = new URL("api/graphql", process.env["NEXT_PUBLIC_GADGET_APP_URL"] || "").href;
export const apiKey = process.env["NEXT_PUBLIC_API_KEY"] || "not-a-key";

export const api = new Client({
  endpoint,
  authenticationMode: {
    browserSession: {
      storageType: BrowserSessionStorageType.Temporary,
    },
  },
});
