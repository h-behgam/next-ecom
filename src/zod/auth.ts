import { string, z } from "zod";

export const SignupUser = z.object({
    name: string({required_error: 'نام باید وارد شود'}).min(2).trim(),
    username: string({required_error: 'نام کاربری باید وارد شود'}).min(4).trim(),
    password: string().min(2).trim(),
    confirmPassword: string().min(2).trim(),
}).superRefine((val, ctx) => {
    if (val.password !== val.confirmPassword) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: 'رمزعبور و تکرار آن با هم برابر نیستند!!!',
            path: ['confirm']
        })
    }
})

export const SigninUser = z.object({
    username: string({required_error: 'نام کاربری باید وارد شود'}).min(4,'نام کاربری باید حداقل 4 حرف باشد.').trim(),
    password: string().min(2).trim(),
})