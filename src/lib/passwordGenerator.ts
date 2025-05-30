type PasswordOptions = {
  length: number;
  includeUppercase: boolean;
  includeNumbers: boolean;
  includeSpecialCharacters: boolean;
}

export function generatePassword({
  length,
  includeUppercase,
  includeNumbers,
  includeSpecialCharacters
}: PasswordOptions): string {
  const lowercase = 'abcdefghijklmnopqrstuvwxyz';
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';
  const specialCharacters = '!@#$%^&*()_+[]{}|;:,.<>?';

  let chars = lowercase;
  if (includeUppercase) chars += uppercase;
  if(includeNumbers) chars += numbers;
  if (includeSpecialCharacters) chars += specialCharacters;

  let password = '';
  for (let i = 0; i < length; i++) {
    password += chars[Math.floor(Math.random() * chars.length)];
  }
  return password;
}