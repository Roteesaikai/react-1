import { parseISO } from "date-fns";
import { useEffect, useState } from "react";

export default function useLocalStorage<T>(key: string, initalValue: T) {
  const [storedValue, setStorageValue] = useState<T>(() => {
    try {
      const item = localStorage.getItem(key);
      if (item == null) return initalValue;
      return JSON.parse(item, dateReviver);
    } catch {
      return initalValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storedValue));
  }, [storedValue, key]);

  return [storedValue, setStorageValue] as const;
}

function dateReviver(_keyL: string, value: unknown) {
  if (typeof value === "string" && /^\d{4}-\d{2}-\d{2}$/.test(value)) {
    return parseISO(value);
  }
  return value;
}
