export const pascalToSnakeCase = (string = "") => {
  let newString = "";

  for (let i = 0; i < string.length; i++) {
    if (string.charAt(i - 1) === " " && string.charAt(i) !== " ") {
      newString += `_${string.charAt(i).toLocaleLowerCase()}`;
    } else if (string.charAt(i) !== " ") {
      newString += string.charAt(i).toLocaleLowerCase();
    }
  }

  return newString;
};
