function rot13(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);

    if (charCode >= 65 && charCode <= 90) { 
      charCode = (charCode - 65 + 13) % 26 + 65;
    } else if (charCode >= 97 && charCode <= 122) {
      charCode = (charCode - 97 + 13) % 26 + 97;
    }

    result += String.fromCharCode(charCode);
  }

  return result.toUpperCase();
}

rot13("SERR PBQR PNZC");