export const capitalizeEachWord = (phrase: string) => {
  if (phrase === undefined) {
    return phrase;
  }

  return phrase
    .toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};
