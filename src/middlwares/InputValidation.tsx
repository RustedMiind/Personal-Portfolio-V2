export function isValidInput({ input, type }: ArgumentType): boolean {
  switch (type) {
    case "EMAIL":
      return isValidEmail(input);

    case "NAME":
      return isValidName(input);

    case "PHONE":
      return isValidPhone(input);

    case "HAS_VALUE":
      return !!input;

    default:
      throw Error("Invalid input type in validator");
  }
}

function isValidEmail(input: string): boolean {
  if (input.length < 8) return false;
  if (!input.includes("@")) return false;
  if (!input.includes(".")) return false;
  if (input.indexOf("@") > input.indexOf(".")) return false;

  return true;
}
function isValidName(input: string): boolean {
  if (input.length < 5) return false;

  return true;
}
function isValidPhone(input: string): boolean {
  if (input.length < 10 || input.length > 15) return false;
  for (let i = 0; i < input.length; i++) {
    if (input[i] !== parseInt(input[i]).toString()) {
      return false;
    }
  }

  return true;
}

type ArgumentType = {
  input: string;
  type: "PHONE" | "NAME" | "EMAIL" | "HAS_VALUE";
};
