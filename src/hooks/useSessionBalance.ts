import { useCallback, useEffect, useState } from "react";

/**
 * Custom React hook to manage 'balance' in sessionStorage
 * Returns [balance, setBalance]
 */
export function useSessionBalance() {
  const [balance, setBalanceState] = useState<number | null>(null);

  // Load balance from sessionStorage on mount
  useEffect(() => {
    const stored = sessionStorage.getItem("balance");
    if (stored !== null) {
      try {
        setBalanceState(JSON.parse(stored));
      } catch {
        setBalanceState(null);
      }
    }
  }, []);

  // Set balance in state and sessionStorage
  const setBalance = useCallback((newBalance: number | null) => {
    setBalanceState(newBalance);
    if (newBalance === null) {
      sessionStorage.removeItem("balance");
    } else {
      sessionStorage.setItem("balance", JSON.stringify(newBalance));
    }
  }, []);

  return [balance, setBalance] as const;
}
