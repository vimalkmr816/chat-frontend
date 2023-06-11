export type VerifyOtpProps ={
    pin: string
    setPin: React.Dispatch<React.SetStateAction<string>>
    handleVerifyPin: ( pin: string ) => void
}