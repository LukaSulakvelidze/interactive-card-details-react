const format = (input: string) => {
  return input.replace(/\D/g, "").replace(/\d{4}(?=.)/g, "$& ");
};

export const numberReplacer = (regex: string, input: string) => {
  const formattedCardNumber = format(input).replace(/\s+/g, "");
  let replacedString = regex.trim();
  let j = 0;
  for (let i = 0; i < replacedString.length; i++) {
    if (replacedString[i] === "0") {
      if (j < formattedCardNumber.length) {
        replacedString =
          replacedString.substring(0, i) +
          formattedCardNumber[j] +
          replacedString.substring(i + 1);
        j++;
      } else {
        break;
      }
    }
  }
  return replacedString;
};

export default format;
