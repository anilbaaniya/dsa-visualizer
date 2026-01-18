import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
export const jsPrefixCode = `
function priority(ch) {
  if (ch == "^") return 3;
  if (ch == "*" || ch == "/") return 2;
  if (ch == "+" || ch == "-") return 1;
  return 0;
}

function infixToPrefix() {
  let prevInfix = "(A+B)*(C-D)/E+F^G";
  let prefix = "";
  let infixArr = prevInfix.split("").reverse();
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
  console.log(finalPrefix);
}

infixToPrefix();
  `;

export const cppPrefixCode = `
#include <iostream>
#include <string>
#include <algorithm>
#include <stack>

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
    string infix, prefix = "";
    stack<char> st;
    cout << "Enter the infix expression: ";
    cin >> infix;
    reverse(infix.begin(), infix.end());
    for (int i = 0; i < infix.length(); i++)
    {
        if (infix[i] == '(')
        {
            infix[i] = ')';
        }
        else if (infix[i] == ')')
        {
            infix[i] = '(';
        }
    }
    for (int i = 0; i < infix.length(); i++)
    {
        char ch = infix[i];
        if (isalnum(ch))
        {
            prefix += ch;
        }
        else if (ch == '(')
        {
            st.push(ch);
        }
        else if (ch == ')')
        {
            while (!st.empty() && st.top() != '(')
            {
                prefix += st.top();
                st.pop();
            }
            st.pop();
        }
        else
        {
            while (!st.empty() && priority(ch) < priority(st.top()) && st.top() != '(')
            {
                prefix += st.top();
                st.pop();
            }
            st.push(ch);
        }
    }
    while (!st.empty())
    {
        prefix += st.top();
        st.pop();
    }
    reverse(prefix.begin(), prefix.end());

    cout << "Prefix = " << prefix;
}
  `;
export default function PrefixDisplayCode({ Language }) {
  return (
    <div>
      <SyntaxHighlighter language={Language} style={oneDark}>
        {Language == "javascript" ? jsPrefixCode : cppPrefixCode}
      </SyntaxHighlighter>
    </div>
  );
}
