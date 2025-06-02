type PasswordOptions = {
  length: number;
  includeUppercase: boolean;
  includeLowercase: boolean;
  includeNumbers: boolean;
  includeSpecialCharacters: boolean;
}

export function generatePassword({
  length,
  includeUppercase,
  includeLowercase,
  includeNumbers,
  includeSpecialCharacters
}: PasswordOptions): string {
  const lowercase = 'abcdefghijklmnopqrstuvwxyz';
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';
  const specialCharacters = '!@#$%^&*()_+[]{}|;:,.<>?';

  let chars = '';
  if (includeLowercase) chars += lowercase;
  if (includeUppercase) chars += uppercase;
  if(includeNumbers) chars += numbers;
  if (includeSpecialCharacters) chars += specialCharacters;

  let password = '';
  for (let i = 0; i < length; i++) {
    password += chars[Math.floor(Math.random() * chars.length)];
  }
  return password;
}