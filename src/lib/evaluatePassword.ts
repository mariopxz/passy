export const evaluatePassword = (password: string): { score: number; label: 'Weak' | 'Medium' | 'Strong' } => {
  const hasUppercase = /[A-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSymbol = /[^A-Za-z0-9]/.test(password);
  const isLongEnough = password.length >= 12;

  const complexity = [hasUppercase, hasNumber, hasSymbol].filter(Boolean).length;

  if (!isLongEnough) {
    return { score: 33, label: 'Weak' };
  }

  if (complexity < 3) {
    return { score: 66, label: 'Medium' };
  }

  return { score: 100, label: 'Strong' };
};