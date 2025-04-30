import {z} from "zod"

export const schema = z.object({
    name: z.string().min(1, 'Name is required').max(20, 'Name can have 20 characters max'),
    lastName: z.string().min(1, 'Last name is required').max(20, 'Last name can have 20 characters max'),
    email: z.string().email('Invalid email').min(1, 'Email is required').max(55, 'Email can have 55 characters max'),
    username: z.string().min(1, 'username is required').max(12, 'Username can have 12 characters max'),
    password: z.string().min(6, 'Password need to have at least 6 characters').max(12, 'Password can have 12 characters max'),
});

export type FormValues = z.infer<typeof schema>;