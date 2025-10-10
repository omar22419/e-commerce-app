import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { jwtDecode } from "jwt-decode";

export const nextAuthConfig: NextAuthOptions = {
  providers: [
    Credentials({
      name: "Fresh Cart",
      authorize: async function (credentials, req) {
        console.log("credentials", credentials);
        const res = await fetch(
          `https://ecommerce.routemisr.com/api/v1/auth/signin`,
          {
            method: "post",
            body: JSON.stringify(credentials),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const finalResp = await res.json();
        console.log("finalResp", finalResp);
        if (finalResp.message == "success") {
          const decodedObject: { id: string } = jwtDecode(finalResp.token);
          console.log(decodedObject)
          return {
            id: decodedObject.id,
            name: finalResp.user.name,
            email: finalResp.user.email,
            credentialsToken: finalResp.token,
          };
        }
        return null;
      },
      credentials: {
        email: {},
        password: {},
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    jwt(params) {
      if (params.user) {
        params.token.credentialsToken = params.user.credentialsToken;
        params.token.userId = params.user.id;
      }
      return params.token;
    },

    session(params) {
      params.session.user.id = params.token.userId;
      return params.session;
    },
  },

  session:{
    maxAge:60*60*60*24*30
  }
};
