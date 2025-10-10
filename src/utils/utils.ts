import { decode } from "next-auth/jwt";
import { cookies } from "next/headers";

export async function getMyUserToken(){
    const cookie = await cookies();
    const seesionToken = cookie.get('next-auth.session-token')?.value;
    const decodedToken = await decode({token:seesionToken, secret: process.env.NEXTAUTH_SECRET ||''})
    console.log('decodedToken',decodedToken)
    return decodedToken?.credentialsToken;
}