function priority(op) {
  if (op == "^") {
    return 3;
  }
  if (op == "*" || op == "/") {
    return 2;
  }
  if (op == "+" || op == "-") {
    return 1;
  }
  return 0;
}

export function infixToPostfix(infix) {
  let stack = [];
  let postfix = "";
  for (let i = 0; i < infix.length; i++) {
    let ch = infix[i];
    if (/^[a-zA-Z0-9]$/.test(ch)) {
      postfix += ch;
    } else if (ch == "(") {
      stack.push(ch);
    } else if (ch == ")") {
      while (stack.length != 0 && stack[stack.length - 1] != "(") {
        postfix += stack[stack.length - 1];
        stack.pop();
      }
      stack.pop();
    } else {
      while (
        stack.length != 0 &&
        priority(ch) <= priority(stack[stack.length - 1]) &&
        stack[stack.length - 1] != "("
      ) {
        postfix += stack[stack.length - 1];
        stack.pop();
      }
      stack.push(ch);
    }
  }
  while (stack.length != 0) {
    postfix += stack[stack.length - 1];
    stack.pop();
  }
  console.log("Postfix Expression = ", postfix);
  return postfix;
}
