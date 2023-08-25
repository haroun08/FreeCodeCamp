function convertToRoman(num) {
  if (num > 9999) {
    return "Too big";
  } else if (num < 0) {
    return "Too little";
  }

  const array = [
    [1000, "M"], [900, "CM"], [500, "D"], [400, "CD"],
    [100, "C"], [90, "XC"], [50, "L"], [40, "XL"],
    [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"]
  ];

  let result = "";

  for (let i = 0; i < array.length; i++) {
    while (num >= array[i][0]) {
      result += array[i][1];
      num -= array[i][0];
    }
  }

  return result;
}
