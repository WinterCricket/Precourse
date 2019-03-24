function maxChar(str){
const chars = {};
for(let char of str){
  chars[char] = chars[char] +1 || 1;
}

return Object.keys(chars).reduce((a, b) => chars[a] > chars[b] ? a : b);
}
