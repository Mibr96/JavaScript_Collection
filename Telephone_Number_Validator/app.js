function telephoneCheck(str) {
    // Split the input string into an array of characters
    let arr = str.split("");
    // Create a backup array by excluding the last character
    let backupArr = arr.slice(0, arr.length - 1);
    // Initialize counts for open parentheses, close parentheses, and hyphens
    let openParaCount = 0;
    let closeParaCount = 0;
    let hyCount = 0;
    // Initialize an empty array to store parsed digits
    let arrTwo = [];
    // Initialize a count for a specific condition
    let hello = 0;
  
    // Check if the phone number starts with an open parenthesis and ends with a close parenthesis
    if ((arr[0] == "(") && (arr[arr.length - 1] == ")")) {
      return false;
    } else {
      // Loop through the characters in the array
      for (let i = 0; i < arr.length; i++) {
        // Count hyphens
        if (arr[i] == "-") {
          hyCount++;
        }
        // Count open parentheses
        if (arr[i] == "(") {
          openParaCount++;
        } else if (arr[i] == ")") {
          // Count close parentheses
          closeParaCount++;
        }
        // Check for specific characters: open parenthesis, close parenthesis, hyphen, or space
        if ((arr[i] == "(") || (arr[i] == ")") || (arr[i] == "-") || (arr[i] == " ")) {
          // Check if the next character is a space
          if (arr[i + 1] == " ") {
            // Check if the character two positions ahead is a valid character
            if ((arr[i + 2] == "(") || (arr[i + 2] == ")") || (arr[i + 2] == "-") || (arr[i + 2] == " ")) {
              hello++;
            }
          } else {
            // Remove invalid character and adjust the loop index
            arr.splice(i, 1);
            i--;
          }
        }
      }
      // Check if the phone number starts with "1" and has an open parenthesis in the third position
      if ((backupArr[0] == "1") && (backupArr[2] == "(")) {
        return true;
      } else if ((openParaCount != closeParaCount) || (hyCount > 2)) {
        // Check for imbalanced parentheses or too many hyphens
        return false;
      }
      // Convert the remaining characters to integers and store in arrTwo
      for (let i = 0; i < arr.length; i++) {
        arrTwo[i] = parseInt(arr[i]);
      }
      // Check for valid phone number lengths (10 digits or 11 digits starting with "1")
      if ((arrTwo.length == 10) || ((arrTwo.length == 11) && (arrTwo[0] == 1))) {
        return true;
      } else if (hello > 1) {
        // Check for a specific condition with multiple consecutive special characters
        return false;
      } else {
        // Default case if none of the conditions are met
        return false;
      }
    }
  }
  
  // Example usage
  console.log(telephoneCheck("555-555-5555"));