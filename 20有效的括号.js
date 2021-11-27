function isVaild(item) {
  if(item.length % 2 !== 0) return false;
  const stack = [];
  for (let i = 0; i < item.length; i++) {
    if(item[i] === '(' || item[i] === '[' || item[i] === '{') {
      stack.push(item[i]);
    } else {
      const max = stack[stack.length - 1];
      if((max === '(' && item[i] === ')') || (max === '[' && item[i] === ']') || (max === '{' && item[i] === '}')){
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return !stack.length ? true : false;
  
}

console.log(isVaild("([(])"));

// 比较常见的栈操作  先进后出 