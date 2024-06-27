export function isValidEmail(value: string) {
  // Validar o formato do email
  return /\S+@\S+\.\S+/.test(value);
}
