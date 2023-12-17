import bcrypt from "bcryptjs-react";
import * as conValues from "./constants";

export const hashValue = ( (value:string, saltRounds:string = bcrypt.genSaltSync(10)):string => {
  const encryptedPassword:string = bcrypt.hashSync(value, saltRounds);
  return encryptedPassword
})

export const regexPWCheck = (password:string):boolean => {
  return conValues.PASSWORD_CHECK_REGEX.test(password);
} 

export const regexCheckForDigits = (password:string):boolean => {
  return conValues.REGEX_CHECK_DIGITS.test(password);
} 

export const regexCheckForLowerCase = (password:string):boolean => {
  return conValues.REGEX_CHECK_LOWERCASE.test(password);
} 

export const regexCheckForUpperCase = (password:string):boolean => {
  return conValues.REGEX_CHECK_UPPERCASE.test(password);
} 

export const regexCheckForSpecialChars = (password:string):boolean => {
  return conValues.REGEX_CHECK_SPECIAL_CHARS.test(password);
} 

export const checkPassword = (password:string):string => {
  let msg = "Password is missing:"
  if(regexPWCheck(password)) {
    return conValues.VALID;
  }

  if(!regexCheckForDigits(password)) {
    msg += " at least one digit,";
  }

  if(!regexCheckForLowerCase(password)) {
    msg += " a lower case character,";
  }

  if(!regexCheckForUpperCase(password)) {
    msg += " an upper case character,";
  }

  if(!regexCheckForSpecialChars(password)) {
    msg += " at least one special character (!@#$%^&*),";
  }

  const res = msg.replace(/.$/,".");
  return res;
}