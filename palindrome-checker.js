function palindrome(str) {
  let list = str.split(/[\W_]/g);
  let string = list.join('');
  string = string.toLowerCase();
  for (let i = 0; i < string.length / 2; i++) {
    if (string[i] !== string[string.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
