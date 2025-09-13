export const isEmailValid = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export const isPhoneNumberValid = (phoneNumber: string): boolean => {
  const phoneRegex = /^\d{10}$/
  return phoneRegex.test(phoneNumber)
}
