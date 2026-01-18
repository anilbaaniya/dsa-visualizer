import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import language from "react-syntax-highlighter/dist/esm/languages/hljs/1c";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export const jsStackCode = `
class Stack {
  constructor(maxSize = 10) {
    this.items = new Array(maxSize);
    this.maxSize = maxSize;
    this.top = -1;
  }

  // Push operation
  push(element) {
    if (this.top === this.maxSize - 1) {
      console.log("Stack Overflow!");
      return;
    }

    this.top++;
    this.items[this.top] = element;
    console.log(\`\${element} is pushed into the stack!\`);
  }

  // Pop operation
  pop() {
    if (this.top === -1) {
      console.log("Stack Underflow!");
      return;
    }

    const removed = this.items[this.top];
    this.items[this.top] = null;
    this.top--;
    console.log(\`\${removed} is popped from the stack\`);
  }

  // Peek operation
  peek() {
    if (this.top === -1) {
      console.log("Stack is empty!");
      return;
    }

    console.log(\`\${this.items[this.top]} is the top element\`);
  }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.peek();
stack.pop();
`;

export const cppStackCode = `
#include <iostream>
using namespace std;
#define MAX 5
class Stack
{
    int stack[MAX];
    int top;

public:
    Stack()
    {
        top = -1;
    }

    void push(int value)
    {
        if (top == MAX - 1)
        {
            cout << "Stack overflow!" << endl;
        }
        else
        {
            top++;
            stack[top] = value;
            cout << value << " is pushed into stack" << endl;
        }
    }

    void pop()
    {
        if (top == -1)
        {
            cout << "Stack underflow!" << endl;
        }
        else
        {
            int x = stack[top];
            cout << x << " is popped from the stack!" << endl;
            top--;
        }
    }

    void peek()
    {
        if (top == -1)
        {
            cout << "Stack underflow!" << endl;
        }
        else
        {
            cout << "Top element = " << stack[top] << endl;
        }
    }
};

int main()
{
    Stack st;
    st.push(10);
    st.push(20);
    st.peek();
    st.pop();
    st.pop();
    return 0;
}
`;
export default function StackDisplayCode({ Language }) {
  return (
    <div>
      <SyntaxHighlighter language={Language} style={oneDark}>
        {Language == "javascript" ? jsStackCode : cppStackCode}
      </SyntaxHighlighter>
    </div>
  );
}
