export const passwordValidation = (password:string) => {
    const regex =/^(?=^.{6,}$)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9]).*/;
    return regex.test(password)
}