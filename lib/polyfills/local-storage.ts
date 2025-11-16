type StorageLike = {
  clear(): void;
  getItem(key: string): string | null;
  key(index: number): string | null;
  removeItem(key: string): void;
  setItem(key: string, value: string): void;
  readonly length: number;
};

if (typeof window === "undefined") {
  const globalScope = globalThis as typeof globalThis & {
    localStorage?: Partial<StorageLike>;
  };

  const existing = globalScope.localStorage;
  const hasValidLocalStorage =
    typeof existing !== "undefined" &&
    typeof existing.getItem === "function" &&
    typeof existing.setItem === "function" &&
    typeof existing.removeItem === "function";

  if (!hasValidLocalStorage) {
    const store = new Map<string, string>();

    const storage: StorageLike = {
      get length() {
        return store.size;
      },
      clear() {
        store.clear();
      },
      getItem(key) {
        const normalized = String(key);
        return store.has(normalized) ? store.get(normalized)! : null;
      },
      key(index) {
        return Array.from(store.keys())[index] ?? null;
      },
      removeItem(key) {
        store.delete(String(key));
      },
      setItem(key, value) {
        store.set(String(key), String(value));
      },
    };

    Object.defineProperty(globalScope, "localStorage", {
      value: storage,
      configurable: true,
      writable: true,
    });
  }
}

