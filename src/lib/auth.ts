import { NextAuthOptions } from "next-auth";
import { UpstashRedisAdapter } from "@next-auth/upstash-redis-adapter";
import { db } from "./db";
import GoogleProvider from "next-auth/providers/google";


function getGoogleCredentials() {
    const clientId = process.env.GOOGLE_CLIENT_ID
    const clientSecret = process.env.GOOGLE_CLIENT_SECRET

    if(!clientId || !clientSecret){
        
    }
}

export const authOptions: NextAuthOptions = {
    adapter: UpstashRedisAdapter(db),
    session : {
        strategy: 'jwt'
    },
    pages : {
        signIn: '/login'
    },
    providers: {
        GoogleProvider({
            clientId: ""
        })
    }
}