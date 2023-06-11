
import { UseFormReturnType } from "@mantine/form";

export type SignupFormType ={
    firstName: string
    lastName: string
    email: string
    password: string
}

export type SignUpProps = {
    form: UseFormReturnType<SignupFormType>
    handleSignup: ( values: SignupFormType ) => void
}