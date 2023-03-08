export const textValidation = (value:string) => {
    const regMatch = /^[a-zA-Z]*$/.test(value);
    return regMatch
}
