function getElementWidth(content, padding, border) {
  return toNumber(content) + (2 * toNumber(padding)) + (2 * toNumber(border));
}

function toNumber(string) {
  return Number(string.replace('px', ''));
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
