const KEY_NAME = "balance";

export const getBalance = (): number => {
  const stored = sessionStorage.getItem(KEY_NAME);
  if (stored !== null) {
    try {
      return JSON.parse(stored);
    } catch {
      return 0;
    }
  }
  return 0;
};

export const incrementBalance = (amount: number): number | null => {
  const current = getBalance() ?? 0;
  const newBalance = current + amount;
  sessionStorage.setItem(KEY_NAME, JSON.stringify(newBalance));
  return newBalance;
};

export const resetBalance = (): void => {
  sessionStorage.removeItem(KEY_NAME);
};
