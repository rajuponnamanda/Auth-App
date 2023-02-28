import  * as msal from 'msal'

export const msalConfig ={
    auth :{
        clientId:'2b71bf12-c3de-4bec-8a21-d768b9add662',
        authority:'https://login.microsoftonline.com/{8f6bd982-92c3-4de0-985d-0e287c55e379}',
        redirectUri:  ' http://localhost:2323',
    },
cache : {
    cacheLocation:'localStorage',
}
}

export const graphScopes ={scopes:["openid", "profile", "email","User.Read"]}
export const myMSALObj =new msal.UserAgentApplication(msalConfig)