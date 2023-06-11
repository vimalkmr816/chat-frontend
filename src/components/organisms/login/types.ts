import { UseFormReturnType } from "@mantine/form";

export type LoginFormType ={
    email: string
    password: string
}

export type LoginProps = {
    form: UseFormReturnType<LoginFormType>
    handleLogin: ( values: LoginFormType ) => void
}