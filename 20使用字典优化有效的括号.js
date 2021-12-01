/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(item) {
  if(item.length % 2 !== 0) return false;
    const stack = [];
    const m = new Map();
    m.set('(', ')');
    m.set('[', ']');
    m.set('{', '}');
    for (let i = 0; i < item.length; i++) {
      let flag = item[i];
      if(m.has(flag)) {
        stack.push(item[i]);
      } else {
        const max = stack[stack.length - 1];
        if(m.get(max) === flag){
          stack.pop();
        } else {
          return false;
        }
      }
    }
    return stack.length === 0;
  };