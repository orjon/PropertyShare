import GoogleProvider from 'next-auth/providers/google'

import connectDB from '@/config/database'
import User from '@/models/User'

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        // to prevent auto-use of last google user.
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code'
        }
      }
    })
  ],
  callbacks: {
    //invoked on successful authentication.
    async signIn({ profile }) {
      // connect to DB
      await connectDB()
      // check if user exists
      const userExists = await User.findOne({ email: profile.email })
      // if not, create user
      if (!userExists) {
        const username = profile.name.slice(0, 20)
        await User.create({
          email: profile.email,
          username,
          image: profile.picture
        })
      }
      // return true to allow sign in
      return true
    },
    // session calback function that modifies the session object
    async session({ session }) {
      // get user from DB
      const user = await User.findOne({ email: session.user.email })
      // assign user Id from session
      session.user.id = user._id.toString()
      // return the session object
      return session
    }
  }
}
