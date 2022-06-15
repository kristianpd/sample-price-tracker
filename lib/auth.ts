import Crypto from "crypto-js";

export const generateCodeVerifier = () => {
  const bytes = Crypto.lib.WordArray.random(32);
  return bytes.toString(Crypto.enc.Hex);
};

export const generateCodeChallenge = (verifier: string) => Crypto.SHA256(verifier).toString(Crypto.enc.Base64url);

export const getGadgetAccessToken = async (appUrl: string, verifier: string, authCode: string) => {
  const response = await fetch(`${appUrl}oauth/token`, {
    method: "POST",
    mode: "cors",
    headers: new Headers({ "content-type": "application/json" }),
    body: JSON.stringify({
      codeVerifier: verifier,
      authorizationCode: authCode,
    }),
  });

  const data = await response.json();

  return data.accessToken as string;
};
