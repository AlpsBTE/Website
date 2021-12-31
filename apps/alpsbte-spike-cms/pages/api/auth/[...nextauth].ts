import DiscordProvider from "next-auth/providers/discord";
import NextAuth from "next-auth"

export default NextAuth({
    providers: [
        DiscordProvider({
          clientId: process.env.DISCORD_CLIENT_ID,
          clientSecret: process.env.DISCORD_CLIENT_SECRET
        })
      ]
});

