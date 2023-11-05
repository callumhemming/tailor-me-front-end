export const useMeasurement = () => {
  const centOptions = Array(200)
    .fill(null)
    .map((_v, i) => ({ value: i + 1, label: String(i) }))
    .reverse();

  const milliOptions = Array(10)
    .fill(null)
    .map((_v, i) => ({ value: i + 1, label: String(i) }))
    .reverse();

  const convertToMill = (cent: number, milli: number) =>
    Number(cent) * 10 + Number(milli);

  return { centOptions, milliOptions, convertToMill };
};
