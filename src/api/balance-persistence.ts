export const getBalance = (): number => {
  const stored = sessionStorage.getItem("balance");
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
  sessionStorage.setItem("balance", JSON.stringify(newBalance));
  return newBalance;
};

export const resetBalance = (): void => {
  sessionStorage.removeItem("balance");
};
