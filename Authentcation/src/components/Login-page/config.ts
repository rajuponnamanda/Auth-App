import { PublicClientApplication } from "@azure/msal-browser";

export const msalConfig = {
  auth: {
    clientId: "2b71bf12-c3de-4bec-8a21-d768b9add662",
    authority:
      "https://login.microsoftonline.com/8f6bd982-92c3-4de0-985d-0e287c55e379",
    redirectUri: window.location.origin,
    postLogoutUri: window.location.origin,
  },
  cache: {
    cacheLocation: "sessionStorage",
  },
};

export const graphScopes = {
  scopes: ["openid", "profile", "email", "User.Read"],
};
export const myMSALObj = new PublicClientApplication(msalConfig);
