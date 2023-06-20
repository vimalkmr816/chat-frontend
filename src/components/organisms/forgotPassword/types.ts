import { UseFormReturnType } from "@mantine/form";

export type ForgotPasswordForm = {
    email: string
}
export type ForgotPasswordProps = {

    form: UseFormReturnType<ForgotPasswordForm>
    handleForgotPassword: ( values: ForgotPasswordForm ) => void
}