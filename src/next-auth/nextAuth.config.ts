import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

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
          const { role, ...rest } = finalResp.user;
          return rest;
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
};
