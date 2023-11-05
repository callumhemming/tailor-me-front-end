export const useMeasurement = () => {
  const centOptions = Array(200)
    .fill(null)
    .map((_v, i) => ({ value: i + 1, label: String(i) }))
    .reverse();

  const milliOptions = Array(10)
    .fill(null)
    .map((_v, i) => ({ value: i + 1, label: String(i) }))
    .reverse();

  const convertToMill = (cent: number, milli: number) => cent * 10 + milli;

  return { centOptions, milliOptions, convertToMill };
};
