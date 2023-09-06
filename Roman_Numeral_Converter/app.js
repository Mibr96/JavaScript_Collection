function convertToRoman(num) {
    // Define an object that maps Arabic numerals to Roman numerals
    const numerals = {
      1: 'I',
      4: 'IV',
      5: 'V',
      9: 'IX',
      10: 'X',
      40: 'XL',
      50: 'L',
      90: 'XC',
      100: 'C',
      400: 'CD',
      500: 'D',
      900: 'CM',
      1000: 'M'
    };
  
    // Initialize a variable to store the Roman numerals representation
    let romanizedNumerals = '';
  
    // Get an array of Arabic numerals in descending order
    const arabicNumerals = Object.keys(numerals).reverse();
  
    // Iterate through the Arabic numerals in descending order
    arabicNumerals.forEach(key => {
      // While the current Arabic numeral is less than or equal to the input 'num'
      while (key <= num) {
        // Append the corresponding Roman numeral to the result
        romanizedNumerals += numerals[key];
        // Subtract the Arabic numeral from 'num'
        num -= key;
      }
    });
  
    // Return the final Roman numerals representation
    return romanizedNumerals;
  }