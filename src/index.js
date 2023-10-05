module.exports = function check(str, bracketsConfig) {
  const stack = [];
  const bracketPairs = Object.fromEntries(bracketsConfig);

  for (const char of str) {
    if (char === bracketPairs[stack[stack.length - 1]]) {
      stack.pop();
    } else if (bracketPairs[char]) {
      stack.push(char);
    } else {
      return false;
    }
  }

  return stack.length === 0;
};

