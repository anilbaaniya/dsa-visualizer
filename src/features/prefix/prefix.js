function priority(ch) {
  if (ch == "^") return 3;
  if (ch == "*" || ch == "/") return 2;
  if (ch == "+" || ch == "-") return 1;
  return 0;
}

export function infixToPrefix(originalInfix) {
  //   let originalInfix = "(A+B)*(C-D)/E+F^G";
  let prefix = "";
  let infixArr = originalInfix.split("").reverse();
  for (let i = 0; i < infixArr.length; i++) {
    if (infixArr[i] == "(") {
      infixArr[i] = ")";
    } else if (infixArr[i] == ")") {
      infixArr[i] = "(";
    }
  }
  let infix = infixArr.join("");

  let stack = [];
  for (let i = 0; i < infix.length; i++) {
    let ch = infix[i];
    if (/^[a-zA-Z0-9]$/.test(ch)) {
      prefix += ch;
    } else if (ch == "(") {
      stack.push(ch);
    } else if (ch == ")") {
      while (stack.length > 0 && stack[stack.length - 1] != "(") {
        prefix += stack[stack.length - 1];
        stack.pop();
      }
      stack.pop();
    } else {
      while (
        stack.length > 0 &&
        stack[stack.length - 1] != "(" &&
        priority(ch) < priority(stack[stack.length - 1])
      ) {
        prefix += stack[stack.length - 1];
        stack.pop();
      }
      stack.push(ch);
    }
  }

  while (stack.length > 0) {
    prefix += stack[stack.length - 1];
    stack.pop();
  }

  let finalPrefix = prefix.split("").reverse().join("");
  //   console.log(finalPrefix);
  return finalPrefix;
}
