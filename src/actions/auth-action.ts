'use server';
import PrismaDB from '@/lib/PrismaDB';
import { SignupUser } from '@/zod/auth';
import { hash } from 'bcrypt';

export const addUser = async (formData: FormData) => {
  try {
    // check zod validation
    const { data, error } = await SignupUser.safeParseAsync(
      Object.fromEntries(formData),
    );
    if (error)
      return {
        error: { status: 403, zodMessage: error.flatten().fieldErrors },
      };

    // destructure data
    const { username, password } = data;

    // check user exist
    const existUser = await PrismaDB.user.findUnique({ where: { username } });
    if (existUser)
      return { error: { status: 403, message: 'user is exist !!!' } };

    // hashed password
    const hashedPassword = await hash(password, 6);

    // add new user
    const user = await PrismaDB.user.create({
      data: { username, password: hashedPassword },
    });
    if (!user)
      return { error: { status: 403, message: 'user not created !!!' } };

    // return user id
    return { id: user.id };
  } catch (error) {
    console.log('error of addUser is:', error);
    return { error: { status: 500, message: 'خطای سرور' } };
  }
};
