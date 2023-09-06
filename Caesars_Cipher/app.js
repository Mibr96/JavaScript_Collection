// This function encrypts a string using the ROT13 cipher.
function rot13(str) {
    // Declare a variable to store the ASCII code of the current character.
    let charCode = 0;
  
    // Declare an array to store the characters of the encrypted string.
    let strArr = [];
  
    // Split the string into an array of characters.
    strArr = str.split("");
  
    // Iterate over the characters.
    for (let i = 0; i < strArr.length; i++) {
      // Get the ASCII code of the current character.
      charCode = strArr[i].charCodeAt();
  
      // If the ASCII code is within the range of uppercase letters, encrypt the character.
      if (charCode >= 65 && charCode <= 90) {
        // If the ASCII code is greater than 77, subtract 13 to encrypt it.
        if (charCode > 77) {
          charCode -= 13;
        }
        // Otherwise, add 13 to encrypt it.
        else {
          charCode += 13;
        }
  
        // Convert the encrypted ASCII code to a character and add it to the encrypted string array.
        strArr.splice(i, 1, String.fromCharCode(charCode));
      }
    }
  
    // Join the encrypted string array and return it.
    return strArr.join("");
  }
  
  // This function calls the `rot13()` function to encrypt the string "SERR PBQR PNZC" and prints the result.
  rot13("SERR PBQR PNZC");