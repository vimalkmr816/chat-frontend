import { UseFormReturnType } from "@mantine/form";

export type ResetPasswordForm = {
    password: string
    confirmPassword: string
}
export type ResetPasswordProps = {
    form: UseFormReturnType<ResetPasswordForm>
    handleResetPassword: ( values: ResetPasswordForm ) => void
}