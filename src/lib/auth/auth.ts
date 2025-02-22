import NextAuth, { User } from 'next-auth';
import authConfig from './auth.config';
import { PrismaAdapter } from '@auth/prisma-adapter';
import PrismaDB from '../PrismaDB';
import Credentials from 'next-auth/providers/credentials';
import { compare } from 'bcrypt';

export const { auth, handlers, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(PrismaDB),
  secret: process.env.AUTH_SECRET,
  logger: { error: () => {} },
  session: { strategy: 'jwt' },
  pages: {
    signIn: '/signin',
  },
  ...authConfig,
  providers: [
    Credentials({
      credentials: {
        username: {
          label: 'username',
          type: 'string',
        },
        password: {
          label: 'password',
          type: 'string',
        },
      },
      authorize: async (credentials): Promise<User | null> => {
        try {
          const { username, password } = credentials;

          const user = await PrismaDB.user.findUnique({
            where: { username: username as string },
          });

          if (!user) return null;
          // throw new Error('Invalid credentials1.');

          const isPasswordValid = await compare(
            password as string,
            user?.password as string,
          );

          if (!isPasswordValid) return null;
          // throw new Error('Invalid credentials2.');
          return user;
        } catch (error) {
          console.log('auth error is: ', error);
          return null;
        }
      },
    }),
  ],
});
