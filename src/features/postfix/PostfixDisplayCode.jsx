import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
export const jsPostfixCode = `
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

function infixToPostfix() {
  let stack = [];
  let postfix = "",
    infix;
  infix = "A+(B/C-(D*E^F)+G)*H";

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
}

infixToPostfix();

  `;

export const cppPostfixCode = `
#include <iostream>
#include <cctype>
#include <stack>
#include <cstring>
using namespace std;

int priority(char op)
{
    if (op == '^')
        return 3;
    if (op == '*' || op == '/')
        return 2;
    if (op == '+' || op == '-')
        return 1;
    return 0;
}

int main()
{
    char infix[100];
    string postfix;

    stack<char> st;
    cout << "Enter the Infix Expression: " << endl;
    cin >> infix;
    int n = strlen(infix);
    int i = 0;
    while (i < n)
    {
        char ch = infix[i];
        if (isalnum(ch))
        {
            postfix += ch;
        }
        else if (ch == '(')
        {
            st.push(ch);
        }
        else if (ch == ')')
        {
            while (!st.empty() && st.top() != '(')
            {
                postfix += st.top();
                st.pop();
            }
            st.pop();
        }
        else
        {
            while (!st.empty() &&
                   ((priority(ch) < priority(st.top())) ||
                    (priority(ch) == priority(st.top()) && ch != '^')) &&
                   st.top() != '(')
            {

                postfix += st.top();
                st.pop();
            }
            st.push(ch);
        }
        i++;
    }
    while (!st.empty())
    {
        postfix += st.top();
        st.pop();
    }
    cout << "Postfix Expression: " << postfix;
    cout << endl;
    return 0;
}
  `;
export default function PostfixDisplayCode({ Language }) {
  return (
    <div>
      <SyntaxHighlighter language={Language} style={oneDark}>
        {Language == "javascript" ? jsPostfixCode : cppPostfixCode}
      </SyntaxHighlighter>
    </div>
  );
}
