function palindrome(str) {
    str = str.replace(/[^a-z0-9]/gi, ""); // remove all non-alphanumeric characters
    str = str.toLowerCase(); // convert all characters to lowercase
    for (let i = 0; i < str.length / 2; i++) {
      if (str[i] !== str[str.length - i - 1]) {
        return false;
      }
    }
    return true;
  }
  
  
  
  // TEST CASES
  
  palindrome("eye"); // should return true
  
  palindrome("_eye"); // should return true
  
  palindrome("race car"); // should return true
  
  palindrome("not a palindrome"); // should return false
  
  palindrome("A man, a plan, a canal. Panama"); // should return true
  
  palindrome("never odd or even"); // should return true
  
  palindrome("nope"); // should return false
  
  palindrome("almostomla"); // should return false
  
  palindrome("My age is 0, 0 si ega ym."); // should return true
  
  palindrome("1 eye for of 1 eye."); // should return false
  
  palindrome("0_0 (: /-\ :) 0-0"); // should return true
  
  palindrome("five|\_/|four"); // should return false