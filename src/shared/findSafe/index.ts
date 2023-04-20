export const findSafe = <T>(
  array: T[],
  predicate: (value: T, index: number, obj: T[]) => boolean,
  errorMessage = 'Item does not exist',
) => {
  const found = array.find(predicate);
  if (!found) throw new Error(errorMessage);
  return found;
};
