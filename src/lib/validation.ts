import {z} from "zod";


const requiredString = z.string().min(1, "This field is required");

export const signUpSchema = z.object({
    email: requiredString.email("Invalid email address"),
    username: requiredString.regex(/^[a-zA-Z0-9_]+$/, "Username can only contain letters, numbers, and underscores"),
    password: requiredString.min(8, "Password must be at least 8 characters long"),
})

export type SignUpValues=z.infer<typeof signUpSchema>;


export const loginSchema = z.object({
    username: requiredString.regex(/^[a-zA-Z0-9_]+$/, "Username can only contain letters, numbers, and underscores"),
    password: requiredString.min(8, "Password must be at least 8 characters long"),
})

export type LoginValues = z.infer<typeof loginSchema>;