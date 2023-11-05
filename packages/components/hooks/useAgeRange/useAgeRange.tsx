export const useAgeRange = (value: number = 100) =>
  Array(value)
    .fill(null)
    .map((V, i) => i + 1)
    .reverse()
    .map((v) => ({ value: v, label: String(v) }));
