import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Crendentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials){
        //basic validation
        if(credentials.emial === "text@example.com" && credentials.password === "password"){
            return { id: '1', name :"Test User", email : "test@example.com"};
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt"
  },
  secret: "jfljsdiowejfklsjfeojakfopjop" ,//Use process.env.NEXTAUTH_SECRET in production
});
